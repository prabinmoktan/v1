import React, { useEffect } from 'react';
import './about.css';
import { animation } from './animate';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  useEffect(() => {
    animation();
  });
  return (
    <>
      <div className="boxcontainer flex justify-center items-end">
        <img
          src="/team1.png"
          alt=""
          width={600}
          className=" absolute bottom-0 image1 z-20"
        />

        <img
          src="/team2.png"
          alt=""
          width={850}
          className=" absolute bottom-0 image2 z-0"
        />
        <h1 className='absolute bottom-0 z-10 font-extrabold text-9xl word'> About us</h1>
      </div>
      {/* <div className="style bg-orange-500 w-full h-screen relative"></div> */}
    </>
  );
};

export default page;
