import { OAuthStrategy, createClient } from '@wix/sdk';
import { WIX_REFRESH_TOKEN_COOKIE } from 'lib/constants';
import { cookies } from 'next/headers';
import { FragmentType, useFragment } from './generated';
import { graphql } from './generated/gql';
import { CatalogV1OptionType, CollectionFragment, CommonSortOrder } from './generated/graphql';
import { Cart, Collection, Menu, Page, Product, ProductVariant } from './types';

const cartesian = <T>(data: T[][]) =>
  data.reduce((a, b) => a.flatMap((d) => b.map((e) => [...d, e])), [[]] as T[][]);

const cartFragment = graphql(`
  fragment Cart on EcomCartV1Cart {
    id
    lineItems {
      id
      productName {
        original
      }
      descriptionLines {
        plainText {
          original
        }
        colorInfo {
          original
        }
      }
      quantity
      price {
        amount
      }
      image {
        url
        width
        height
        altText
      }
      url {
        relativePath
      }
    }
    currency
  }
`);

type WixStoresCart = NonNullable<
  FragmentType<typeof cartFragment>[' $fragmentRefs']
>['CartFragment'];

const reshapeCart = (cart: WixStoresCart): Cart => {
  return {
    id: cart.id!,
    checkoutUrl: '/cart-checkout',
    cost: {
      subtotalAmount: {
        amount: String(
          cart.lineItems!.reduce((acc, item) => {
            return acc + Number.parseFloat(item!.price?.amount!) * item!.quantity!;
          }, 0)
        ),
        currencyCode: cart.currency!
      },
      totalAmount: {
        amount: String(
          cart.lineItems!.reduce((acc, item) => {
            return acc + Number.parseFloat(item!.price?.amount!) * item!.quantity!;
          }, 0)
        ),
        currencyCode: cart.currency!
      },
      totalTaxAmount: {
        amount: '0',
        currencyCode: cart.currency!
      }
    },
    lines: cart.lineItems!.map((item) => {
      return {
        id: item!.id!,
        quantity: item!.quantity!,
        cost: {
          totalAmount: {
            amount: String(Number.parseFloat(item!.price?.amount!) * item!.quantity!),
            currencyCode: cart.currency!
          }
        },
        merchandise: {
          id: item!.id!,
          title:
            item!.descriptionLines
              ?.map((x) => x!.colorInfo?.original ?? x!.plainText?.original)
              .join(' / ') ?? '',
          selectedOptions: [],
          product: {
            handle: item!.url?.relativePath?.split('/').pop() ?? '',
            featuredImage: {
              altText: 'altText' in item!.image! ? item!.image.altText : 'alt text',
              url: item!.image!.url,
              width: item!.image!.width,
              height: item!.image!.height
            },
            title: item!.productName?.original!
          } as any as Product,
          url: `/product/${item!.url?.relativePath?.split('/').pop() ?? ''}`
        }
      };
    }),
    totalQuantity: cart.lineItems!.reduce((acc, item) => {
      return acc + item!.quantity!;
    }, 0)
  };
};

const collectionFragment = graphql(`
  fragment Collection on CatalogV1Collection {
    id
    name
    slug
    description
  }
`);

type WixStoresCollection = NonNullable<
  FragmentType<typeof collectionFragment>[' $fragmentRefs']
>['CollectionFragment'];

const reshapeCollection = (collection: WixStoresCollection) =>
  ({
    path: `/search/${collection.slug}`,
    handle: collection.slug,
    title: collection.name,
    description: collection.description,
    seo: {
      title: collection.name
    },
    updatedAt: new Date().toISOString()
  }) as Collection;

const reshapeCollections = (collections: CollectionFragment[]) => {
  return collections.map(reshapeCollection);
};

