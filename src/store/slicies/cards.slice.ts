import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../../types';
import { addCardInIndexedDB, getCardsFromIndexedDB } from './cards.actions';

const initialState: Array<CardType> = [];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardType>) => {
      const card = action.payload;
      state.push(card);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCardsFromIndexedDB.fulfilled,
      (state, action: PayloadAction<Array<CardType>>) => {
        const cards = action.payload;
        state.splice(0, state.length);
        state.push(...cards);
      }
    );
    builder.addCase(
      addCardInIndexedDB.fulfilled,
      (state, action: PayloadAction<CardType>) => {
        const card = action.payload;
        state.push(card);
      }
    );
  }
});

export default cardsSlice;
