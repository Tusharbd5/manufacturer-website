import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductTable from './ProductTable';

const ManageProduct = () => {
    const { data: tools, isLoading, refetch } = useQuery(['tools'], () => fetch(`http://localhost:5000/tool`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <ProductTable
                                key={tool._id}
                                tool={tool}
                                refetch={refetch}
                                index={index}></ProductTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;