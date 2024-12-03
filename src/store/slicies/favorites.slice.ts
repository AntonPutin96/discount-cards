import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getFavoritesFromIndexedDB,
  toggleFavoritesInIndexedDB
} from './favorites.actions';

const initialState: Array<number> = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getFavoritesFromIndexedDB.fulfilled,
      (state, action: PayloadAction<Array<number>>) => {
        const favorites = action.payload;
        state.splice(0, state.length);
        state.push(...favorites);
      }
    );
    builder.addCase(
      toggleFavoritesInIndexedDB.fulfilled,
      (state, action: PayloadAction<Array<number>>) => {
        const favorites = action.payload;
        state.splice(0, state.length);
        state.push(...favorites);
      }
    );
  }
});

export default favoritesSlice;
