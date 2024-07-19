import React from 'react'
import { Link, useParams } from 'react-router-dom';

const SeeMore = () => {
    let { id } = useParams();
  return (
    <div> 
      <Link to="/">Back</Link>
      <hr/>
      id: {id}, SeeMore ... 
    </div>
  )
}

export default SeeMore