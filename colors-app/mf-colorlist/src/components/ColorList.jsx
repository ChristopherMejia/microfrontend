import React from 'react'

const ColorList = ({colorList = []}) => {
  return (
    <div className='list-group text-center'>
      { (colorList.lenght > 0) ? 
        ( colorList.map( (color, index) => (
          <button 
            key={index} 
            type="button" 
            className="list-group-item list-group-item-action"
            aria-current="true"
            title="Copiar"
            style={{ 
              background: color,
              color: 'white' 
            }}
          > 
            {color} 
          </button>
        ))) : (
          <div className='alert alert-danger' role='alert'>
            <b> Empty elements ... </b>
          </div>
        )
      }
    </div>
  )
}

export default ColorList