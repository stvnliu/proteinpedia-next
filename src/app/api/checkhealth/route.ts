import { NextResponse } from "next/server";

enum StatusCodes {
  NORMAL = 200,
  WARNING = 300,
  ERROR = 400,
}
export function GET() {
  return NextResponse.json(
    {
      status: {
        code: StatusCodes.NORMAL,
      },
    },
  );
}
