import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LP10IEsIwFBEs86SKl4cPNrzpbtGZegafYJgYBKaLqHozOhp3LE7Lk85Q9ZRRhoaxIglbLj8DvV6j5SVe9p73ly00vdsTS5cs');

const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/order/${id}`;
    const { data: order, isLoading, refetch } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-38 max-w-md bg-base-200 shadow-xl my-12 mx-auto">
                <div className="card-body">
                    <p>Hello, <span className='text-xl font-semibold'>{order.username}</span></p>
                    <div>
                        <img className='w-32 rounded-full shadow-lg mx-auto' src={order.productPic} alt="product" />
                        <h2 className="card-title mt-5 justify-center">{order.productName}</h2>
                    </div>

                    <small>Payment for: <span className='text-orange-500'>{order.userEmail}</span></small>
                    <p>Selected Quantity: {order.orderedQuantity}</p>
                    <p className='text-xl'>Please Pay: <span className='text-orange-500 font-semibold'>{order.updatedPrice}$</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-200 mx-auto">
                <div className="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;