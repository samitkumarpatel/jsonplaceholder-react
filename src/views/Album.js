import React, { useEffect } from 'react'

const Album = ({userId}) => {
    const [albums, setAlbums] = React.useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
            .then(response => response.json())
            .then(json => setAlbums(json))
    },[userId])

    return (
        <div>
            <p className='underline'>Album</p>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>{album.title}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Album