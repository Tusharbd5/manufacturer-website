import React from 'react';
import CustomLink from '../../tools/CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar bg-primary lg:justify-around">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-secondary mx-5 mr-20 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><CustomLink to='/'>HOME</CustomLink></li>
                        <li><CustomLink to='/about'>ABOUT</CustomLink></li>
                        <li><CustomLink to='/blog'>BLOG</CustomLink></li>
                    </ul>
                </div>
                <Link to='/' style={{ cursor: "pointer" }}><img src={logo} className='w-20 hidden lg:block' alt='logo'></img></Link>
                <Link to='/' style={{ cursor: "pointer" }} className='btn btn-ghost normal-case text-xl lg:hidden text-white'>ELECTRO TOOLS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center gap-5 p-5 text-white text-xl">
                    <li><CustomLink to='/'>HOME</CustomLink></li>
                    <li><CustomLink to='/about'>ABOUT</CustomLink></li>
                    <li><CustomLink to='/blog'>BLOG</CustomLink></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;