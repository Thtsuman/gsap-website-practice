import React from 'react';
import assets from '../../assets/assets'

const Banner = () => {
    const { ArrowRight } = assets.images;
    
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Creating unique brand is</span>
                        </div>
                        <div className="line">
                            <span>what we do.</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">More about us <ArrowRight /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
