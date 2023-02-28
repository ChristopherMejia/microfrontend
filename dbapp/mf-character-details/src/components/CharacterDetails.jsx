import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from "react-router-dom"

const CharacterDetails = () => {

  const [ details, setDetails ] = useState({})
  const {id} = useParams();

  const getData = async () => {
    const response = await fetch( `https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    console.log(data);
    setDetails( data );
  }

  useEffect( () => {
    getData();
  }, [])

  return (
    <>
      <NavLink 
        className="bg-gray-200 text-gray-700 p-3 shadow-lg rounded-md font-bold" 
        to="/characters"
      > 
        Back 
      </NavLink>

      <div 
        className='text-center grid grid-cols-2 gap-3' 
        style={{ 
          justifyItems: "center",
        }}
        >
        <div>
          <img 
            src={details.image} 
            alt={details.name} 
            style={{  maxWidth: "400px", maxHeight: "400px"}}
          />
        </div>
        <div>
          <table className='table-auto border-collapse border'>
            <tbody>
              <tr>
                <th className='border p-2'>Name </th>
                <td className='border p-2'>{details.name }</td>
              </tr>
              <tr>
                <th className='border p-2'>Gender </th>
                <td className='border p-2'>{details.gender }</td>
              </tr>
              <tr>
                <th className='border p-2'>Species </th>
                <td className='border p-2'> {details.species }</td>
              </tr>
              <tr>
                <th className='border p-2'>Status </th>
                <td className='border p-2'>{details.status }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CharacterDetails