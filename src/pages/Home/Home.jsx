import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cases from '../../components/Cases/Cases';
import IntroOverlay from '../../components/IntroOverlay/IntroOverlay';
import gsap from 'gsap'

const tl = gsap.timeline()

const introAnimation = (completeAnimation) => {
    // timeline
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
        stagger: 0.4,
        onComplete: completeAnimation
    })
}

const Home = () => {

    const [animationComplete, setAnimationComplete] = React.useState(false)

    const handleCompleteAnimation = () => {
        setAnimationComplete(true)
    }

    React.useEffect(() => {
        introAnimation(handleCompleteAnimation)
    }, []);

    return (
        <>
            {!animationComplete && <IntroOverlay />}
            <Banner />
            <Cases />
        </>
    );
};

export default Home;
