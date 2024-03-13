import { SHOPS } from '../constants';

export const getShopNameById = (shopId: string) =>
  SHOPS.find((shop) => shop.id === shopId)?.name ?? '';
