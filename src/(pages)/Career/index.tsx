import fanta from '/fanta.png';
import './career.css';
import { drinks, head } from '../../constant';
import { useEffect } from 'react';
import { drinkAnimation } from './animation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const index = () => {
  useEffect(() => {
    drinkAnimation();
  });
  return (
    <>
      <div className="w-full min-h-screen bg-orange-500 whole">
        <div className="relative h-screen flex justify-center items-center">
          <h1 className="text-white text-center absolute top-24" id="hhh">
            FANTA
          </h1>
          <img src="/slice.png" alt="" width={200} className="" id="slice" />
          <img src={fanta} alt="..." width={500} className="" id="fanta" />
          <img
            src="/orange.jpg"
            alt="..."
            width={400}
            className=""
            id="orange"
          />
          <img
            src="/leaf.png"
            alt="..."
            width={150}
            className="absolute z-50 rotate-45 left-48 top-44"
          />
        </div>
      </div>
      <div className="min-h-screen flex second px-10">
        <div className="w-1/2 flex justify-center">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            width={500}
          >
            <path
              fill="#FA4D56"
              d="M28.6,-50.1C39.4,-43.3,52,-40.3,55.9,-32.6C59.8,-24.9,55,-12.5,52.5,-1.4C50,9.6,49.9,19.2,45.9,26.6C41.8,34,33.8,39.3,25.4,49C17.1,58.7,8.6,72.8,-0.4,73.6C-9.5,74.3,-18.9,61.8,-28.3,52.7C-37.6,43.6,-46.8,38,-55.3,29.8C-63.8,21.6,-71.6,10.8,-71.9,-0.2C-72.2,-11.1,-65,-22.3,-59.2,-35.1C-53.3,-47.8,-48.8,-62.2,-39.1,-69.7C-29.5,-77.2,-14.7,-77.8,-2.9,-72.7C8.9,-67.6,17.8,-56.9,28.6,-50.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className=" w-1/2 flex justify-center items-center">
          {head &&
            head.map((item, index) => (
              <div key={index} className="px-10">
                <h1 className="text-5xl text-white">{item.title}</h1>
                <p className="text-white indent-8 text-justify ">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="w-full min-h-screen h-screen third flex justify-center items-center gap-10">
        {drinks &&
          drinks.map((item, index) => (
            <div
              key={index}
              className="w-1/5 h-1/2 bg-white rounded-lg flex flex-col justify-center items-center"
            >
              <img src={item.image} alt="..." className="-mt-24" id="image" />
              <h1 className="text-center text-2xl font-bold">{item.name}</h1>
              <button className="bg-orange-500 px-4 py-1 w-32 text-center rounded-full text-white">
                Buy Now
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default index;
