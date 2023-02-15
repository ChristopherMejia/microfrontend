import React, { useState } from 'react'

import "../styles/Counter.css"

import Button from './Button';
import { handleClick } from '../helpers/handleClick';

const Counter = () => {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="counter-container">        
        <h2>Counter: { counter }</h2>
        <Button 
          text="+ 1"
          handler={ () => handleClick( setCounter, counter, +1 ) }
        />
        <Button 
          text="- 1"
          handler={ () => handleClick( setCounter, counter, -1 ) }
        /> 
      </div>
    </>
  )
}

export default Counter