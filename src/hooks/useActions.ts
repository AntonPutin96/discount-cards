import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import cardsSlice from '../store/slicies/cards.slice';
import favoritesSlice from '../store/slicies/favorites.slice';
import * as cardsActions from '../store/slicies/cards.actions';
import * as favoritesActions from '../store/slicies/favorites.actions';

const rootActions = {
  ...cardsSlice.actions,
  ...cardsActions,
  ...favoritesSlice.actions,
  ...favoritesActions
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
