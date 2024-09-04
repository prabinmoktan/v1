import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const graphics = () => {
  const tl = gsap.timeline();
  tl.to('.mainContainer h1', {
    transform: 'translateX(-150%)',
    scrollTrigger: {
      trigger: '.mainContainer',
      scroller: '.tag',
      start: 'top 0%',
      end: 'top -100%',
      markers: true,
      scrub: 2,
      pin: true,
    },
  });
};
