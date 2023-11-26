import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  // Tangkap hasil post dari login
  console.log(res);
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: res,
  });
}
