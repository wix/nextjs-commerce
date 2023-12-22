import { ProductPrice, ProductTitle } from '@wix/head/stores/product/components/server';
import { ProductIdentifier } from '@wix/head/stores/product/server';
import { AddToCart } from 'components/cart/add-to-cart';
import Prose from 'components/prose';
import { Product } from 'lib/wix/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({
  product,
  identifier
}: {
  product: Product;
  identifier: ProductIdentifier;
}) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <ProductTitle identifier={identifier} className="mb-2 text-5xl font-medium" />
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <ProductPrice identifier={identifier} />
        </div>
      </div>
      <VariantSelector identifier={identifier} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart
        productId={product.id}
        variants={product.variants}
        availableForSale={product.availableForSale}
      />
    </>
  );
}
