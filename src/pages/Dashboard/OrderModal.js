import React from 'react';
import { toast } from 'react-toastify';

const OrderModal = ({ id, refetch, setToggole }) => {

    const handleStatus = () => {

        fetch(`http://localhost:5000/order/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order status changed');
                setToggole(false);
                refetch();

            })
    }
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Do you want to ship order?</h3>
                    <button onClick={handleStatus} className='btn btn-sm btn-secondary text-white'>YES</button>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;