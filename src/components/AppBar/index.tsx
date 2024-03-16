import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  AppBar as AppBarMui,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import { AddCard } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AppBar = () => {
  const navigate = useNavigate();
  const clickHandler = () => navigate('/');

  return (
    <AppBarMui position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={clickHandler}
        >
          Discount Cards
        </Typography>
        <div>
          <NavLink to='/favorites'>
            <IconButton
              size='large'
              aria-label='Избранные карточки'
              aria-controls='menu-appbar'
              color='inherit'
            >
              <FavoriteIcon />
            </IconButton>
          </NavLink>
          <NavLink to='/addNewCard'>
            <IconButton
              size='large'
              aria-label='Добавить новую карту'
              aria-controls='menu-appbar'
              color='inherit'
            >
              <AddCard />
            </IconButton>
          </NavLink>
        </div>
      </Toolbar>
    </AppBarMui>
  );
};

export default AppBar;
