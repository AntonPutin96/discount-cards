import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, set } from 'idb-keyval';
import { CardType } from '../../types';
import type { RootState } from '../store';
import { LS_KEY } from '../../constants';

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

export const removeCardFromIndexedDB = createAsyncThunk<number, number>(
  'cards/remove',
  async (cardId, { getState }) => {
    const state = getState() as RootState;
    const filteredCards = state.cards.filter(({ id }) => id !== cardId);
    await set(LS_KEY, filteredCards);
    return cardId;
  }
);
