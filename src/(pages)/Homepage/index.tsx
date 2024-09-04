import React from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import { FaAnglesDown } from 'react-icons/fa6';

import './homepage.css';
import Card from '../../components/card/Card';
import { cardData } from '../../constant';

const index = () => {
  return (
    <>
      <div className=" landing">
        <div className="landing-text text-center grid place-content-center h-full">
          <h1 className="text-6xl text-white data-header">JAPAN</h1>
        </div>
      </div>
      <div className="  flex justify-evenly w-full py-7 card-section">
        {cardData &&
          cardData.map((card, index) => (
            <div key={index} className="slide-up">
              <Card title={card.title} description={card.description} />
            </div>
          ))}
      </div>
      <div className="second"></div>
    </>
  );
};

export default index;
