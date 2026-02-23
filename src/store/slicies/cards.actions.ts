import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, set } from 'idb-keyval';
import { CardType } from '../../types';
import type { RootState } from '../store';

export const getCardsFromIndexedDB = createAsyncThunk<Array<CardType>, string>(
  'cards/get',
  async (key) => {
    const value = await get(key);
    return value ?? [];
  }
);

export const addCardInIndexedDB = createAsyncThunk<
  CardType,
  {
    key: string;
    card: CardType;
  }
>('cards/add', async ({ key, card }, { getState }) => {
  const state = getState() as RootState;
  const newCard = {
    ...card,
    code: card.shopId === 'shop_2' ? `E${card.code}` : card.code
  };
  await set(key, [...state.cards, newCard]);
  return card;
});
