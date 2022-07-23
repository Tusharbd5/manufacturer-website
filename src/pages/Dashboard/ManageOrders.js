import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SingleOrder from './SingleOrder';

const ManageOrders = () => {
    const navigate = useNavigate();

    const { data: orders, isLoading, refetch } = useQuery(['orders'], () => fetch(`http://localhost:5000/orders`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.setItem('');
            navigate('/login');
        }
        return res.json();
    }))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            This is manage order:{orders.length}

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <SingleOrder
                                key={order._id}
                                order={order}
                                refetch={refetch}
                                index={index}></SingleOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;