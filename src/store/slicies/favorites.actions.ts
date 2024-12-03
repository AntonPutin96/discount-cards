import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, set } from 'idb-keyval';
import type { RootState } from '../store';
import { LS_FAVORITES_KEY } from '../../constants';

export const getFavoritesFromIndexedDB = createAsyncThunk<Array<number>>(
  'favorites/get',
  async () => {
    const value = await get(LS_FAVORITES_KEY);
    return value ?? [];
  }
);

export const toggleFavoritesInIndexedDB = createAsyncThunk<
  Array<number>,
  number
>('favorites/add', async (cardId, { getState }) => {
  const state = getState() as RootState;
  const favorites = [...state.favorites];

  if (favorites.includes(cardId)) {
    favorites.splice(
      favorites.findIndex((id) => id === cardId),
      1
    );
  } else {
    favorites.push(cardId);
  }

  await set(LS_FAVORITES_KEY, favorites);

  return favorites;
});
