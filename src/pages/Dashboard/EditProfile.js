import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { toast } from 'react-toastify';

const EditProfile = ({ user, setOpenModal, refetch }) => {
    const [value, setValue] = useState();

    const handleUpdateUser = event => {
        event.preventDefault();
        const email = user.email;
        const location = event?.target?.location.value;
        const phone = value;
        const linkdin = event?.target?.linkdin.value;
        const updatedUser = {
            location: location, phone: phone, linkdin: linkdin
        }
        const proceed = window.confirm('Do You Want to Update?');
        if (proceed) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        toast('Profile successfully updated');
                    }
                    refetch();
                    setOpenModal(false);
                })
        }
    }
    return (
        <div>
            <input type="checkbox" id="edit-profile" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-96 lg:w-full">
                    <label htmlFor="edit-profile" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Update Info</h3>

                    <form onSubmit={handleUpdateUser}>
                        <input type="text" name='location' placeholder="Your District" className="input input-bordered input-secondary w-full max-w-xs input-sm mb-3" required />
                        {/* <input type="phone" name='phone' placeholder="Phone Number" className="input input-bordered input-secondary w-full max-w-xs input-sm" /> */}
                        <PhoneInput name='phone' className='input input-bordered input-secondary w-full max-w-xs input-sm mb-3 mx-auto'
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue} required></PhoneInput>

                        <input type="text" name='linkdin' placeholder="Linkdin Profile Link" className="input input-bordered input-secondary w-full max-w-xs input-sm mb-3" required />

                        <input type='submit' value='UPDATE' className='btn btn-sm btn-secondary text-white block mx-auto' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;