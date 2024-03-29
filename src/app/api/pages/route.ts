import { PageData } from "@/app/types/pageTypes";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
	success: boolean;
	document?: PageData;
};
const mongoUrl = "mongodb://localhost:27017";
const client = new MongoClient(mongoUrl);

export async function GET(req: NextRequest) {
	console.log("triggered request handler");

	const result = await client
		.db("proteinpedia")
		.collection("pages")
		.findOne({ key: req.nextUrl.searchParams.get("key") });
	if (result === null) {
		return new NextResponse(
			JSON.stringify({
				success: false,
				document: undefined,
			})
		);
	} else {
		return new NextResponse(
			JSON.stringify({
				success: true,
				document: result as PageData,
			}),
			{ headers: { "Content-Type": "application/json" } }
		);
	}
}
