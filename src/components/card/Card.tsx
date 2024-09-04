import React from 'react';
import './card.css';
import { cardTypes } from 'src/types';

const Card: React.FC<cardTypes> = ({ title, description, ...rest }) => {
  return (
    <>
      <div className="container">
        <div className="box">
          <h1 className="title text-xl">{title}</h1>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
