import React from 'react';
import img1 from '../assets/images/education.webp';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="bg-white my-12 text-black mx-auto  items-center">
            <div className='md:flex justify-between items-center md:w-10/12 p-2 mx-auto'>
                <div className="flex-1 text-left">
                    <p className="text-green-600 text-sm font-semibold uppercase mb-2">About Us</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">We Build Bright Futures</h2>
                    <p className="mb-6 max-w-md leading-relaxed">
                        Our mission is to empower students and foster friendships through education and social interaction.
                        We believe every child deserves a chance to shine.
                    </p>
                    <Link to={'/about'} className="bg-yellow-400 mb-6  hover:bg-yellow-500 text-white px-6 py-2 rounded">
                        Learn More
                    </Link>
                </div>

                <div className="flex-1 my-4 mb-4">
                    <img
                        src={img1}
                        alt="Education"
                        className="w-full rounded shadow-lg"
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
