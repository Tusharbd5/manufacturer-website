import React from 'react';
import { toast } from 'react-toastify';

const RemoveUserModal = ({ email, refetch }) => {

    const handleRemove = () => {

        fetch(`http://localhost:5000/user/${email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order Successfully Deleted', data);
                refetch();
            });
    }
    return (
        <div>
            <input type="checkbox" id="remove-user-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="remove-user-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Do you want to revome user?</h3>
                    <button onClick={handleRemove} className='btn btn-sm btn-secondary text-white'>YES</button>
                </div>
            </div>
        </div>
    );
};

export default RemoveUserModal;