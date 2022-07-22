import React, { useState } from 'react';
import { XCircleIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import DeleteModal from './DeleteModal';

const Order = ({ order, index, refetch }) => {
    const { _id, productName, productPic, orderedQuantity, updatedPrice, address } = order;
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <tr>
                <td>
                    {index + 1}
                </td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={productPic} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div className="font-bold">{productName}</div>
                    </div>
                </td>
                <td>
                    <span className="badge badge-ghost badge-lg">{orderedQuantity} items</span>
                </td>
                <td>{updatedPrice}$</td>
                <td>{address}</td>
                <td>
                    <div className='flex items-center'>
                        <button className='btn btn-xs btn-success mr-5 text-white'>Pay</button>

                        {/* <button onClick={() => setOpenModal(true)}><XCircleIcon className='h-7 w-7 text-red-500 '></XCircleIcon></button> */}

                        <label style={{ cursor: 'pointer' }} htmlFor="delete-modal" onClick={() => setOpenModal(true)}><XCircleIcon className='h-7 w-7 text-red-500 '></XCircleIcon></label>
                        {
                            openModal && <DeleteModal
                                id={_id}
                                refetch={refetch}></DeleteModal>
                        }
                    </div>
                </td>
            </tr>

        </>
    );
};

export default Order;