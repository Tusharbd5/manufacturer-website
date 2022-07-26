import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OurServices.css';
import { faMicrochip, faBuildingShield, faBusinessTime } from '@fortawesome/free-solid-svg-icons';

const OurServices = () => {
    return (
        <div className='mt-5 lg:bg-slate-100 pt-5 pb-5'>
            <h1 className='text-3xl font-bold text-secondary'>Our Commitment</h1>
            <div className='services p-5'>
                <div className='service shadow-md'>
                    <FontAwesomeIcon className='icon' icon={faMicrochip}></FontAwesomeIcon>

                    <h2 className='text-2xl font-semibold'>Leatest Technology</h2>
                    <p>Here implemented the leatest Technology. We are going to import some new featured smartphones of leatest technology.</p>
                </div>
                <div className='service shadow-md'>
                    <FontAwesomeIcon className='icon' icon={faBuildingShield}></FontAwesomeIcon>

                    <h2 className='text-2xl font-semibold'>Safe and Insured</h2>
                    <p>We have the leatest smartphone of interesting features. Each phones having smart insurance and the security of fund.</p>
                </div>
                <div className='service shadow-md'>
                    <FontAwesomeIcon className='icon' icon={faBusinessTime}></FontAwesomeIcon>

                    <h2 className='text-2xl font-semibold'>Timely Delivery</h2>
                    <p>We are well knowned for timely delivery. If you ordered any smartphone of different brand then we will stock those products as soon as possible.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;