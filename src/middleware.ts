import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SUPPORTED = ["it", "en"] as const;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ignore next internals / file statici / api
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const first = pathname.split("/")[1];
  const hasLang = SUPPORTED.includes(first as any);

  if (!hasLang) {
    const url = req.nextUrl.clone();
    url.pathname = `/it${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
