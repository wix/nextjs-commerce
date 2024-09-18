import { getCollectionProducts } from 'lib/wix';
import { Card } from './category-card';

export async function Article() {
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products || products.length === 0) return null;
  const cardProducts = [...products];

  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
      {cardProducts.map((product, index) => (
        <Card
          key={`${product.handle}-${index}`}
          title={product.title}
          cardImage={product.featuredImage?.url}
          description={`Price: ${product.priceRange.maxVariantPrice.amount} ${product.priceRange.maxVariantPrice.currencyCode}`}
          link={`/product/${product.handle}`}
        />
      ))}
    </section>
  );
}
