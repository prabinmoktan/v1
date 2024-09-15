import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.boxcontainer',
      start: '0% 90%',
      end: '60% 40%',
      scrub: 1,
      markers: true,
      pin: true
    }
  });
 

 
  // tl.to('.image1', {
  //   scrollTrigger: {
  //     trigger: '.image1',
      
  //     // smooth: true,
  //     start: '0% 90%',
  //   },
  //   top: '150%',
  //   rotate: '260deg'
  // });
};
