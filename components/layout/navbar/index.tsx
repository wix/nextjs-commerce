import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/wix';
import { Menu } from 'lib/wix/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const fetchedMenu = await getMenu('next-js-frontend-header-menu');

  const menuToDisplay = fetchedMenu.slice(0, 5);
  const dropdownMenuItems = fetchedMenu.slice(5);

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6 bg-white">
      <div className="block flex-none lg:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={fetchedMenu} />
        </Suspense>
      </div>
      <div className="flex w-full items-centre">
        <div className="flex">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            {/* <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div> */}
          </Link>
        </div>
        <div className="relative ml-4 mr-4 flex flex-grow">
          <ul className="hidden gap-6 text-sm lg:flex md:items-center">
            {menuToDisplay.map((item: Menu) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  prefetch={true}
                  className="text-justify align-middle text-neutral-500 underline-offset-4 hover:text-black hover:underline  "
                >
                  {item.title}
                </Link>
              </li>
            ))}
            {dropdownMenuItems.length > 0 && (
              <li className="group relative">
                <button className="text-neutral-500 underline-offset-4 hover:text-black hover:underline  ">
                  More
                </button>
                <ul className="absolute left-1/2 top-full z-50 hidden w-48 -translate-x-1/2 transform bg-white shadow-lg group-hover:block ">
                  {dropdownMenuItems.map((item: Menu) => (
                    <li key={item.title}>
                      <Link
                        href={item.path}
                        prefetch={true}
                        className="block px-4 py-2 text-sm text-neutral-500 hover:bg-gray-100  "
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </div>
        <div className="flex  items-center justify-between">
          <div className="mr-4 hidden justify-center md:flex">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
