import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='root'>
        <h1>jsonplaceholder-react</h1>
        <Outlet />
    </div>
  )
}

export default Root