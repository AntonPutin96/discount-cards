import React from 'react';
import {
  ButtonBase,
  Card as CardMui,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import ShopImage from '../../images/shop_img_345_140.jpg';
import { RootState } from '../../store/store';
import { useActions } from '../../hooks/useActions';

interface CardProps {
  id: number;
  title: string;
  onClick?: () => void;
}

const Card = ({ id, title, onClick }: CardProps) => {
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.includes(id);
  const { toggleFavoritesInIndexedDB } = useActions();

  const toggleFavorite = () => {
    toggleFavoritesInIndexedDB(id);
  };

  return (
    <CardMui sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <ButtonBase onClick={onClick}>
          <CardMedia
            component='img'
            height='140'
            image={ShopImage}
            alt='green iguana'
          />
        </ButtonBase>
        <CardContent>
          <CardActions disableSpacing>
            <IconButton
              onClick={toggleFavorite}
              color={`${isFavorite ? 'primary' : 'default'}`}
              aria-label='add to favorites'
            >
              <FavoriteIcon />
            </IconButton>
            <Typography component='div'>{title}</Typography>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </CardMui>
  );
};

export default Card;
