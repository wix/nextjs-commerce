import { createClient, OAuthStrategy, Tokens } from '@wix/sdk';
import { WIX_SESSION_COOKIE } from 'lib/constants';
import { NextRequest, NextResponse } from 'next/server';

const wixClient = createClient({
  auth: OAuthStrategy({
    clientId: process.env.WIX_CLIENT_ID!
  })
});

export async function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const sessionCookie = cookies.get(WIX_SESSION_COOKIE);

  let sessionTokens = sessionCookie
    ? (JSON.parse(sessionCookie.value) as Tokens)
    : await wixClient.auth.generateVisitorTokens();

  if (sessionTokens.accessToken.expiresAt < Math.floor(Date.now() / 1000)) {
    sessionTokens = await wixClient.auth.renewToken(sessionTokens.refreshToken);
  }

  request.cookies.set(WIX_SESSION_COOKIE, JSON.stringify(sessionTokens));
  const res = NextResponse.next({
    request
  });
  res.cookies.set(WIX_SESSION_COOKIE, JSON.stringify(sessionTokens));

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)'
  ]
};
