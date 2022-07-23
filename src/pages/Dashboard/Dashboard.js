import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
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

                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="review">Add A Review</Link></li>
                    <li><Link to="profile">My Profile</Link></li>
                    <li><Link to="users">Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;