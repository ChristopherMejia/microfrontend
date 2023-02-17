import React from 'react'

const ColorList = () => {

  const colorList = ["0c3478", "0c9246", "340c92"];

  return (
    <div className='list-group text-center'>
      { colorList.map( (color, index) => (
        <button 
          key={index} 
          type="button" 
          className="list-group-item list-group-item-action"
          aria-current="true"
          title="Copiar"
          style={{ 
            background: color 
          }}
        > 
          {color} 
        </button>
      ))}
    </div>
  )
}

export default ColorList