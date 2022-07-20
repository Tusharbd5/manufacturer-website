import React from 'react';

const InfoCard = ({ icon, service, bgClass, details, textClass }) => {
    return (
        <div className={`card card-side items-center shadow-xl px-4 ${bgClass}`}>
            {icon}
            <div className="card-body text-white text-center py-5 px-0">
                <h2 style={{ color: `${textClass}` }} className='text-2xl font-bold'>{service}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;