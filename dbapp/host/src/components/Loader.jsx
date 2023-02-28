import React from 'react';
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className='text-center'>
    <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
  )
}

export default Loader