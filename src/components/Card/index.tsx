import React from 'react';

type CardProps = {
  title: string;
};

const Card = ({ title }: CardProps) => (
  <div>
    <div>{`Title: ${title}`}</div>
  </div>
);

export default Card;
