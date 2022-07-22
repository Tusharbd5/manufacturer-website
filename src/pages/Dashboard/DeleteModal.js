import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ id, refetch }) => {
    const handleDelete = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                toast('Order Successfully Deleted', data);
                refetch();
            })

    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are You Sure ?</h3>
                    <button onClick={() => handleDelete(id)} className='btn btn-sm btn-secondary text-white'>YES</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;