const productFragment = graphql(`
  fragment Product on CatalogV1Product {
    id
    name
    description
    stock {
      inventoryStatus
    }
    slug
    media {
      mainMedia {
        image {
          url
          altText
          width
          height
        }
      }
      items {
        image {
          url
          altText
          width
          height
        }
      }
    }
    price {
      price
      currency
    }
    manageVariants
    variants {
      id
      choices
      variant {
        priceData {
          price
          currency
        }
      }
      stock {
        trackQuantity
        quantity
      }
    }
    productOptions {
      name
      optionType
      choices {
        value
        description
      }
    }
    lastUpdated
  }
`);

type WixStoresProduct = NonNullable<
  FragmentType<typeof productFragment>[' $fragmentRefs']
>['ProductFragment'];

const reshapeProduct = (item: WixStoresProduct) => {
  return {
    id: item.id,
    title: item.name,
    description: item.description!,
    descriptionHtml: item.description!,
    availableForSale:
      item.stock?.inventoryStatus === 'IN_STOCK' ||
      item.stock?.inventoryStatus === 'PARTIALLY_OUT_OF_STOCK',
    handle: item.slug!,
    images:
      item.media
        ?.items!.filter((x) => x!.image)
        .map((image) => ({
          url: image!.image!.url!,
          altText: image!.image?.altText! ?? 'alt text',
          width: image!.image?.width!,
          height: image!.image?.height!
        })) || [],
    priceRange: {
      minVariantPrice: {
        amount: String(item.price?.price!),
        currencyCode: item.price?.currency!
      },
      maxVariantPrice: {
        amount: String(item.price?.price!),
        currencyCode: item.price?.currency!
      }
    },
    options: (item.productOptions ?? []).map((option) => ({
      id: option!.name!,
      name: option!.name!,
      values: option!.choices!.map((choice) =>
        option!.optionType === CatalogV1OptionType.Color ? choice!.description : choice!.value
      )
    })),
    featuredImage: {
      url: item.media?.mainMedia?.image?.url!,
      altText: item.media?.mainMedia?.image?.altText! ?? 'alt text',
      width: item.media?.mainMedia?.image?.width!,
      height: item.media?.mainMedia?.image?.height!
    },
    tags: [],
    variants: item.manageVariants
      ? item.variants?.map((variant) => ({
          id: variant!.id!,
          title: item.name!,
          price: {
            amount: String(variant!.variant?.priceData?.price),
            currencyCode: variant!.variant?.priceData?.currency
          },
          availableForSale: variant!.stock?.trackQuantity
            ? variant!.stock?.quantity ?? 0 > 0
            : true,
          selectedOptions: Object.entries(variant!.choices ?? {}).map(([name, value]) => ({
            name,
            value
          }))
        }))
      : cartesian(
          item.productOptions?.map(
            (x) =>
              x!.choices?.map((choice) => ({
                name: x!.name,
                value:
                  x!.optionType === CatalogV1OptionType.Color ? choice!.description : choice!.value
              })) ?? []
          ) ?? []
        ).map((selectedOptions) => ({
          id: '00000000-0000-0000-0000-000000000000',
          title: item.name!,
          price: {
            amount: String(item.price?.price!),
            currencyCode: item.price?.currency!
          },
          availableForSale: item.stock?.inventoryStatus === 'IN_STOCK',
          selectedOptions: selectedOptions
        })),
    seo: {
      description: item.description!,
      title: item.name!
    },
    updatedAt: item.lastUpdated?.toString()!
  } as Product;
};

export async function addToCart(
  lines: { productId: string; variant?: ProductVariant; quantity: number }[]
): Promise<Cart> {
  const lineItems = lines.map(({ productId, variant, quantity }) => ({
    catalogReference: {
      catalogItemId: productId,
      appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
      ...(variant && {
        options:
          variant.id === '00000000-0000-0000-0000-000000000000'
            ? {
                options: variant.selectedOptions.reduce(
                  (acc, option) => ({ ...acc, [option.name!]: option.value! }),
                  {} as Record<string, string>
                )
              }
            : { variantId: variant?.id }
      })
    },
    quantity
  }));

  const { data } = await getWixClient().graphql(
    graphql(`
      mutation AddToCart($lineItems: [EcomCartV1LineItemInput!]!) {
        ecomCurrentCartV1AddToCurrentCart(input: { lineItems: $lineItems }) {
          cart {
            ...Cart
          }
        }
      }
    `),
    {
      lineItems
    }
  );

  return reshapeCart(data.ecomCurrentCartV1AddToCurrentCart?.cart!);
}

