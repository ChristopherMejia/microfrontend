import { useState } from 'react'
import { Less } from '../styles/Counter'

import { handleClick } from '../helpers/handleClick'


const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <div>Counter: {counter} </div>

      <button onClick={ () => handleClick( setCounter, counter, 5 ) }> Add </button>
      <Less onClick={ () => handleClick( setCounter, counter, -5) }> Less </Less>
    </>
  )
}

export default Counter