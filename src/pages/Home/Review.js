import { StarIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-secondary font-bold'>User Review</h1>

            <div className='grid md:grid-cols-3 justify-center gap-10 p-5'>
                {
                    reviews.slice(0, 3).map(review => <div key={review._id} className="card shadow-2xl bg-lime-100">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-semibold">{review.userName}</h2>
                            <p>{review.detail.length < 90 ? review.detail : review.detail.slice(0, 90) && <span title={review.detail} className='text-secondary' style={{ cursor: "pointer" }}>...read more</span>} </p>

                            <div className='flex items-center justify-center'>
                                <p className='text-xl font-semibold'>Ratings: <span className='text-blue-500'>{review.rating}</span></p>
                                <StarIcon className='h-7 w-7 text-orange-600'></StarIcon>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;