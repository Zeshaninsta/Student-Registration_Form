import React, { useEffect, useState } from 'react';
import EditStudent from '../EditData/EditStudentInformation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

function DisplayData() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editStudentId, setEditStudentId] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      // i Have changed the end point to the hosted backend for this website, you can change "https://srf-portal-backend.onrender.com" to "http://localhost:5000" to check it locally
      const response = await fetch("https://srf-portal-backend.onrender.com/api/students", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setStudents(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (student) => {
    setEditStudentId(student._id);
    setSelectedStudent(student);
  };

  const handleCloseEdit = () => {
    setEditStudentId(null);
  };

  const handleUpdate = () => {
    fetchData();
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://srf-portal-backend.onrender.com/api/students/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        let errorMessage = 'Failed to delete student';
  
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } else {
          errorMessage = await response.text();
        }
  
        throw new Error(errorMessage);
      }
  
      setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
      toast.success('Student deleted successfully!');
    } catch (error) {
      console.error("Error deleting student:", error);
      setError(error.message);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="w-full sm:p-8 max-w-8xl mx-auto py-6 md:py-12">
      <ToastContainer />
      <div className="bg-gray-100 rounded-xl overflow-hidden">
        <div className="p-2 md:p-6 bg-gray-800">
          <h1 className="text-xl md:text-3xl font-bold text-white text-center">Student Information</h1>
        </div>

        {loading && (
          <Loading />
        )}

        {error && (
          <div className="text-center p-8 bg-red-50 m-4 rounded-lg">
            <p className="text-red-600">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="p-6">
            {/* Desktop Table Format */}
            <div className="hidden sm:block">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">First Name</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Last Name</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Age</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Gender</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Phone</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Address</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    {students.map((student) => (
                      <tr key={student._id} className="hover:bg-gray-100 transition-colors duration-200">
                        <td className="px-4 py-2 text-sm text-gray-700">{student.firstName}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{student.lastName}</td>
                        <td className="px-4 py-2 text-sm text-gray-700 truncate">{student.email}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{student.age}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{student.gender}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{student.phone}</td>
                        <td className="px-4 py-2 text-sm text-gray-700 truncate">
                          {student.address}, {student.city}, {student.state}, {student.zipCode}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          <div className="flex space-x-2">
                            <button onClick={() => handleEdit(student)} className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 duration-300 rounded-md ">
                              Edit
                            </button>
                            <button onClick={() => handleDelete(student._id)} className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 duration-300 rounded-md ">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card Format */}
            <div className="sm:hidden space-y-4">
              {students.map((student) => (
                <div key={student._id} className="bg-white  rounded-lg shadow-md">
                  <div className='flex justify-between items-center px-2 border border-gray-300'>
                  <p className='text-sm text-gray-700'>First Name</p>
                  <p className='text-sm text-gray-700'>{student.firstName}</p>
                  </div>
                  <div className='flex justify-between items-center px-2 border border-gray-300'>
                    <p className='text-sm text-gray-700'>Last Name</p>
                    <p className='text-sm text-gray-700'>{student.lastName}</p>
                  </div>
                  <div className='flex justify-between items-center px-2 border border-gray-300'>
                    <p className='text-sm text-gray-700'>Email</p>
                    <p className='text-sm text-gray-700'>{student.email}</p>
                  </div>
                  <div className='flex justify-between items-center px-2 border border-gray-300'>
                    <p className='text-sm text-gray-700'>Age</p>
                    <p className='text-sm text-gray-700'>{student.age}</p>
                  </div>
                  <div className='flex justify-between items-center px-2 border border-gray-300'>
                    <p className='text-sm text-gray-700'>Gender</p>
                    <p className='text-sm text-gray-700'>{student.gender}</p>
                  </div>
                  <div className='flex justify-between items-center px-2 border border-gray-300'>
                    <p className='text-sm text-gray-700'>Phone</p>
                    <p className='text-sm text-gray-700'>{student.phone}</p>
                  </div>
                  <div className='flex justify-between items-center px-2 border border-gray-300'>
                    <p className='text-sm text-gray-700'>Address</p>
                    <p className='text-sm text-gray-700'>{student.address}</p>
                  </div>
                  <div className='flex justify-between items-center px-2 border border-gray-300'>
                    <p className='text-sm text-gray-700'>City</p>
                    <p className='text-sm text-gray-700'>{student.city}</p>
                  </div>
                  <div className='flex justify-between items-center px-2 border border-gray-300'>
                    <p className='text-sm text-gray-700'>State</p>
                    <p className='text-sm text-gray-700'>{student.state}</p>
                  </div>
                  <div className='flex justify-between items-center px-2 border border-gray-300'>
                    <p className='text-sm text-gray-700'>Zip Code</p>
                    <p className='text-sm text-gray-700'>{student.zipCode}</p>
                  </div>
                  <div className="mt-4 flex space-x-2 justify-between">
                    <button onClick={() => handleEdit(student)} className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 duration-300 rounded-md ">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(student._id)} className="w-full px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 duration-300 rounded-md ">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {editStudentId && selectedStudent && (
        <EditStudent
          studentId={editStudentId}
          onClose={handleCloseEdit}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default DisplayData;
