import React, { useEffect } from 'react'

const Todos = ({userId}) => {
    const [todos, setTodos] = React.useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            .then(response => response.json())
            .then(json => setTodos(json))
    },[userId])

    return (
        <div>
            <p className='underline'>Todos of {userId}</p>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Todos