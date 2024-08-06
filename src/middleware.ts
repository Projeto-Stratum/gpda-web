import { NextRequest, NextResponse } from "next/server";
import { CookieKey } from "@global-utils/cookies/types";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(CookieKey.UserId)?.value;
  // console.log(req.cookies.get(CookieKey.JwtAuthToken)?.value);
  if (req.url.includes(`engenharia-do-futuro/avaliacao`)) {
    if (!token || token.length === 0) {
      if (req.url.includes(`verify-judge`)) return;
      return NextResponse.redirect(`${req.nextUrl.origin}/verify-judge`);
    }
  }

  return NextResponse.next();
}
