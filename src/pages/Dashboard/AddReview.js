import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const onSubmit = (event) => {
        event.preventDefault();
        const rating = parseInt(event.target.rating.value);
        const detail = event.target.detail.value;
        const userName = user?.displayName;
        const email = user?.email;

        const review = { rating, detail, userName, email };


        if (rating > 0 && rating <= 5) {
            // Send review to server
            fetch('https://thawing-savannah-54100.herokuapp.com/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success('Rating successfully recorded');
                        event.target.reset();
                    }
                    else {
                        toast.error(`Review exists on user ${email}`);
                        event.target.reset();
                    }
                })
        }


    }
    return (
        <div className='mt-10'>
            <h3 className='lg:text-xl text-blue-600'>Please Leave Your Review</h3>
            <form onSubmit={onSubmit} className="shadow-2xl p-7 w-96 rounded-xl mx-auto">
                <div className='flex items-center justify-center'>
                    <p className='mr-3'>Ratings:</p>
                    <input name='rating' type="number" placeholder="Your rating inside 5" className="input input-bordered input-secondary" required />
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