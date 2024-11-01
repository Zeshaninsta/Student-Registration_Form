import React from 'react'
import { TbCircleDotted } from "react-icons/tb";

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <TbCircleDotted  className='text-5xl animate-spin text-gray-700'/>

    </div>
  )
}

export default Loading