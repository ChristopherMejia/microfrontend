import React from 'react'
import styled from '@emotion/styled'

const ButtonStyle = styled.button`
    font-family: 'Ubuntu', sans-serif;
    margin: 0px 0.5rem;
    width: 70px;
    height: 25px;
    border-radius: 10px;
    border: none;
`


const Button = ( {text, handler} ) => {
  return (
    <ButtonStyle onClick={ handler }> {text} </ButtonStyle>
  )
}

export default Button