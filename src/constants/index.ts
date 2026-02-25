import { CardType } from '../types';

export const LS_KEY = 'state';
export const LS_FAVORITES_KEY = 'favs_state';

export const SHOPS: Array<{ id: string; name: string }> = [
  { id: 'shop_1', name: 'Citilink' },
  { id: 'shop_2', name: 'Магнит' },
  { id: 'shop_3', name: 'Пятёрочка' },
  { id: 'shop_other', name: 'Другой' }
];

export const DEFAULT_CARDS: Array<CardType> = [
  { id: 1, shopId: 'shop_1', code: '0123456789', barCodeType: 'ean13' },
  { id: 2, shopId: 'shop_2', code: '9876543210', barCodeType: 'qrcode' }
];