export async function removeFromCart(lineIds: string[]): Promise<Cart> {
  const { data } = await getWixClient().graphql(
    graphql(`
      mutation RemoveLineItemsFromCurrentCart($lineIds: [String!]!) {
        ecomCurrentCartV1RemoveLineItemsFromCurrentCart(input: { lineItemIds: $lineIds }) {
          cart {
            ...Cart
          }
        }
      }
    `),
    {
      lineIds
    }
  );

  return reshapeCart(data.ecomCurrentCartV1RemoveLineItemsFromCurrentCart?.cart!);
}

export async function updateCart(
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const { data } = await getWixClient().graphql(
    graphql(`
      mutation UpdateCurrentCartLineItemQuantity(
        $lineItems: [EcomCartV1LineItemQuantityUpdateInput!]!
      ) {
        ecomCurrentCartV1UpdateCurrentCartLineItemQuantity(input: { lineItems: $lineItems }) {
          cart {
            ...Cart
          }
        }
      }
    `),
    {
      lineItems: lines.map(({ id, quantity }) => ({
        id: id,
        quantity
      }))
    }
  );

  return reshapeCart(data.ecomCurrentCartV1UpdateCurrentCartLineItemQuantity?.cart!);
}

export async function getCart(): Promise<Cart | undefined> {
  const { data, errors } = await getWixClient().graphql(
    graphql(`
      mutation GetCurrentCart {
        ecomCartV1CurrentCartGetCurrentCart {
          cart {
            ...Cart
          }
        }
      }
    `),
    {}
  );

  if (
    (errors?.[0]?.extensions?.applicationError as { code: string })?.code === 'OWNED_CART_NOT_FOUND'
  ) {
    return undefined;
  }

  return reshapeCart(data.ecomCartV1CurrentCartGetCurrentCart?.cart!);
}

