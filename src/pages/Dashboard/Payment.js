import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-38 max-w-md bg-base-200 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <p>Hello, <span className='text-xl font-semibold'>{order.username}</span></p>
                    <div>
                        <img className='w-32 rounded-full shadow-lg mx-auto' src={order.productPic} alt="product" />
                        <h2 class="card-title mt-5 justify-center">{order.productName}</h2>
                    </div>

                    <small>Payment for: <span className='text-orange-500'>{order.userEmail}</span></small>
                    <p>Selected Quantity: {order.orderedQuantity}</p>
                    <p className='text-xl'>Please Pay: <span className='text-orange-500 font-semibold'>{order.updatedPrice}$</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">



                </div>
            </div>
        </div>
    );
};

export default Payment;