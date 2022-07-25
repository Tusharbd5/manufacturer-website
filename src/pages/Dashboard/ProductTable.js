import { XCircleIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import ProductDeleteModal from './ProductDeleteModal';

const ProductTable = ({ tool, index, refetch }) => {
    const { _id, name, price, quantity, img } = tool;
    const [openModal, setOpenModal] = useState(false);
    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td className=''>
                <div>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                    <p className="font-bold mr-5">{name.length < 40 ? name : name.slice(0, 20)}</p>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-lg">{quantity} items</span>
            </td>
            <td>{price}$</td>
            <td>
                <label style={{ cursor: 'pointer' }} htmlFor="delete-product" onClick={() => setOpenModal(true)}><XCircleIcon className='h-10 w-10 text-red-500 '></XCircleIcon></label>

                {
                    openModal && <ProductDeleteModal
                        id={_id}
                        refetch={refetch}
                        setOpenModal={setOpenModal}>

                    </ProductDeleteModal>
                }
            </td>

        </tr>
    );
};

export default ProductTable;