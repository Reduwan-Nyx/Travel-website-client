import React from 'react';
import Services from '../Services/Services';
import About from './About/About';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Tickets from './Tickets/Tickets';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <Tickets></Tickets>
            <Services></Services>
        </div>
    );
};

export default Home;