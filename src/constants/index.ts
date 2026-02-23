import { BcIdType } from '../components/BwipWrapper/types';
import { CardType } from '../types';

export const LS_KEY = 'state';
export const LS_FAVORITES_KEY = 'favs_state';

export const SHOPS: Array<{ id: string; name: string; code: BcIdType }> = [
  { id: 'shop_1', name: 'Citilink', code: 'ean13' },
  { id: 'shop_2', name: 'Магнит', code: 'qrcode' },
  { id: 'shop_3', name: 'Пятёрочка', code: 'ean13' }
];

export const DEFAULT_CARDS: Array<CardType> = [
  { id: 1, shopId: 'shop_1', code: '0123456789' },
  { id: 2, shopId: 'shop_2', code: '9876543210' }
];
