import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  
    const {userid} = useParams()

  return (
    <div className='text-center text-2xl text-red-500 font-bold'>
       User : {userid}
    </div>
  )
}

export default User
