import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CardsPage from '../../pages/CardsPage';
import NewCardAddPage from '../../pages/NewCardAddPage';
import AppBar from '../AppBar';
import FavoritesPage from '../../pages/FavoritesPage';

const AppRouter = () => (
  <BrowserRouter>
    <AppBar />
    <Routes>
      <Route path='/' Component={CardsPage} />
      <Route path='addNewCard' Component={NewCardAddPage} />
      <Route path='favorites' Component={FavoritesPage} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
