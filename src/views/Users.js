import React, { useEffect, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => setError(error.message))
    },[])
    
    const seeMore = (id) => {
        console.log(id)
        navigate(`/${id}`)
    }

    return (
        <div className='users'>
            <p>{error}</p>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}.</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <button onClick={() => seeMore(user.id)}>
                                            See More
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users