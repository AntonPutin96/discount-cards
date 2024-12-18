import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from '../AppRouter';
import { store } from '../../store/store';

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
