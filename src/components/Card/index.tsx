import React, { useState } from 'react';
import {
  ButtonBase,
  Card as CardMui,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShopImage from '../../images/shop_img_345_140.jpg';

interface CardProps {
  title: string;
  onClick?: () => void;
}

const Card = ({ title, onClick }: CardProps) => {
  const [favorite, setFavorite] = useState(false);

  const cardFavorite = () => {
    setFavorite(!favorite);
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
              onClick={() => cardFavorite()}
              color={`${favorite ? 'primary' : 'default'}`}
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
