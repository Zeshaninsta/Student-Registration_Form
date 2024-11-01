import React from 'react'

const BasicInformation = ({ formData, handleInputChange, errors }) => {
  return (
    <div className='mt-2 flex flex-col items-start w-full relative '>
      <div className='w-5 h-8 bg-black/90 absolute -left-5 top-5'></div>
        <span className='font-quick text-md text-white w-full bg-black/90 p-5 rounded-md'>Basic Information <span className='text-red-500'>*</span> </span>
        <div className='flex flex-col w-full border border-white/30 mt-2'>
        {/* Form */}
        <form className='w-full gap-2'>
        <div className='flex flex-col gap-2 w-full'>
        <label className='font-quick text-gray-800 text-md'>First Name <span className='text-red-500'>*</span></label>
        <input 
        type="text"
        placeholder='IMRAN' 
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}  
        className='w-full outline-none border border-black/40 p-2'
        />
        </div>
        <div className='flex flex-col gap-2 w-full mt-3'>
        <label className='font-quick text-gray-800 text-md'>Last Name <span className='text-red-500'>*</span></label>
        <input 
        type="text"
        placeholder='MOHAMMED' 
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}  
        className='w-full outline-none border border-black/40 p-2'
        />
        </div>
        <div className='flex flex-col md:flex-row gap-2 w-full mt-3'>
        <div className='flex flex-col gap-2 w-full'>
        <label className='font-quick text-gray-800 text-md'>Age <span className='text-red-500'>*</span></label>
        <input 
        type="number"
        name="age"
        value={formData.age}
        onChange={handleInputChange} 
        className='w-full outline-none border border-black/40 p-2'
        />
        </div>
        <div className='flex flex-col gap-2 w-full'>
        <label className='font-quick text-gray-800 text-md'>Gender <span className='text-red-500'>*</span></label>
        <select
        name="gender"
        value={formData.gender}
        onChange={handleInputChange}
        className='w-full p-2 cursor-pointer'>
        <option value="">Select</option>
            <option value="male" className='p-2 cursor-pointer'>Male</option>
            <option value="female" className='p-2 cursor-pointer'>Female</option>
            <option value="other" className='p-2 cursor-pointer'>Other</option>
        </select>
        </div>
        </div>

        </form>
        </div>
    </div>
  )
}

export default BasicInformation