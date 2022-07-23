import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import EditProfile from './EditProfile';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);

    const { data, isLoading, refetch } = useQuery(['user-data'], () => fetch(`http://localhost:5000/user/${email}`, {
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
            <h1 className='text-xl mt-5 text-blue-600'>User Information</h1>
            <div className='bg-lime-200 mt-5 lg:flex justify-center items-center'>
                <div className='text-justify p-5'>
                    <h2 className='text-xl font-bold mb-2'>Name: {displayName}</h2>
                    <p>Email: {email}</p>
                    <p>{data.linkdin ? 'Linkdin: ' + data.linkdin : ''}</p>
                    <p>{data.location ? 'City: ' + data.location : ''}</p>
                    <p>{data.phone ? 'Phone: ' + data.phone : ''}</p>

                </div>
                <label htmlFor="edit-profile"
                    onClick={() => setOpenModal(true)}
                    className='btn btn-secondary btn-sm mb-3 lg:mb-0'>
                    Edit Profile
                </label>

                {
                    openModal && <EditProfile
                        user={user}
                        refetch={refetch}
                        setOpenModal={setOpenModal}></EditProfile>
                }
            </div>
        </div>
    );
};

export default MyProfile;