import React from 'react';

const Order = ({ order, index }) => {
    const { productName, productPic, orderedQuantity, updatedPrice, address } = order;
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

            </tr>
        </>
    );
};

export default Order;