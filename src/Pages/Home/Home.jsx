import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Coverage from './Coverage';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Coverage></Coverage>
        </div>
    );
};

export default Home;