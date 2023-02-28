import React, { useEffect, useRef } from 'react';
import Error from "../components/Error"
import Cards from "Cards/placeCards"


export const Characters = () => {
  
  const cardsRef = useRef(null)
  
  useEffect( () => {
    Cards(cardsRef.current)
  }, [])

  return (
    <>
      <Error>
        <div ref={cardsRef}></div>
      </Error>
    </>
  )
}
