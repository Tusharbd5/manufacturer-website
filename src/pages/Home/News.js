import React, { useEffect, useState } from 'react';
import SingleNews from './SingleNews';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://thawing-savannah-54100.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div className='mt-10 relative'>
            <p className='text-orange-600 font-sans font-semibold lg:text-start lg:ml-5'>_______CURRENT AFFAIRS</p>
            <h1 className='text-4xl lg:text-start lg:ml-5 mb-5 font-black font-sans'>Latest News</h1>

            <p className='w-96 lg:text-left lg:absolute mx-auto right-12 text-gray-500 top-0'>Here is all of our upcoming products which we are going to manufacture. Please continue checking or subscribe for leatest update.</p>

            <div className='grid grid-col-1 md:grid-cols-3 gap-3 justify-items-center mt-10'>
                {
                    news.map(information => <SingleNews
                        key={information._id}
                        information={information}></SingleNews>)
                }
            </div>
        </div>
    );
};

export default News;