import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="drawer drawer-mobile min-h-max">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <h2 className='text-3xl font-bold text-secondary'>Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-72 bg-base-200 text-base-content">

                    {
                        !admin && <>
                            <li><Link to="/dashboard">My Order</Link></li>
                            <li><Link to="review">Add A Review</Link></li>
                        </>
                    }
                    {
                        admin && <>
                            <li><Link to="/dashboard">Users</Link></li>
                            <li><Link to="manage-order">Manage All Orders</Link></li>
                            <li><Link to="add-tools">Add Tools</Link></li>
                            <li><Link to="manage-tools">Manage Products</Link></li>
                        </>
                    }
                    <li><Link to="profile">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;