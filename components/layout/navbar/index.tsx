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
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={fetchedMenu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
        </div>
        <div className="relative">
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            {menuToDisplay.map((item: Menu) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  prefetch={true}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            {dropdownMenuItems.length > 0 && (
              <li className="group relative">
                <button className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                  More
                </button>
                <ul className="absolute left-1/2 top-full z-50 mt-2 hidden w-48 -translate-x-1/2 transform bg-white shadow-lg group-hover:block dark:bg-gray-800">
                  {dropdownMenuItems.map((item: Menu) => (
                    <li key={item.title}>
                      <Link
                        href={item.path}
                        prefetch={true}
                        className="block px-4 py-2 text-sm text-neutral-500 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-gray-700"
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
        <div className="hidden justify-center md:flex md:w-1/3 ">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
