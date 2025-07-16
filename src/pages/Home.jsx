import React from 'react';
import Banner from '../component/Banner';
import AboutUs from '../component/AboutUs';
import Donation from '../component/Donation';
import ContactUs from '../component/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Donation></Donation>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;