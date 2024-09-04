import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const animation = () => {
  const tl = gsap.timeline();
  tl.to('.boxcontainer', {
    scrollTrigger: {
      trigger: '.boxcontainer',
      pin: true,
      start: 'top top',
      end: '+=100%',
    },
  });

  tl.to('.box1', {
    scrollTrigger: {
      trigger: '.box1',
      start: 'top 41%',
      end: 'bottom 100%',
      scrub: 1,
    },
    x: 800,
    opacity: 0,
  });
  tl.to('.box2', {
    scrollTrigger: {
      trigger: '.box2',
      start: 'top 15%',
      end: 'bottom 100%',
      scrub: 1,
    },
    x: -800,
    opacity: 0,
  });
  tl.to('.word', {
    scrollTrigger: {
      trigger: '.word',
      start: 'top bottom', // Start animation when .word is in view
      end: 'bottom top', // End animation when .word is out of view
      scrub: 1,
    },
    y: -500, // Move up
    fontSize: 60,
    // x: 300,   // Move to the right
  });
};
