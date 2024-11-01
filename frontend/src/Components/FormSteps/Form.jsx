import React, { useState } from "react";
import BasicInformation from "./BasicInformation";
import ContactInformation from "./ContactInformation";
import EducationInformation from "./EducationInformation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbCircleDotted } from "react-icons/tb";
const Form = () => {
  const [errors, setErrors] = useState({});
  const [Sucess, setSucess] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: "",
    lastName: "",
    age: "",
    gender: "",

    // Contact Info
    email: "",
    phone: "",
    street: "",
    city: "",
    address: "",
    zipCode: "",

    // Academic Info
    courseInterest: "",
    educationLevel: "",
    studyMode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      // i Have changed the end point to the hosted backend for this website, you can change "https://srf-portal-backend.onrender.com" to "http://localhost:5000" to check it locally
      const response = await fetch("https://srf-portal-backend.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Student registered successfully!");
        setSucess(true); // Set success to true
        setShowModal(true); // Show modal on success
        // Reset form fields
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          courseInterest: "",
          educationLevel: "",
          studyMode: "",
        });
      } else {
        toast.error(data.errors);
        setSucess(false); // Set success to false
        setErrors(data.errors || {}); // Set errors if provided
        setShowModal(true); // Show modal on error
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSucess(false); // Set success to false
      toast.error(error.message);
      setShowModal(true); // Show modal on error
    } finally {
      setIsSubmitting(false); // Re-enable the button and reset to 'Submit'
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center py-6 md:py-12">
      <div className="w-full max-w-4xl flex justify-center items-center relative">
        <div className="flex flex-col justify-center items-center gap-1 w-full">
          <h1 className="font-poppins text-2xl md:text-4xl font-semibold md:mt-5">
            Student Registration Form
          </h1>
          <p className="text-gray-700 font-quick text-sm">
            Please Enter all your information carefully
          </p>
          <div className="flex gap-5 w-full">
            <div className="w-2 h-auto bg-black/90 rounded-full"></div>
            <div className="flex-1">
              {/* Form */}
              <BasicInformation
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
              <ContactInformation
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
              <EducationInformation
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
              <button
                onClick={submitForm}
                disabled={isSubmitting} // Disable button when submitting
                className={`w-full p-4 mt-2 text-white font-poppins ${
                  isSubmitting
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 duration-500"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex justify-center items-center gap-2">
                    Submitting <TbCircleDotted className="animate-spin text-xl" />
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
