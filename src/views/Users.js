import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const Users = () => {
    const users = useLoaderData();
    const navigate = useNavigate();
    const [expandedRows, setExpandedRows] = React.useState({});

    const toggleRow = (index) => {
        setExpandedRows({
            ...expandedRows,
            [index]: !expandedRows[index]
        })
    }

    const seeMore = (id) => {
        console.log(id)
        navigate(`/${id}`)
    }

    return (
        <div className='users'>
            
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
                        users.map((user, index) => (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td>{user.id}.</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <span className='action__button' onClick={() => toggleRow(index)}>
                                                +
                                            </span>
                                            <span className='action__button' onClick={() => seeMore(user.id)}>
                                                &rarr;
                                            </span>
                                            
                                        </td>
                                    </tr>
                                    {  
                                        expandedRows[index] && (
                                            <tr onFocus={console.log(`onFocus of tr ${index}`)}>
                                                <td colSpan="5" className='expanded__row'>
                                                    <div className='expanded__row__div'>
                                                        <p className='underline'>Id: {user.id} , Name: {user.name}</p>
                                                        <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}</p>
                                                        <p>Company: {user.company.name}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    
                                </React.Fragment>
                            )
                        )
                    }
                </tbody>
            </table>
            <footer>
                <small>&#169; all right reserved!</small>
            </footer>
        </div>
    )
}

export default Users