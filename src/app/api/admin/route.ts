import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
type AdminRequestData = {
  adminName: string;
  adminPassword: string;
};
export function GET() {
  return new NextResponse("ok");
}
export async function POST(req: NextRequest) {
  const reqBody = await req.json() as AdminRequestData;
  if (
    reqBody.adminName == "admin" &&
    reqBody.adminPassword == "adminpasswordfordev"
  ) {
    const validDate: Date = new Date();
    validDate.setTime(validDate.getTime() + 20 * 60 * 1000);
    return new NextResponse(
      JSON.stringify({
        success: true,
        authKey: randomUUID(),
        validUntil: validDate.getTime(),
      }),
    );
  } else {
    return new NextResponse(
      JSON.stringify({
        success: false,
      }),
    );
  }
}
