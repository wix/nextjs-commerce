import { ProductOptionChoice } from '@wix/head/stores/product/components/client';
import { ProductVariantSelector } from '@wix/head/stores/product/components/server';
import { ProductIdentifier } from '@wix/head/stores/product/server';
import clsx from 'clsx';

export function VariantSelector({ identifier }: { identifier: ProductIdentifier }) {
  return (
    <ProductVariantSelector identifier={identifier}>
      {(options) =>
        options.map((option) => (
          <dl className="mb-8" key={option.name}>
            <dt className="mb-4 text-sm uppercase tracking-wide">{option.name}</dt>
            <dd className="flex flex-wrap gap-3">
              {(option.choices ?? []).map((_, index) => (
                <ProductOptionChoice
                  key={index}
                  choiceIndex={index}
                  option={option}
                  className={clsx(
                    'flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900',
                    'data-[is-active=true]:cursor-default data-[is-active=true]:ring-2 data-[is-active=true]:ring-blue-600',
                    'data-[is-active=false]:data-[is-available=true]:ring-1 data-[is-active=false]:data-[is-available=true]:ring-transparent data-[is-active=false]:data-[is-available=true]:transition data-[is-active=false]:data-[is-available=true]:duration-300 data-[is-active=false]:data-[is-available=true]:ease-in-out data-[is-active=false]:data-[is-available=true]:hover:scale-110 data-[is-active=false]:data-[is-available=true]:hover:ring-blue-600 ',
                    'data-[is-available=false]:relative data-[is-available=false]:z-10 data-[is-available=false]:cursor-not-allowed data-[is-available=false]:overflow-hidden data-[is-available=false]:bg-neutral-100 data-[is-available=false]:text-neutral-500 data-[is-available=false]:ring-1 data-[is-available=false]:ring-neutral-300 data-[is-available=false]:before:absolute data-[is-available=false]:before:inset-x-0 data-[is-available=false]:before:-z-10 data-[is-available=false]:before:h-px data-[is-available=false]:before:-rotate-45 data-[is-available=false]:before:bg-neutral-300 data-[is-available=false]:before:transition-transform data-[is-available=false]:dark:bg-neutral-900 data-[is-available=false]:dark:text-neutral-400 data-[is-available=false]:dark:ring-neutral-700 data-[is-available=false]:before:dark:bg-neutral-700'
                  )}
                />
              ))}
            </dd>
          </dl>
        ))
      }
    </ProductVariantSelector>
  );
}
