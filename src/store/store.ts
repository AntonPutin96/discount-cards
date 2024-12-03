import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slicies/cards.slice';
import favoritesSlice from './slicies/favorites.slice';

const reducers = combineReducers({
  cards: cardsSlice.reducer,
  favorites: favoritesSlice.reducer
});

const isDev = process.env.NODE_ENV === 'development';

export const store = configureStore({
  reducer: reducers,
  // preloadedState: {
  //   cards: isDev ? DEFAULT_CARDS : []
  // },
  devTools: isDev
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
