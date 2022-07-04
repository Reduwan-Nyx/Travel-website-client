import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Features from './Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <About></About>
        </div>
    );
};

export default Home;