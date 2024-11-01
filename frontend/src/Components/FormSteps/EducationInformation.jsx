import React from 'react'

const EducationInformation = ({ formData, handleInputChange, errors }) => {
  return (
    <div className='mt-2 flex flex-col items-start w-full relative '>
      <div className='w-5 h-8 bg-black/90 absolute -left-5 top-5'></div>
        {/* Course of Interest
Current Educational Level
Preferred Mode of Study */}
        <span className='font-quick text-md text-white w-full bg-black/90 p-5 rounded-md'>Academic Information <span className='text-red-500'>*</span> </span>
        <div className='flex flex-col w-full border border-white/30'>
        {/* Form */}
        <form className='w-full gap-2 mt-2'>
        <div className='flex flex-col gap-2 w-full mt-3'>
        <label className='font-quick text-gray-800 text-md'>Current Educational Level <span className='text-red-500'>*</span></label>
        <select
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleInputChange}  
        className='w-full p-4 cursor-pointer'>
        <option value="">Select your level</option>
        <option value="high_school">High School</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
          <option value="masters">Master's Degree</option>
          <option value="doctorate">Doctorate</option>
        </select>
        </div>
        <div className='flex flex-col gap-2 w-full mt-3'>
        <label className='font-quick text-gray-800 text-md'>Course of Interest <span className='text-red-500'>*</span></label>
        <select 
        name="courseInterest"
        value={formData.courseInterest}
        onChange={handleInputChange} 
        className='w-full p-4 cursor-pointer'>
        <option value="">Select a course</option>
        <option value="engineering">Engineering</option>
          <option value="medicine">Medicine</option>
          <option value="law">Law</option>
          <option value="computer_science">Computer Science</option>
          <option value="business">Business Administration</option>
        </select>
        </div>
        <div className='flex flex-col gap-2 w-full mt-3'>
        <label className='font-quick text-gray-800 text-md'>Preferred Mode of Study <span className='text-red-500'>*</span></label>
        <select
         name="studyMode"
         value={formData.studyMode}
         onChange={handleInputChange} 
        className='w-full p-4 cursor-pointer'>
        <option value="">Select mode</option>
        <option value="in_person">In Person</option>
          <option value="online">Online</option>
          <option value="hybrid">Hybrid</option>
        </select>
        </div>

        </form>
        </div>
    </div>
  )
}

export default EducationInformation