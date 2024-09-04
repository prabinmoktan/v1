import React, { useEffect } from 'react';
import './about.css';
import { animation } from './animate';
import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';
import gsap from 'gsap';

gsap.registerPlugin();

const page = () => {
  useEffect(() => {
    animation();
  }, []);
  return (
    <>
      <div className="boxcontainer">
        <div className={'box1'}>
          <img src={team1} alt="..." width={700} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <h1 className="word">About Us</h1>
        </div>
        <div className="box2">
          <img src={team2} alt="..." width={1000} />
        </div>
      </div>
    </>
  );
};

export default page;
