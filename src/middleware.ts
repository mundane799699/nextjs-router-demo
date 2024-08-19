import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("enter middleware  ", request.nextUrl.pathname);
  const adminToken = request.cookies.get("Admin-Token")?.value;
  console.log(adminToken);
  if (request.nextUrl.pathname === "/dashboard" && !adminToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
