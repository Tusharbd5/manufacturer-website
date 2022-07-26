import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTools = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'd3eb674c79011a7e2e68c428104b5072';

    const onSubmit = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tools = {
                        name: data.name,
                        price: data.number,
                        description: data.detail,
                        img: img,
                        quantity: data.quantity,
                        minQuantity: data.minQuantity
                    }
                    // Send to database.
                    fetch('https://thawing-savannah-54100.herokuapp.com/tool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tools)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.insertedId) {
                                toast.success('successfully added');
                                reset();
                            }
                            else {
                                toast('Failed to add');
                            }

                        })
                }
            })

        // navigate('/appointment');
    }
    return (
        <div className=''>
            <h2 className='text-2xl font-semibold mt-5'>Add A Tool</h2>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        placeholder="Tool Name"
                        className="input input-bordered border-secondary w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("number", {
                            required: {
                                value: true,
                                message: 'Price is required'
                            },
                            pattern: {
                                value: /^\d*[1-9]\d*$/,
                                message: 'Provide a valid number'
                            }
                        })} />
                    <label className="label">
                        {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}

                        {errors.number?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text"
                        placeholder="Description"
                        className="input input-bordered w-full max-w-xs h-32"
                        {...register("detail", {
                            required: {
                                value: true,
                                message: 'Detail is required'
                            }
                        })} />
                    <label className="label">
                        {errors.detail?.type === 'required' && <span className="label-text-alt text-red-500">{errors.detail.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Quantity</span>
                    </label>
                    <input type="number"
                        placeholder="Minimum Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minQuantity", {
                            required: {
                                value: true,
                                message: 'Price is required'
                            },
                            pattern: {
                                value: /^\d*[1-9]\d*$/,
                                message: 'Provide a valid Quantity'
                            }
                        })} />
                    <label className="label">
                        {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQuantity.message}</span>}

                        {errors.minQuantity?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.minQuantity.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Total Quantity</span>
                    </label>
                    <input type="number"
                        placeholder="Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Quantity is required'
                            },
                            pattern: {
                                value: /^\d*[1-9]\d*$/,
                                message: 'Provide a valid Quantity'
                            }
                        })} />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}

                        {errors.quantity?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        className="input input-bordered border-secondary w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }

                        })} />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn max-w-xs w-full text-white' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddTools;