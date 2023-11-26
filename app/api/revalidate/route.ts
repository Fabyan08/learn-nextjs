import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_TOKEN) {
    //Ambol Token Revalidate dari .env.local
    return NextResponse.json(
      { status: 401, message: "Invalid Secret Token" },
      { status: 401 }
    );
  }

  if (!tag) {
    return NextResponse.json(
      { status: 400, message: "Missing tag" },
      { status: 400 }
    );
  }
  revalidateTag(tag);

  return NextResponse.json({ Revalidate: true, now: Date.now() });
}
