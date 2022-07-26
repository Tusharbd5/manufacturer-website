import React from 'react';
import CustomLink from '../../tools/CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const menuItems = <>
        <li><CustomLink to='/'>HOME</CustomLink></li>
        <li><CustomLink to='/blogs'>BLOG</CustomLink></li>
        <li><CustomLink to='/portfolio'>PORTFOLIO</CustomLink></li>
        {
            user && <li><CustomLink to="/dashboard">Dashboard</CustomLink></li>
        }
        {
            user && <p>{user.displayName}</p>
        }
        <li>{user ?
            <button onClick={() => {
                signOut(auth);
                localStorage.removeItem('accessToken');
            }} className='btn btn-error btn-sm text-white'>Sign Out</button>
            :
            <CustomLink to="/login">LOGIN</CustomLink>}</li>

    </>

    return (
        <div className="navbar bg-primary lg:justify-around sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-secondary mx-5 mr-20 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <Link to='/' style={{ cursor: "pointer" }}><img src={logo} className='w-12 hidden lg:block' alt='logo'></img></Link>
                <Link to='/' style={{ cursor: "pointer" }} className='btn btn-ghost normal-case text-xl lg:hidden text-white'>ELECTRO<span style={{ color: "orange" }}>-TOOLS</span></Link>

                <div className="sidebar">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-secondary mx-5 mr-20 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center gap-5 text-white">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;