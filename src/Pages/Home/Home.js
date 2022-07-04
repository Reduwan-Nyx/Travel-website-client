import React from 'react';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import About from './About/About';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Testimonials from './Testimonials/Testimonials';
import Tickets from './Tickets/Tickets';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <Tickets></Tickets>
            <Services></Services>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;