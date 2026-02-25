import { BcIdType } from '../components/BwipWrapper/types';

export type CardType = {
  id: number;
  shopId: string;
  code: string;
  barCodeType: BcIdType;
  otherShopName?: string;
};
