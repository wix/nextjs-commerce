import { createClient, OAuthStrategy } from '@wix/sdk';

export const wixClient = createClient({
    auth: OAuthStrategy({
      clientId: process.env.WIX_CLIENT_ID
    })
  });
