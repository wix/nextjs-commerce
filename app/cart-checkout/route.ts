import { createCheckoutUrl } from 'lib/wix';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const checkoutUrl = await createCheckoutUrl(new URL(req.url).origin);

  return NextResponse.redirect(checkoutUrl, { status: 302 });
}
