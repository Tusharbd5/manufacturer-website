import React from 'react';
import { toast } from 'react-toastify';

const SingleNews = ({ information }) => {
    const { img, title, description, date } = information;
    return (
        <div className='w-96 relative shadow-md p-5 text-left'>
            <img className='w-72 hover:scale-125 ease-in duration-200' src={img} alt="" />
            <p className='absolute font-bold top-48 mt-12 right-0 p-5 bg-yellow-300 rounded-l-full'>{date.split(' ')[0]} <br />
                {date.split(' ')[1]}</p>
            <h2 className='text-2xl mt-5 font-semibold'>{title}</h2>
            <p className='text-justify mt-3 mb-3'>{description}</p>

            <button onClick={() => toast.success('Thanks For Subscribe.')} className="btn btn-outline btn-success btn-xs absolute bottom-0">SUBSCRIBE</button>
        </div>
    );
};

export default SingleNews;