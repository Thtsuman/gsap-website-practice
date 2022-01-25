import React from 'react';
import assets from '../../assets/assets'
import gsap from 'gsap'

const caseStudies = [
    {
        id: 1, subtitle: 'Curology',
        title: "A custom formula for your skin's unique needs",
        image: assets.images.curologyImg,
    },
    {
        id: 2, subtitle: 'Yourspace',
        title: "Open space floor plans for your next venture",
        image: assets.images.yourspaceImg,
    },
    {
        id: 3, subtitle: 'Lumin',
        title: "For your best look ever",
        image: assets.images.luminImg,
    },
]


const Cases = () => {

    const { ArrowLeft, ArrowRight } = assets.images

    React.useEffect(() => {
        casesHoverAnimation()
    }, [])

    const casesHoverAnimation = () => {
        gsap.from('.case-image img', 0.6, {
            // scale: 1.4,
            // ease: "expo.inOut",
            // delay: -2,
            // stagger: 0.4
        })
    }

    return (
        <div className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <ArrowLeft />
                    </div>
                    <div className="cases-arrow next">
                        <ArrowRight />
                    </div>
                </div>
                <div className="row">
                    {caseStudies?.map(study => (
                        <div className="case" key={study.id}>
                            <div className="case-details">
                                <span>{study.subtitle}</span>
                                <h2>{study.title}</h2>
                            </div>
                            <div className="case-image">
                                <img src={study.image} alt={study.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cases;
