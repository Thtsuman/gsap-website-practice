import React from "react";
import "./styles/App.scss";
import Headers from './components/Headers/Headers'
import Banner from './components/Banner/Banner'
import Cases from "./components/Cases/Cases";
import IntroOverlay from './components/IntroOverlay/IntroOverlay'
import gsap from 'gsap'

function App() {

  React.useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // to clear out flash
    gsap.to("body", 0, { css: { visibility: 'visible' } });
    // timeline
    const tl = gsap.timeline()
    tl.from('.line span', 1.2, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 10,
      stagger: 0.4
    }).to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    }).to('.overlay-bottom', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: 0.4
    }).to('.intro-overlay', 0, {
      css: { display: 'none' }
    }).from('.case-image img', 1.6, {
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2,
        stagger: 0.4
      })
  }, []);

  return (
    <div className='App'>
      <IntroOverlay />
      <Headers />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
