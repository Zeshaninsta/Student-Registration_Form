const AcademicInfo = ({ formData, handleInputChange, errors }) => {
  return (
    <div className="max-w-4xl bg-red-500 space-y-4">
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Course of Interest *
        </label>
        <select
          name="courseInterest"
          value={formData.courseInterest}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded-md ${
            errors?.courseInterest ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        >
          <option value="">Select a course</option>
          <option value="engineering">Engineering</option>
          <option value="medicine">Medicine</option>
          <option value="law">Law</option>
          <option value="computer_science">Computer Science</option>
          <option value="business">Business Administration</option>
        </select>
        {errors?.courseInterest && (
          <p className="mt-1 text-sm text-red-500">{errors.courseInterest}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Current Education Level *
        </label>
        <select
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select your level</option>
          <option value="high_school">High School</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
          <option value="masters">Master's Degree</option>
          <option value="doctorate">Doctorate</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Study Mode *
        </label>
        <select
          name="studyMode"
          value={formData.studyMode}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select mode</option>
          <option value="in_person">In Person</option>
          <option value="online">Online</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows="4"
          placeholder="Enter any additional information here..."
        />
      </div>

      <p className="text-sm text-gray-500 mt-4">* Required field</p>
    </div>
  );
};

export default AcademicInfo;
