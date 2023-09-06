'use server';

import { addToCart, removeFromCart, updateCart } from 'lib/wix';
import { ProductVariant } from 'lib/wix/types';

export const addItem = async (
  productId: string,
  variant?: ProductVariant
): Promise<String | undefined> => {
  if (!productId) {
    return 'Missing product variant ID';
  }

  try {
    await addToCart([{ productId, variant, quantity: 1 }]);
  } catch (e) {
    return 'Error adding item to cart';
  }
};

export const removeItem = async (lineId: string): Promise<String | undefined> => {
  try {
    await removeFromCart([lineId]);
  } catch (e) {
    return 'Error removing item from cart';
  }
};

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}): Promise<String | undefined> => {
  try {
    await updateCart([
      {
        id: lineId,
        merchandiseId: variantId,
        quantity
      }
    ]);
  } catch (e) {
    return 'Error updating item quantity';
  }
};
