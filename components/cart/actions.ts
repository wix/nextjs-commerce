'use server';

import { addToCart, removeFromCart, updateCart } from 'lib/wix';
import { ProductVariant } from 'lib/wix/types';
import { revalidatePath } from 'next/cache';

export const addItem = async (
  _prevState: unknown,
  item: {
    productId: string;
    variant?: ProductVariant;
  }
) => {
  if (!item.productId) {
    return 'Missing product ID';
  }

  try {
    await addToCart([{ productId: item.productId, variant: item.variant, quantity: 1 }]);
    revalidatePath('/', 'layout');
  } catch (e) {
    return 'Error adding item to cart';
  }
};

export const removeItem = async (_prevState: unknown, lineId: string): Promise<String | undefined> => {
  try {
    await removeFromCart([lineId]);
    revalidatePath('/', 'layout');
  } catch (e) {
    return 'Error removing item from cart';
  }
};

export const updateItemQuantity = async (_prevState: unknown, {
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
    revalidatePath('/', 'layout');
  } catch (e) {
    return 'Error updating item quantity';
  }
};
