import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Coverage from './Coverage';
import HowItWorks from './HowItWorks';
import LatestBooks from './LatestBooks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestBooks></LatestBooks>
            <HowItWorks></HowItWorks>
            <Coverage></Coverage>
        </div>
    );
};

export default Home;