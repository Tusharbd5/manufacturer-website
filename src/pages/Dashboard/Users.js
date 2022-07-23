import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = (email, refetch) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
            })
    }
    return (
        <div>
            <h1>This is users: {users.length}</h1>

            <div className="overflow-x-auto w-full">

                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.email}</td>

                                <td>
                                    {user.role !== 'admin' && <button onClick={() => makeAdmin(user.email, refetch)}
                                        className="btn btn-sm btn-outline mr-3">Make Admin</button>}

                                    {user.role !== 'admin' && <button className="btn btn-outline btn-sm">Remove User</button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;