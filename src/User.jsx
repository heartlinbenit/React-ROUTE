import React from 'react'

function User({id}) {
  return (
    <div className='h-40 flex justify-center items-center text-3xl text-pink-900'>
        User - {id}
    </div>
  )
}

export default User