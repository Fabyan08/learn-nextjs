// Jika ingin membatasi url
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = true;

  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //   if (request.nextUrl.pathname.startsWith("/about")) {
  //     return NextResponse.redirect(new URL("/", request.url)); //Tidak bisa  masuk ke about karena di redirect lgsung
  //   }
}
// path* pada matcher digunakan untuk middleware semua folder yang ada di situ
export const config = {
  matcher: ["/dashboard/:path*", "/about/:path*"]
};
