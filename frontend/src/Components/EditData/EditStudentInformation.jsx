import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditStudent({ studentId, onClose, onUpdate }) {
  const [studentData, setStudentData] = useState({
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Received studentId:", studentId);
    if (!studentId) {
      setError('No student ID provided');
      setLoading(false);
      return;
    }
  
    const fetchStudentData = async () => {
      setLoading(true);
      try {
        console.log(`Fetching data for student ID: ${studentId}`);
        // i Have changed the end point to the hosted backend for this website, you can change "https://srf-portal-backend.onrender.com" to "http://localhost:5000" to check it locally
        const response = await fetch(`https://srf-portal-backend.onrender.com/api/students/${studentId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchStudentData();
  }, [studentId]);
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://srf-portal-backend.onrender.com/students/${studentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });
      if (!response.ok) {
        throw new Error('Failed to update student data');
      }
      onUpdate(); // Refresh data in the main component
      toast.success("Student information updated successfully!");
      onClose();  // Close the edit form
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="firstName"
            value={studentData.firstName}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={studentData.lastName}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Last Name"
          />
          <input
            name="email"
            value={studentData.email}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Email"
          />
          <input
            name="age"
            value={studentData.age}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Age"
          />
          <input
            name="gender"
            value={studentData.gender}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Gender"
          />
          <input
            name="phone"
            value={studentData.phone}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Phone"
          />
          <input
            name="address"
            value={studentData.address}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Address"
          />
          <input
            name="city"
            value={studentData.city}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="City"
          />
          <input
            name="state"
            value={studentData.state}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="State"
          />
          <input
            name="zipcode"
            value={studentData.zipcode}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Zipcode"
          />
          <input
          name="educationLevel"
          value={studentData.educationLevel}
          onChange={handleChange} 
            className="p-2 border rounded-md"
            placeholder="Zipcode"
          />
          <input
          name="courseInterest"
          value={studentData.courseInterest}
          onChange={handleChange} 
            className="p-2 border rounded-md"
            placeholder="Zipcode"
          />
          <input
         name="studyMode"
         value={studentData.studyMode}
          onChange={handleChange} 
            className="p-2 border rounded-md"
            placeholder="Zipcode"
          />
        </div>
        <div className="flex justify-between md:justify-end space-x-2 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full px-4 py-2 bg-red-400 text-white rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditStudent;
