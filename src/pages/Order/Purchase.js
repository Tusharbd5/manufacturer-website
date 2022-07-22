import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

const Purchase = () => {
    const { id } = useParams();
    // const [tools, setTools] = useState({});
    const [user] = useAuthState(auth);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/tool/${id}`)
    //         .then(res => res.json())
    //         .then(data => setTools(data))
    // }, [id, setTools]);
    const { data: tools, isLoading, refetch } = useQuery(['tool'], () => fetch(`http://localhost:5000/tool/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const { name, price, description, img, quantity } = tools;

    const handlePurchase = (event) => {
        event.preventDefault();
        const orderQuantity = parseInt(event.target.quantity.value || 3);
        if (orderQuantity < 0) {
            toast.error('Never Order Minus Quantity')
        }
        else if (orderQuantity < 3) {
            toast.error('Minimum Item order is 3');
        }
        else if (orderQuantity > quantity) {
            toast.error('Exceed the Limit of Quantity');
        }
        // Total working for clicking the purchase button
        else {
            const updatedPrice = price * orderQuantity;
            const userEmail = user.email;
            const username = user.displayName;
            const address = event.target.address.value;
            const orderedQuantity = orderQuantity;
            const productName = name;
            const productPic = img;

            const order = { username, userEmail, address, productPic, productName, orderedQuantity, updatedPrice };

            // Send data to server
            fetch('http://localhost:5000/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(result => {
                    toast('Item successfully ordered', result);
                })

            // Update quantity to database...
            const newQuantity = quantity - orderQuantity;
            tools.quantity = newQuantity;
            fetch(`http://localhost:5000/tool/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(tools)
            })
                .then(res => res.json())
                .then(data => {
                    event.target.reset();
                    refetch();
                })
        }
    }
    return (
        <div className='mb-5'>
            <h1 className='text-2xl text-blue-500'>Welcome To Purchase Page</h1>
            <form onSubmit={handlePurchase} className='shadow-lg lg:w-1/2 mx-auto p-5 rounded-3xl mt-5'>
                <h2>User Information</h2>

                <input type="name" value={user?.displayName} disabled placeholder="Type here" className="input input-bordered input-secondary w-96 mb-5" />

                <input type="email" value={user?.email} disabled placeholder="Type here" className="input input-bordered input-secondary w-96 mb-5" />

                <input type="text" name='address' placeholder="Type Your Address" className="input input-bordered input-secondary w-96 mb-5" required />

                <input type="text" name='phone' placeholder="Type Your Phone" className="input input-bordered input-secondary w-96" required />

                <h2 className='mt-5'>Product Information</h2>
                <div className='w-96 mx-auto'>
                    <img className='w-72 mx-auto shadow-xl rounded-3xl' src={img} alt="" />
                    <h3 className='text-2xl font-semibold mt-5 text-secondary'>{name}</h3>
                    <p className='text-justify mt-3'>{description}</p>

                    <p className={quantity ? 'text-xl text-blue-600 font-semibold' : 'text-xl text-red-600 font-semibold'}>{quantity ? quantity + ' Items Available' : "Sold Out"} </p>
                    <p className='text-2xl'>Price: {price}$</p>
                </div>
                <input type="number" name='quantity' placeholder="Min 3" className="input input-bordered input-secondary w-36 mt-3" />

                <input disabled={!quantity} type='submit' value='Place Order' className='btn btn-primary mt-3 block mx-auto'></input>
            </form>


        </div>
    );
};

export default Purchase;