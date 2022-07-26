import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import News from './News';
import OurServices from './OurServices/OurServices';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <OurServices></OurServices>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default Home;