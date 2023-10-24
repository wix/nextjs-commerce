/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment Cart on EcomCartV1Cart {\n      id\n      lineItems {\n        id\n        productName {\n          original\n        }\n        descriptionLines {\n          plainText {\n            original\n          }\n          colorInfo {\n            original\n          }\n        }\n        quantity\n        price {\n          amount\n        }\n        image {\n          url\n          width\n          height\n          altText\n        }\n        url {\n          relativePath\n        }\n      }\n      currency\n    }\n  ": types.CartFragmentDoc,
    "\n    fragment Collection on CatalogV1Collection {\n      id\n      name\n      slug\n      description\n    }\n  ": types.CollectionFragmentDoc,
    "\n    fragment Product on CatalogV1Product {\n      id\n      name\n      description\n      stock {\n        inventoryStatus\n      }\n      slug\n      media {\n        mainMedia {\n          image {\n            url\n            altText\n            width\n            height\n          }\n        }\n        items {\n          image {\n            url\n            altText\n            width\n            height\n          }\n        }\n      }\n      price {\n        price\n        currency\n      }\n      manageVariants\n      variants {\n        id\n        choices\n        variant {\n          priceData {\n            price\n            currency\n          }\n        }\n        stock {\n          trackQuantity\n          quantity\n        }\n      }\n      productOptions {\n        name\n        optionType\n        choices {\n          value\n          description\n        }\n      }\n      lastUpdated\n    }\n  ": types.ProductFragmentDoc,
    "\n    mutation AddToCart($lineItems: [EcomCartV1LineItemInput!]!) {\n      ecomCurrentCartV1AddToCurrentCart(input: { lineItems: $lineItems }) {\n        cart {\n          ...Cart\n        }\n      }\n    }\n  ": types.AddToCartDocument,
    "\n    mutation RemoveLineItemsFromCurrentCart($lineIds: [String!]!) {\n      ecomCurrentCartV1RemoveLineItemsFromCurrentCart(input: { lineItemIds: $lineIds }) {\n        cart {\n          ...Cart\n        }\n      }\n    }\n  ": types.RemoveLineItemsFromCurrentCartDocument,
    "\n    mutation UpdateCurrentCartLineItemQuantity($lineItems: [EcomCartV1LineItemQuantityUpdateInput!]!) {\n      ecomCurrentCartV1UpdateCurrentCartLineItemQuantity(input: { lineItems: $lineItems }) {\n        cart {\n          ...Cart\n        }\n      }\n    }\n  ": types.UpdateCurrentCartLineItemQuantityDocument,
    "\n    mutation GetCurrentCart {\n      ecomCartV1CurrentCartGetCurrentCart {\n        cart {\n          ...Cart\n        }\n      }\n    }\n  ": types.GetCurrentCartDocument,
    "\n      mutation CollectionBySlug($slug: String!) {\n        storesProductsV1GetCollectionBySlug(input: { slug: $slug }) {\n          collection {\n            ...Collection\n          }\n        }\n      }\n      ": types.CollectionBySlugDocument,
    "\n      mutation GetcollectionProducts($slug: String!, $sort: [CommonSortingInput]!) {\n        storesProductsV1GetCollectionBySlug(input: { slug: $slug }) {\n          collection {\n            ...Collection\n            productsVirtualReference(query: { query: {sort: $sort} }) {\n              items {\n                ...Product\n              }\n            }\n          }\n        }\n      }\n    ": types.GetcollectionProductsDocument,
    "\n    query Collections {\n      storesCollectionsV1Collections {\n        items {\n          ...Collection\n        }\n      }\n    }\n  ": types.CollectionsDocument,
    "\n    query MenuBySlug($slug: String!) {\n      dataItemsV2DataItems(queryInput: { \n        dataCollectionId: \"Menus\", \n        includeReferencedItems: [\"pages\"],\n        query: { filter: { slug: $slug } } \n      }) {\n        items {\n          id\n          data\n        }\n      }\n    }\n  ": types.MenuBySlugDocument,
    "\n    query PageBySlug($slug: String!) {\n      dataItemsV2DataItems(queryInput: { \n        dataCollectionId: \"Pages\", \n        query: { filter: { slug: $slug } } \n      }) {\n        items {\n          id\n          data\n        }\n      }\n    }\n  ": types.PageBySlugDocument,
    "\n    query Pages {\n      dataItemsV2DataItems(queryInput: { \n        dataCollectionId: \"Pages\", \n      }) {\n        items {\n          id\n          data\n        }\n      }\n    }\n  ": types.PagesDocument,
    "\n    query ProductByHandle($handle: String!) {\n      storesProductsV1Products(queryInput: { query: { filter: { slug: $handle }, paging: { limit: 1 }}}) {\n        items {\n          ...Product\n        }\n      }\n    }\n  ": types.ProductByHandleDocument,
    "\n    mutation GetRecommendation($algorithms: [EcomRecommendationsV1AlgorithmInput!]!, $items: [EcommerceCatalogSpiV1CatalogReferenceInput!]!) {\n      ecomRecommendationsV1GetRecommendation(input: { algorithms: $algorithms, items: $items, minimumRecommendedItems: 3 }) {\n        recommendation {\n          items {\n            catalogItemId\n          }\n        }\n      }\n    }\n  ": types.GetRecommendationDocument,
    "\n    query RecommendedProducts($filter: JSON) {\n      storesProductsV1Products(queryInput: { query: { filter: $filter }}) {\n        items {\n          ...Product\n        }\n      }\n    }\n  ": types.RecommendedProductsDocument,
    "\n    query Products($filter: JSON!, $sort: [CommonSortingInput]!) {\n      storesProductsV1Products(queryInput: { query: { filter: $filter, sort: $sort }}) {\n        items {\n          ...Product\n        }\n      }\n    }\n  ": types.ProductsDocument,
    "\n    mutation CreateCheckoutFromCurrentCart {\n      ecomCurrentCartV1CreateCheckoutFromCurrentCart(input: { channelType: OTHER_PLATFORM }) {\n        checkoutId\n      }\n    }\n  ": types.CreateCheckoutFromCurrentCartDocument,
    "\n    mutation CreateRedirectSession($checkoutId: String!, $postFlowUrl: String!) {\n      redirectsRedirectsV1CreateRedirectSession(input: { ecomCheckout: { checkoutId: $checkoutId }, callbacks: { postFlowUrl: $postFlowUrl } }) {\n        redirectSession {\n          fullUrl\n        }\n      }\n    }\n  ": types.CreateRedirectSessionDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Cart on EcomCartV1Cart {\n      id\n      lineItems {\n        id\n        productName {\n          original\n        }\n        descriptionLines {\n          plainText {\n            original\n          }\n          colorInfo {\n            original\n          }\n        }\n        quantity\n        price {\n          amount\n        }\n        image {\n          url\n          width\n          height\n          altText\n        }\n        url {\n          relativePath\n        }\n      }\n      currency\n    }\n  "): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Collection on CatalogV1Collection {\n      id\n      name\n      slug\n      description\n    }\n  "): typeof import('./graphql').CollectionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Product on CatalogV1Product {\n      id\n      name\n      description\n      stock {\n        inventoryStatus\n      }\n      slug\n      media {\n        mainMedia {\n          image {\n            url\n            altText\n            width\n            height\n          }\n        }\n        items {\n          image {\n            url\n            altText\n            width\n            height\n          }\n        }\n      }\n      price {\n        price\n        currency\n      }\n      manageVariants\n      variants {\n        id\n        choices\n        variant {\n          priceData {\n            price\n            currency\n          }\n        }\n        stock {\n          trackQuantity\n          quantity\n        }\n      }\n      productOptions {\n        name\n        optionType\n        choices {\n          value\n          description\n        }\n      }\n      lastUpdated\n    }\n  "): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation AddToCart($lineItems: [EcomCartV1LineItemInput!]!) {\n      ecomCurrentCartV1AddToCurrentCart(input: { lineItems: $lineItems }) {\n        cart {\n          ...Cart\n        }\n      }\n    }\n  "): typeof import('./graphql').AddToCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation RemoveLineItemsFromCurrentCart($lineIds: [String!]!) {\n      ecomCurrentCartV1RemoveLineItemsFromCurrentCart(input: { lineItemIds: $lineIds }) {\n        cart {\n          ...Cart\n        }\n      }\n    }\n  "): typeof import('./graphql').RemoveLineItemsFromCurrentCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateCurrentCartLineItemQuantity($lineItems: [EcomCartV1LineItemQuantityUpdateInput!]!) {\n      ecomCurrentCartV1UpdateCurrentCartLineItemQuantity(input: { lineItems: $lineItems }) {\n        cart {\n          ...Cart\n        }\n      }\n    }\n  "): typeof import('./graphql').UpdateCurrentCartLineItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation GetCurrentCart {\n      ecomCartV1CurrentCartGetCurrentCart {\n        cart {\n          ...Cart\n        }\n      }\n    }\n  "): typeof import('./graphql').GetCurrentCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CollectionBySlug($slug: String!) {\n        storesProductsV1GetCollectionBySlug(input: { slug: $slug }) {\n          collection {\n            ...Collection\n          }\n        }\n      }\n      "): typeof import('./graphql').CollectionBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation GetcollectionProducts($slug: String!, $sort: [CommonSortingInput]!) {\n        storesProductsV1GetCollectionBySlug(input: { slug: $slug }) {\n          collection {\n            ...Collection\n            productsVirtualReference(query: { query: {sort: $sort} }) {\n              items {\n                ...Product\n              }\n            }\n          }\n        }\n      }\n    "): typeof import('./graphql').GetcollectionProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Collections {\n      storesCollectionsV1Collections {\n        items {\n          ...Collection\n        }\n      }\n    }\n  "): typeof import('./graphql').CollectionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query MenuBySlug($slug: String!) {\n      dataItemsV2DataItems(queryInput: { \n        dataCollectionId: \"Menus\", \n        includeReferencedItems: [\"pages\"],\n        query: { filter: { slug: $slug } } \n      }) {\n        items {\n          id\n          data\n        }\n      }\n    }\n  "): typeof import('./graphql').MenuBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PageBySlug($slug: String!) {\n      dataItemsV2DataItems(queryInput: { \n        dataCollectionId: \"Pages\", \n        query: { filter: { slug: $slug } } \n      }) {\n        items {\n          id\n          data\n        }\n      }\n    }\n  "): typeof import('./graphql').PageBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Pages {\n      dataItemsV2DataItems(queryInput: { \n        dataCollectionId: \"Pages\", \n      }) {\n        items {\n          id\n          data\n        }\n      }\n    }\n  "): typeof import('./graphql').PagesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ProductByHandle($handle: String!) {\n      storesProductsV1Products(queryInput: { query: { filter: { slug: $handle }, paging: { limit: 1 }}}) {\n        items {\n          ...Product\n        }\n      }\n    }\n  "): typeof import('./graphql').ProductByHandleDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation GetRecommendation($algorithms: [EcomRecommendationsV1AlgorithmInput!]!, $items: [EcommerceCatalogSpiV1CatalogReferenceInput!]!) {\n      ecomRecommendationsV1GetRecommendation(input: { algorithms: $algorithms, items: $items, minimumRecommendedItems: 3 }) {\n        recommendation {\n          items {\n            catalogItemId\n          }\n        }\n      }\n    }\n  "): typeof import('./graphql').GetRecommendationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query RecommendedProducts($filter: JSON) {\n      storesProductsV1Products(queryInput: { query: { filter: $filter }}) {\n        items {\n          ...Product\n        }\n      }\n    }\n  "): typeof import('./graphql').RecommendedProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Products($filter: JSON!, $sort: [CommonSortingInput]!) {\n      storesProductsV1Products(queryInput: { query: { filter: $filter, sort: $sort }}) {\n        items {\n          ...Product\n        }\n      }\n    }\n  "): typeof import('./graphql').ProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateCheckoutFromCurrentCart {\n      ecomCurrentCartV1CreateCheckoutFromCurrentCart(input: { channelType: OTHER_PLATFORM }) {\n        checkoutId\n      }\n    }\n  "): typeof import('./graphql').CreateCheckoutFromCurrentCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateRedirectSession($checkoutId: String!, $postFlowUrl: String!) {\n      redirectsRedirectsV1CreateRedirectSession(input: { ecomCheckout: { checkoutId: $checkoutId }, callbacks: { postFlowUrl: $postFlowUrl } }) {\n        redirectSession {\n          fullUrl\n        }\n      }\n    }\n  "): typeof import('./graphql').CreateRedirectSessionDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
