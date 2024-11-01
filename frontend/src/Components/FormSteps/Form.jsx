import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import AcademicInfo from './AcademicInfo';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: '',
    age: '',
    gender: '',
    dateOfBirth: '',
    
    // Contact Info
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Academic Info
    courseInterest: '',
    educationLevel: '',
    studyMode: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (step) => {
    let stepErrors = {};
    
    switch(step) {
      case 1: // Basic Info
        if (!formData.fullName.trim()) {
          stepErrors.fullName = 'Full name is required';
        } else if (formData.fullName.length < 2) {
          stepErrors.fullName = 'Name must be at least 2 characters long';
        }

        if (!formData.age) {
          stepErrors.age = 'Age is required';
        } else if (formData.age < 16 || formData.age > 120) {
          stepErrors.age = 'Please enter a valid age between 16 and 120';
        }

        if (!formData.gender) {
          stepErrors.gender = 'Please select your gender';
        }
        break;

      case 2: // Contact Info
        if (!formData.zipCode) {
          stepErrors.zipCode = 'Postal code is required';
        } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
          stepErrors.zipCode = 'Please enter a valid postal code';
        }

        if (!formData.address.trim()) {
          stepErrors.address = 'Street address is required';
        }

        if (!formData.city.trim()) {
          stepErrors.city = 'City is required';
        }

        if (!formData.state) {
          stepErrors.state = 'Please select a state';
        }
        break;

      case 3: // Academic Info
        if (!formData.courseInterest) {
          stepErrors.courseInterest = 'Please select a course';
        }

        if (!formData.educationLevel) {
          stepErrors.educationLevel = 'Please select your education level';
        }

        if (!formData.studyMode) {
          stepErrors.studyMode = 'Please select your preferred study mode';
        }
        break;

      default:
        break;
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfo formData={formData} handleInputChange={handleInputChange} errors={errors} />;
      case 2:
        return <ContactInfo formData={formData} handleInputChange={handleInputChange} errors={errors} />;
      case 3:
        return <AcademicInfo formData={formData} handleInputChange={handleInputChange} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-2">New User Registration</h1>
        <p className="text-gray-600">Sign up to access your license and support information.</p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-between mb-8 w-full gap-5">
        {['Basic Information', 'Contact Details', 'Academic Info'].map((step, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep > index + 1 ? 'bg-blue-600' : 
              currentStep === index + 1 ? 'bg-blue-600' : 'bg-gray-300'
            } text-white`}>
              {index + 1}
            </div>
            <div className={`ml-2 ${currentStep === index + 1 ? 'text-blue-600' : 'text-gray-500'}`}>
              {step}
            </div>
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {renderStep()}
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="px-4 py-2 text-blue-600 hover:text-blue-800"
            >
              Previous Step
            </button>
          )}
          {currentStep < 3 && (
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-auto"
            >
              Next Step
            </button>
          )}
          {currentStep === 3 && (
            <button
              onClick={() => console.log(formData)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-auto"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
