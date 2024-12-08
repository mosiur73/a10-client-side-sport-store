import React from 'react';
import Slider from '../Slider/Slider';
import ProductSection from '../ProductSection/ProductSection';
import SportCategory from '../SportCategory/SportCategory';
import ThirdSection from '../ExtraSection/ThirdSection';
import ForthSection from '../ExtraSection/ForthSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <SportCategory></SportCategory>
            <ProductSection></ProductSection>
            <ThirdSection></ThirdSection>
            <ForthSection></ForthSection>
        </div>
    );
};

export default Home;