import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    // if (!(user.emailVerified)) {
    //     return <div className='text-center h-screen flex flex-col items-center justify-center'>
    //         <h3 className='text-red-600 text-3xl'>Email is not verified</h3>
    //         <p><small className='text-success'>Please verify your email</small></p>

    //         <button onClick={async () => {
    //             await sendEmailVerification();
    //             toast('Sent email');
    //         }}
    //             className='btn text-white bg-gradient-to-r from-secondary to-primary border-none'>Send Email</button>

    //     </div>
    // }
    return children;
};

export default RequireAuth;