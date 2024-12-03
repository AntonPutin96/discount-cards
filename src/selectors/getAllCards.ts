import { createSelector } from 'reselect';
import { RootState } from '../store/store';

export const getAllCards = (viewFavorites: boolean) =>
  createSelector(
    [(state: RootState) => state.cards, (state: RootState) => state.favorites],
    (cards, favorites) =>
      (viewFavorites
        ? cards.filter((card) => favorites.includes(card.id))
        : cards)
  );
