import React, { useEffect, useRef, useState } from 'react';
import './destination.css';
import { graphics } from './graphics';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useForm } from 'react-hook-form';

// gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Destination = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(headRef.current, {
      x: 600,
      duration: 2,
      rotate: 720,
      // ease: 'power2.inOut',
      delay: 1,
    });
    gsap.to(head.current, {
      scrollTrigger: {
        trigger: head.current,
        // toggleActions:'reverse play',
        start: 'top 90%',
        end: 'top 80%',
        // markers: true,
      },
      x: 1000,
      background: 'green',
      scale: 0.7,
      // delay:1,
      duration: 5,
    });
    gsap.from('.mainContainer', {
      scrollTrigger: {
        trigger: '.mainContainer',
        start: 'top 0%',
        end: 'top -100%',
        pin: true,
        scrub: 2,
      },
      transform: 'translateX(-150%)',
      duration: 5,
    });
    gsap.to('.para', {
      scrollTrigger: {
        trigger: '.zoom',
        pin: true,
        start: 'top top',
        end: '+=1500',
        scrub: true,
      },
      fontSize: '1500px',
      ease: 'none',
      display: 'none',
    });
    // gsap.to('.box1',{
    //   scrollTrigger:{
    //     trigger:'.ant',
    //     start: 'bottom bottom',
    //     end: '+=1500',
    //     pin:true,
    //     scrub: 2,
    //     markers:true
    //   },
    //   y:500,
    //   duration:5,

    // })
  });

  const {
    handleSubmit,
    formState: { errors },
    watch,
    register,
  } = useForm();
  const [d, setd] = useState();
  const handleConsole = (data: any) => {
    console.log('d:', data);
    setd(data);
  };

  const divs = Array.from({ length: 3 }, (_, index) => {
    return (
      <div
        key={index}
        style={{ width: '200px', height: '150px', background: 'green' }}
        className="divs"
      >
        DIV{index + 1}
      </div>
    );
  });
  return (
    <>
      <div className="tag">
        <div style={{ height: '100vh' }}>
          <div
            ref={headRef}
            style={{ width: '150px', height: '150px', background: 'green' }}
          ></div>
          <div
            ref={head}
            style={{ width: '150px', height: '150px', background: 'red' }}
          ></div>
        </div>
        <div className="mainContainer">
          <h1
            style={{ fontSize: '500px', fontWeight: 'bolder', width: '100%' }}
          >
            EXPERIMENT
          </h1>
        </div>
        <div style={{ height: '100vh' }}>
          <div
            ref={head}
            style={{ width: '150px', height: '150px', background: 'red' }}
          ></div>
        </div>
      </div>
      {/* <div className='ant' style={{height:'100vh'}}>
       <div style={{width: '150px', height: '150px', background: 'green'}} className='box1'></div>
       <div style={{width: '200px', height: '200px', background: 'gold'}} className='box2'></div>
      </div> */}
      <div style={{ border: '2px solid red', height: '100vh' }}>
        <form onSubmit={handleSubmit(handleConsole)}>
          <input
            type="text"
            {...register('First Name')}
            style={{ color: 'green', border: 'red' }}
          />
          <input
            type="text"
            {...register('Last Name')}
            style={{ color: 'green', border: 'red' }}
          />
          <button type="submit">submit</button>
        </form>
        {typeof d === 'object' ? JSON.stringify(d) : d}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '3px solid blue',
        }}
        className="dis"
      >
        {divs}
      </div>
      <div style={{ height: '500px' }} className="zoom">
        <h1 style={{ fontSize: '80px', fontWeight: 'bolder' }} className="para">
          This is our Header
        </h1>
      </div>
      <div style={{ height: '100vh' }}></div>
    </>
  );
};

export default Destination;
