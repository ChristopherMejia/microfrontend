import React, { useState } from 'react'

const Counter = ({initialCounter = 10}) => {
    const [counter, setCounter] = useState(initialCounter);
    const handleAdd = () => setCounter( counter + 1);
    const handleLess = () => setCounter( counter - 1);

  return (
    <div className='text-4xl'>
        <button onClick={handleAdd} className='bg-green-300 text-center font-bold rounded-md p-2'>+ 1</button>
        <span className='mx-10'> {counter} </span>
        <button onClick={handleLess} className='bg-yellow-600 text-center font-bold rounded-md p-2'>- 1</button>
    </div>
  )
}

export default Counter