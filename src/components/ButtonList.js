import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonList = ({name}) => {
  const navigate = useNavigate();
  return (

      <button onClick={()=>{
        navigate("/results?search_query="+ name)
      }} className='bg-gray-200 px-3 py-1 rounded-md mt-16'>
        {name}
      </button>
  
  )
}

export default ButtonList