export async function getCollection(handle: string): Promise<Collection | undefined> {
  const { data } = await getWixClient().graphql(
    graphql(`
      mutation CollectionBySlug($slug: String!) {
        storesProductsV1GetCollectionBySlug(input: { slug: $slug }) {
          collection {
            ...Collection
          }
        }
      }
    `),
    {
      slug: handle
    }
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return reshapeCollection(
    useFragment(collectionFragment, data.storesProductsV1GetCollectionBySlug?.collection!)
  );
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const { data } = await getWixClient().graphql(
    graphql(`
      mutation GetcollectionProducts($slug: String!, $sort: [CommonSortingInput]!) {
        storesProductsV1GetCollectionBySlug(input: { slug: $slug }) {
          collection {
            ...Collection
            productsVirtualReference(query: { query: { sort: $sort } }) {
              items {
                ...Product
              }
            }
          }
        }
      }
    `),
    {
      slug: collection,
      sort: [
        {
          fieldName: sortKey || 'name',
          order: reverse ? CommonSortOrder.Desc : CommonSortOrder.Asc
        }
      ]
    }
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const resolvedCollection = data.storesProductsV1GetCollectionBySlug?.collection!;

  if (!resolvedCollection) {
    console.log(`No collection found for \`${collection}\``);
    return [];
  }

  return resolvedCollection.productsVirtualReference?.items?.map((x) => reshapeProduct(x!)) ?? [];
}

export async function getCollections(): Promise<Collection[]> {
  const collectionsQuery = graphql(`
    query Collections {
      storesCollectionsV1Collections {
        items {
          ...Collection
        }
      }
    }
  `);
  const { data } = await getWixClient().graphql(collectionsQuery);
  const items = removeNulls(data.storesCollectionsV1Collections?.items!).map((x) =>
    useFragment(collectionFragment, x!)
  );

  const wixCollections = [
    {
      handle: '',
      title: 'All',
      description: 'All products',
      seo: {
        title: 'All',
        description: 'All products'
      },
      path: '/search',
      updatedAt: new Date().toISOString()
    },
    // Filter out the `hidden` collections.
    // Collections that start with `hidden-*` need to be hidden on the search page.
    ...reshapeCollections(items).filter((collection) => !collection.handle.startsWith('hidden'))
  ];

  return wixCollections;
}

export async function getMenu(handle: string): Promise<Menu[]> {
  const { data } = await getWixClient().graphql(
    graphql(`
      query MenuBySlug($slug: String!) {
        dataItemsV2DataItems(
          queryInput: {
            dataCollectionId: "Menus"
            includeReferencedItems: ["pages"]
            query: { filter: { slug: $slug } }
          }
        ) {
          items {
            id
            data
          }
        }
      }
    `),
    {
      slug: handle
    }
  );

  const menu = data.dataItemsV2DataItems?.items?.[0];

  if (!menu) {
    return [];
  }

  return (
    menu.data.pages.map((page: { title: string; slug: string }) => ({
      title: page.title,
      path: '/' + page.slug
    })) || []
  );
}

export async function getPage(handle: string): Promise<Page | undefined> {
  const { data } = await getWixClient().graphql(
    graphql(`
      query PageBySlug($slug: String!) {
        dataItemsV2DataItems(
          queryInput: { dataCollectionId: "Pages", query: { filter: { slug: $slug } } }
        ) {
          items {
            id
            data
          }
        }
      }
    `),
    {
      slug: handle
    }
  );

  const page = data.dataItemsV2DataItems?.items?.[0];

  if (!page) {
    return undefined;
  }

  return {
    id: page.id!,
    title: page.data!.title,
    handle: '/' + page.data!.slug,
    body: page.data!.body,
    bodySummary: '',
    createdAt: page.data!._createdDate.$date,
    seo: {
      title: page.data!.seoTitle,
      description: page.data!.seoDescription
    },
    updatedAt: page.data!._updatedDate.$date
  };
}

export async function getPages(): Promise<Page[]> {
  const { data } = await getWixClient().graphql(
    graphql(`
      query Pages {
        dataItemsV2DataItems(queryInput: { dataCollectionId: "Pages" }) {
          items {
            id
            data
          }
        }
      }
    `)
  );

  const pages = data.dataItemsV2DataItems?.items ?? [];

  return pages.map((item) => ({
    id: item!.id!,
    title: item!.data!.title,
    handle: item!.data!.slug,
    body: item!.data!.body,
    bodySummary: '',
    createdAt: item!.data!._createdDate.$date,
    seo: {
      title: item!.data!.seoTitle,
      description: item!.data!.seoDescription
    },
    updatedAt: item!.data!._updatedDate.$date
  }));
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const productQuery = graphql(`
    query ProductByHandle($handle: String!) {
      storesProductsV1Products(
        queryInput: { query: { filter: { slug: $handle }, paging: { limit: 1 } } }
      ) {
        items {
          ...Product
        }
      }
    }
  `);

  const { data } = await getWixClient().graphql(productQuery, {
    handle
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const product = useFragment(productFragment, data.storesProductsV1Products?.items?.[0]);

  if (!product) {
    return undefined;
  }

  return reshapeProduct(product);
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  const { data: recommendationData } = await getWixClient().graphql(
    graphql(`
      mutation GetRecommendation(
        $algorithms: [EcomRecommendationsV1AlgorithmInput!]!
        $items: [EcommerceCatalogSpiV1CatalogReferenceInput!]!
      ) {
        ecomRecommendationsV1GetRecommendation(
          input: { algorithms: $algorithms, items: $items, minimumRecommendedItems: 3 }
        ) {
          recommendation {
            items {
              catalogItemId
            }
          }
        }
      }
    `),
    {
      items: [
        {
          catalogItemId: productId,
          appId: '215238eb-22a5-4c36-9e7b-e7c08025e04e'
        }
      ],
      algorithms: [
        {
          id: '5dd69f67-9ab9-478e-ba7c-10c6c6e7285f',
          appId: '215238eb-22a5-4c36-9e7b-e7c08025e04e'
        },
        {
          id: 'ba491fd2-b172-4552-9ea6-7202e01d1d3c',
          appId: '215238eb-22a5-4c36-9e7b-e7c08025e04e'
        },
        {
          id: '68ebce04-b96a-4c52-9329-08fc9d8c1253',
          appId: '215238eb-22a5-4c36-9e7b-e7c08025e04e'
        }
      ]
    }
  );

  const recommendation = recommendationData.ecomRecommendationsV1GetRecommendation?.recommendation;

  if (!recommendation) {
    return [];
  }

  const recommendedProductsQuery = graphql(`
    query RecommendedProducts($filter: JSON) {
      storesProductsV1Products(queryInput: { query: { filter: $filter } }) {
        items {
          ...Product
        }
      }
    }
  `);

  const { data } = await getWixClient().graphql(recommendedProductsQuery, {
    filter: {
      id: {
        $in: recommendation.items!.slice(0, 6).map((item) => item!.catalogItemId)
      }
    }
  });

  return data.storesProductsV1Products?.items?.map((x) => reshapeProduct(x!)) ?? [];
}

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const productsQuery = graphql(`
    query Products($filter: JSON!, $sort: [CommonSortingInput]!) {
      storesProductsV1Products(queryInput: { query: { filter: $filter, sort: $sort } }) {
        items {
          ...Product
        }
      }
    }
  `);

  const { data } = await getWixClient().graphql(productsQuery, {
    filter: {
      name: {
        $startsWith: query || ''
      }
    },
    sort: [
      {
        fieldName: sortKey || 'name',
        order: reverse ? CommonSortOrder.Desc : CommonSortOrder.Asc
      }
    ]
  });

  return data.storesProductsV1Products?.items?.map((x) => reshapeProduct(x!)) ?? [];
}

export const getWixClient = () => {
  let refreshToken;
  try {
    const cookieStore = cookies();
    refreshToken = JSON.parse(cookieStore.get(WIX_REFRESH_TOKEN_COOKIE)?.value || '{}');
  } catch (e) {}
  const wixClient = createClient({
    auth: OAuthStrategy({
      clientId: process.env.WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: '', expiresAt: 0 }
      }
    }),
    // @ts-expect-error
    headers: {
      'x-wix-route-graphql-public-server':
        'dp-0fdcbe4f1b133d4680e260e8bea7b98b647a31108a9cff072147a047'
    }
  });
  return wixClient;
};

export async function createCheckoutUrl(postFlowUrl: string) {
  const { data } = await getWixClient().graphql(
    graphql(`
      mutation CreateCheckoutFromCurrentCart {
        ecomCurrentCartV1CreateCheckoutFromCurrentCart(input: { channelType: OTHER_PLATFORM }) {
          checkoutId
        }
      }
    `),
    {}
  );

  const currentCheckout = data.ecomCurrentCartV1CreateCheckoutFromCurrentCart!;

  const { data: redirectSessionData } = await getWixClient().graphql(
    graphql(`
      mutation CreateRedirectSession($checkoutId: String!, $postFlowUrl: String!) {
        redirectsRedirectsV1CreateRedirectSession(
          input: {
            ecomCheckout: { checkoutId: $checkoutId }
            callbacks: { postFlowUrl: $postFlowUrl }
          }
        ) {
          redirectSession {
            fullUrl
          }
        }
      }
    `),
    {
      checkoutId: currentCheckout.checkoutId!,
      postFlowUrl
    }
  );

  return redirectSessionData.redirectsRedirectsV1CreateRedirectSession?.redirectSession?.fullUrl!;
}

const removeNulls = <T>(arr: (T | null | undefined)[]) => {
  return arr.filter((x) => x !== null && typeof x !== 'undefined') as T[];
};
