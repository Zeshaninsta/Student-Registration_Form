const BasicInfo = ({ formData, handleInputChange, errors }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded-md ${
            errors?.fullName ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors?.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age *
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors?.age ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors?.age && (
            <p className="mt-1 text-sm text-red-500">{errors.age}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender *
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors?.gender ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors?.gender && (
            <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
