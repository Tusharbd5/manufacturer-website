import React from 'react';
import footer from '../../assets/footer.png'

const Footer = () => {
    let newDate = new Date();
    let date = newDate.getFullYear();
    return (
        <footer className="p-10 mt-10" style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <div className='footer '>
                <div className='mx-auto'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <footer className="footer footer-center p-4 text-base-content mt-5">
                <div>
                    <p>{`Copyright © ${date}- All right reserved by ELECTRO-TOOLS`}</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;