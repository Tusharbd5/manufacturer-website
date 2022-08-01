import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import RemoveUserModal from './RemoveUserModal';

const Users = () => {
    const [modal, setModal] = useState(false);
    const [sender, setSender] = useState('');
    const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch('https://thawing-savannah-54100.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = (email, refetch) => {
        fetch(`https://thawing-savannah-54100.herokuapp.com/user/admin/${email}`, {
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
            });
    }
    const handleEmail = email => {
        setSender('');
        setModal(true);
        setSender(email);
    }
    return (
        <React.Fragment>
            <div>
                <h1>This is users: {users?.length}</h1>

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
                                users?.map((user, index) => <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.email}</td>

                                    <td>
                                        {user.role !== 'admin' && <button onClick={() => makeAdmin(user.email, refetch)}
                                            className="btn btn-sm btn-outline mr-3">Make Admin</button>}


                                        {user.role !== 'admin' && <label onClick={() => {
                                            handleEmail(user.email);
                                        }}
                                            htmlFor='remove-user-modal'
                                            className="btn btn-outline btn-sm">Remove User</label>}



                                    </td>


                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    modal && <RemoveUserModal
                        email={sender}
                        refetch={refetch}></RemoveUserModal>
                }
            </div>
        </React.Fragment>
    );
};

export default Users;