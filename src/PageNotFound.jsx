import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='flex justify-center h-96 items-center'>
        <Link to="*">
             <p className='text-red-600 text-6xl'>
                404 ERROR
             </p>
             <p className='text-black text-4xl font-bold'>PAGE NOT FOUND</p>
        
        </Link>
        <Outlet />
        </div>
  )
}

export default PageNotFound