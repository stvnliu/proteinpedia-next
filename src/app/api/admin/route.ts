import { randomUUID } from "crypto";
import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
type AdminRequestData = {
  adminName: string;
  adminPassword: string;
};

const mongoUrl = "mongodb://localhost:27017";
const client = new MongoClient(mongoUrl);
const credDbRef = client.db("proteinpedia").collection("cred");
export function GET() {
  return new NextResponse("ok");
}
export async function POST(req: NextRequest) {
  const reqBody = await req.json() as AdminRequestData;
  // FIXME Explicitly defined plaintext adminName and adminPassword
  // FIXME Integrate SHA256-based password digests (use crypto)
  if (
    reqBody.adminName == "admin" &&
    reqBody.adminPassword == "adminpasswordfordev"
  ) {
    const validDate: Date = new Date();
    validDate.setTime(validDate.getTime() + 20 * 60 * 1000);
    const authDoc = {
      success: true,
      authKey: randomUUID(),
      validUntil: validDate.getTime(),
    };
    // Insert new record
    credDbRef.insertOne(authDoc);
    // Remove expired records
    credDbRef.deleteMany({ validUntil: { $lt: Date.now() } });
    return new NextResponse(
      JSON.stringify(authDoc),
    );
  } else {
    return new NextResponse(
      JSON.stringify({
        success: false,
      }),
    );
  }
}
