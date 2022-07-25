import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({ id, refetch, setOpenModal }) => {

    const handleDelete = () => {
        fetch(`http://localhost:5000/tool/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount === 1) {
                    toast.success('Product Successfully deleted');
                    setOpenModal(false);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-product" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="delete-product" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Do you want to Delete?</h3>
                    <button onClick={handleDelete} className='btn btn-sm btn-secondary text-white'>YES</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDeleteModal;