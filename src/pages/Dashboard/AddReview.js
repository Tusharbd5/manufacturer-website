import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const AddReview = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        const rating = parseInt(event.target.rating.value);
        const detail = event.target.detail.value;

        if (rating > 0 && rating <= 5) {
            console.log(rating, detail);
            event.target.reset();
        }


    }
    return (
        <div className='mt-10'>
            <h3 className='lg:text-xl text-blue-600'>Please Leave Your Review</h3>
            <form onSubmit={onSubmit} className="shadow-2xl p-7 w-96 rounded-xl mx-auto">
                <div className='flex items-center justify-center'>
                    <p className='mr-3'>Ratings:</p>
                    <input name='rating' type="number" placeholder="Leave your rating" className="input input-bordered input-secondary" required />
                    <StarIcon className='h-7 w-7 text-orange-600'></StarIcon>
                </div>
                <div>
                    <p className='mt-3'>Write Something</p>
                    <input name='detail' type="text" placeholder="Write something about us" className="input input-bordered input-lg w-full max-w-xs" required />
                </div>
                <input type="submit" value='Rate US' className='btn btn-primary btn-sm text-white mt-3' />
            </form>
        </div>
    );
};

export default AddReview;