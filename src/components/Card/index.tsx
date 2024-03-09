import React from 'react';
import {
  ButtonBase,
  Card as CardMui,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import ShopImage from '../../images/shop_img_345_140.jpg';

interface CardProps {
  title: string;
  onClick?: () => void;
}

const Card = ({ title, onClick }: CardProps) => (
  <CardMui sx={{ maxWidth: 345 }}>
    <ButtonBase onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={ShopImage}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </ButtonBase>
  </CardMui>
);

export default Card;
