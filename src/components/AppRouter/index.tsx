import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CardsPage from '../../pages/CardsPage';
import NewCardAddPage from '../../pages/NewCardAddPage';
import AppBar from '../AppBar';

const AppRouter = () => (
  <BrowserRouter>
    <AppBar />
    <Routes>
      <Route path='/' Component={CardsPage} />
      <Route path='addNewCard' Component={NewCardAddPage} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
