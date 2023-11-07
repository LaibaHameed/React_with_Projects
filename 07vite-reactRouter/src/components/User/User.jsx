import React from 'react'
import { useParams } from 'react-router-dom'
import "./User.css"


const User = () => {
    const {userId} = useParams();
  return (
    <div className='user'>User: {userId}</div>
  )
}

export default User