import React, { useState } from 'react'
import "../styles/Counter.css"

const Counter = () => {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className='Counter-container'>Counter</div>

      <h2>Counter: {}</h2>

      <button> +1 </button>
      <button> -1 </button>
    </>
  )
}

export default Counter