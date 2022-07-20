import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = () => {
    const navigate = useNavigate();
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);

    const handleOrder = () => {
        navigate('/purchase');
    }
    return (
        <div className='mt-5'>
            <h2 className='text-4xl font-bold text-secondary'>Tools</h2>
            <div className='grid md:grid-cols-3 justify-center gap-10 p-5'>
                {
                    tools.slice(0, 3).map(tool => <div key={tool._id} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={tool.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-semibold">{tool.name}</h2>
                            <p>{tool.description.length < 90 ? tool.description : tool.description.slice(0, 90)} <span title={tool.description} className='text-secondary' style={{ cursor: "pointer" }}>...read more</span></p>
                            <p>Minimum Order: 3</p>
                            <p>Available-Quantity: {tool.quantity}</p>
                            <h3 className='text-xl font-semibold'>Price: <span style={{ color: 'orange' }}>{tool.price}$</span></h3>

                            <div className="card-actions">
                                <button className="btn btn-secondary btn-sm text-white"
                                    onClick={handleOrder}>PURCHASE</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Tools;