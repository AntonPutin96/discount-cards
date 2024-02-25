import React from 'react';
import classes from './card.module.css';

type CardProps = {
  title: string;
};

const Card = ({ title }: CardProps) => (
  <div className={classes.wrapper}>
    <div>{`Title: ${title}`}</div>
  </div>
);

export default Card;
