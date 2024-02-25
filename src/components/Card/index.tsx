import React from 'react';
import './card.css';

type CardProps = {
  title: string;
};

const Card = ({ title }: CardProps) => (
  <div className='wrapper'>
    <div>{`Title: ${title}`}</div>
  </div>
);

export default Card;
