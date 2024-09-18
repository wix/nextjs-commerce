import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import SubscribeNewsLetter from 'components/newsletter-form';
import { getMenu } from 'lib/wix';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 ';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500">
      <div className="mx-auto flex w-full flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1" href="/">
            <LogoSquare size="sm" />
          </Link>
          <div>
            <h1 id="about-us" className="text-center text-black underline">
              ABOUT US
            </h1>
            <p className="mt-3">
              The main objective of Indian-flowers.com to establish is to make all varieties of
              flowers that are available only in India, now in the USA. With many Indians longing
              and striving to celebrate their special events and festivals the way how they enjoyed
              in their hometown, we understand that flowers have a major role to play in it. This
              has motivated and initiated us to start a platform that enables you to shop for your
              favorite flowers of India. No matter you want loose flowers, flower strings, special
              leaves, or garlands we are ready to make them available at your doorstep immediately.
              We also accept special customized orders like specific colors and flower garlands and
              strings according to your requirements. We can provide garlands and flowers for
              weddings, house warming ceremonies, festivals, and any special family events. Feel
              free to contact us for any specific flower shipping. We are there to serve you
              instantly, once we hear from you!
            </p>
          </div>
          <div>
            <div id="contact-us" className="mt-5 justify-around md:flex">
              <div>
                <h1 className="mb-5 mt-5 text-black underline">CONTACT US</h1>
                <div>Online store. </div>
                <div>Address for Reference only.</div>
                <div> 6893 Alverno Ln,Inver Grove heights</div>
                <div>Minnesota-55077</div>
              </div>
              <div>
                <h1 className="mb-5 mt-5 text-black underline">OPENING HOURS</h1>
                <div>All days Online: 8am - 8pm </div>
                <div>Call: +1 (201) 443-6606</div>
              </div>
              <SubscribeNewsLetter />
            </div>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            Copyright © 2020{' '}
            <a className="hover:underline" href="https://indian-flowers.com/">
              {' '}
              Indian Flowers
            </a>{' '}
            All rights reserved.
          </p>
          <p>
            <a className="hover:underline" href="https://indian-flowers.com/privacy-policy/">
              Privacy Policy
            </a>
          </p>
          <p className="md:ml-auto">
            <a className="text-black">Created by Lemorian.tech</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
