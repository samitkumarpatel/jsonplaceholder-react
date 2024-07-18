import React from 'react'
import { useParams } from 'react-router-dom';

const SeeMore = () => {
    let { id } = useParams();
  return (
    <div> 
        id: {id} SeeMore ... 
    </div>
  )
}

export default SeeMore