import { SHOPS } from '../constants';
import { CardType } from '../types';

export const getShopNameById = (shopId: string) =>
  SHOPS.find((shop) => shop.id === shopId)?.name ?? '';

export const isEqualCard = (card1: CardType, card2: CardType) =>
  card1.shopId === card2.shopId && card1.code === card2.code;
