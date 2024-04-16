import { OAuthStrategy, createClient } from '@wix/sdk';
import { WIX_REFRESH_TOKEN_COOKIE } from 'lib/constants';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookies = request.cookies;
  if (cookies.get(WIX_REFRESH_TOKEN_COOKIE)) {
    return NextResponse.next();
  }

  const wixClient = createClient({
    auth: OAuthStrategy({ clientId: process.env.WIX_CLIENT_ID! })
  });
  const tokens = await wixClient.auth.generateVisitorTokens();

  request.cookies.set(WIX_REFRESH_TOKEN_COOKIE, JSON.stringify(tokens.refreshToken));
  const res = NextResponse.next({
    request
  });

  res.cookies.set(WIX_REFRESH_TOKEN_COOKIE, JSON.stringify(tokens.refreshToken), {
    maxAge: 60 * 60 * 24 * 30
  });
  return res;
}
