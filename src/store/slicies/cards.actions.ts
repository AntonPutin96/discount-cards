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
  await set(key, [...state.cards, card]);
  return card;
});
