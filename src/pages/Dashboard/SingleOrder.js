import React, { useState } from 'react';
import OrderModal from './OrderModal';

const SingleOrder = ({ order, refetch, index }) => {
    const [toggole, setToggole] = useState(false);
    return (

        <tr>
            <td className='w-20'>
                {index + 1}
            </td>
            <td>
                <div className="w-32">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={order.productPic} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                    <p className="font-bold mr-5">{order.productName.length < 20 ? order.productName : order.productName.slice(0, 20)}</p>
                </div>
            </td>
            <td className='w-20'>
                <span className="badge badge-ghost badge-lg">{order.orderedQuantity} items</span>
            </td>
            <td className='w-20'>{order.updatedPrice}$</td>
            <td className='w-20'>
                <p className='ml-3'>{order.address}</p>
                <span className='badge badge-ghost badge-lg'>{order.username}</span>
                <small className='block'>{order.userEmail}</small>

            </td>
            <td>
                <h2>{order.status ? order.status : 'PENDING'}</h2>
            </td>
            <td>
                {
                    !(order.status) && <label style={{ cursor: 'pointer' }} htmlFor="order-modal" onClick={() => setToggole(true)} className='btn btn-secondary btn-sm mr-2'>Change</label>
                }

                {!(order.paid) && <button className='btn btn-danger btn-sm'>Cancel</button>
                }


                {
                    toggole && <OrderModal
                        id={order._id}
                        refetch={refetch}
                        setToggole={setToggole}></OrderModal>
                }

            </td>
            <td>
                <p> {order.paid ? <span className='text-green-700'>Completed </span> : <span className='text-red-600'>Incomplete</span>}</p>
            </td>
        </tr>

    );
};

export default SingleOrder;