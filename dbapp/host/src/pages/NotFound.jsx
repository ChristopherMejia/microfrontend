import React from 'react'
import {NavLink} from "react-router-dom"

export const NotFound = () => {
  return (
    <div className='text-center'>
        <h1 className='m-16  text-xl text-red-500'> 404 Page not Found</h1>
        <NavLink to="/" className="bg-blue-400 p-3 text-white rouded-md"> Go to Home </NavLink>
    </div>
  )
}
