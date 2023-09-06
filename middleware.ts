import { OAuthStrategy, createClient } from '@wix/sdk';
import { WIX_REFRESH_TOKEN_COOKIE } from 'lib/constants';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const res = NextResponse.next();
  if (cookies.get(WIX_REFRESH_TOKEN_COOKIE)) {
    return res;
  }
  const wixClient = createClient({
    auth: OAuthStrategy({ clientId: process.env.WIX_CLIENT_ID! })
  });
  const tokens = await wixClient.auth.generateVisitorTokens();
  res.cookies.set(WIX_REFRESH_TOKEN_COOKIE, JSON.stringify(tokens.refreshToken), {
    maxAge: 60 * 60 * 24 * 30
  });
  return res;
}

export const config = {
  unstable_allowDynamic: ['/node_modules/.pnpm/lodash@*/**']
};
