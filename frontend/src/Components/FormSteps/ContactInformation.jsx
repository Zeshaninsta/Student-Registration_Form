import React from 'react'

const ContactInformation = ({ formData, handleInputChange, errors }) => {
  return (
    <div className='mt-2 flex flex-col items-start w-full relative '>
      <div className='w-5 h-8 bg-black/90 absolute -left-5 top-5'></div>
        <span className='font-quick text-md text-white w-full bg-black/90 p-5 rounded-md'>Contact Information <span className='text-red-500'>*</span> </span>
        <div className='flex flex-col w-full border border-white/30'>
        {/* Form */}
        <form className='w-full gap-2 mt-2'>
        <div className='flex flex-col gap-2 w-full'>
        <label className='font-quick text-gray-800 text-md'>Email <span className='text-red-500'>*</span></label>
        <input 
        type="email"
        placeholder='Email' 
        name="email"
        value={formData.email}
        onChange={handleInputChange}  
        className='w-full outline-none border border-black/40 p-2'
        required
        />
        </div>
        <div className='flex flex-col gap-2 w-full mt-3'>
        <label className='font-quick text-gray-800 text-md'>Phone Number <span className='text-red-500'>*</span></label>
        <input 
        type="tel"
        placeholder='+2519********' 
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}  
        className='w-full outline-none border border-black/40 p-2'
        required
        />
        </div>
        <div className='flex flex-col gap-2 w-full mt-3'>
        <p className='font-quick text-md text-blue-800 mt-2'>Address <span className='text-red-500'>*</span></p>
        {/* Address (Street, City, State, Zip Code) */}
        <div className='flex justify-center items-center gap-2'>
        <div className='flex flex-col flex-1'>
        <label className='font-quick text-gray-800 text-md'>Street <span className='text-red-500'>*</span></label>
        <input 
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}  
        placeholder='Street'
        className='w-full outline-none border border-black/40 p-2'
        required
        />
        </div>
        <div className='flex flex-col flex-1'>
        <label className='font-quick text-gray-800 text-md'>City <span className='text-red-500'>*</span></label>
        <select
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        required
        className='w-full p-2 cursor-pointer'>
          <option value="" className='p-2 cursor-pointer'>Select City</option>
            <option value="Addis" className='p-2 cursor-pointer'>Addis Abeba</option>
            <option value="Adama" className='p-2 cursor-pointer'>Adama</option>
            <option value="Hawasa" className='p-2 cursor-pointer'>Hawasa</option>
        </select>
        </div>
        </div>

        <div className='flex justify-center items-center gap-2'>
        <div className='flex flex-col gap-2 w-full mt-3'>
        <label className='font-quick text-gray-800 text-md'>State <span className='text-red-500'>*</span></label>
        <input 
        type="text"
        placeholder='State' 
        name="state"
        value={formData.state}
        onChange={handleInputChange} 
        required
        className='w-full outline-none border border-black/40 p-2'
        />
        </div>
        <div className='flex flex-col gap-2 w-full mt-3'>
        <label className='font-quick text-gray-800 text-md'>Zip Code <span className='text-red-500'>*</span></label>
        <input 
        type="text"
        placeholder='Zip Code' 
        name="zipCode"
        value={formData.zipCode}
        onChange={handleInputChange}  
        required
        className='w-full outline-none border border-black/40 p-2'
        />
        </div>
        </div>


        </div>

        </form>
        </div>
    </div>
  )
}

export default ContactInformation