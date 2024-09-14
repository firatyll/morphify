import React from 'react';

const Hero = () => {
    return (
        <div className="container border border-0 rounded shadow p-4">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img
                        src="/images/hero_section.png"
                        className="img-fluid"
                        alt="hero section"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="display-1">Welcome to Morphify</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero;
