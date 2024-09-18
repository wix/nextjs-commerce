import { items } from '@wix/data';
import { createClient, OAuthStrategy } from '@wix/sdk';

export const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID
  })
});
