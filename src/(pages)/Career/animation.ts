import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const drinkAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.second',
      start: '0% 95%',
      end: '70% 70%',
      scrub: 1,
      // markers: true
    },
  });
  tl.to(
    '#fanta',
    {
      top: '118%',
      left: '10%',
    },
    'orange'
  );
  tl.to(
    '#slice',
    {
      top: '110%',
      left: '27%',
    },
    'orange'
  );
  tl.to(
    '#orange',
    {
      width: '20%',
      top: '155%',
      right: '0%',
      // rotate: '90deg'
    },
    'orange'
  );

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.third',
      start: '0% 80%',
      end: '50% 50%',
      scrub: 1,
      markers: true,
    },
  });
  tl2.from(
    '#image',
    {
      left: '-100%',
      // rotate: '90deg',
      width: '50%',
      opacity: '0',
    },
    'secondAni'
  );
  tl2.to('#image', {
    left: '100%',
    width: '100%',
    rotate: '0deg',
    opacity: '1',
  });
  tl2.to(
    '#slice',
    {
      top: '207%',
      left: '65.7%',
    },
    'secondAni'
  );
};
