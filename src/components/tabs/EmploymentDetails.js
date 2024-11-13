import React from 'react';

const EmploymentDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Employment Details</h3>

      <label htmlFor="employmentDetails_status">Employment Status:</label>
      <input
        type="text"
        id="employmentDetails_status"
        name="employmentDetails_status"
        value={formData.employmentDetails_status}
        onChange={handleChange}
      />

      <label htmlFor="employmentDetails_industry">Industry:</label>
      <input
        type="text"
        id="employmentDetails_industry"
        name="employmentDetails_industry"
        value={formData.employmentDetails_industry}
        onChange={handleChange}
      />

      <label htmlFor="employmentDetails_employerName">Employer Name:</label>
      <input
        type="text"
        id="employmentDetails_employerName"
        name="employmentDetails_employerName"
        value={formData.employmentDetails_employerName}
        onChange={handleChange}
      />

      <label htmlFor="employmentDetails_averageWeeklyHours">Average Weekly Hours:</label>
      <input
        type="number"
        id="employmentDetails_averageWeeklyHours"
        name="employmentDetails_averageWeeklyHours"
        value={formData.employmentDetails_averageWeeklyHours}
        onChange={handleChange}
      />

      <label htmlFor="employmentDetails_usingNDISSupportsInEmployment">Using NDIS Supports in Employment:</label>
      <select
        id="employmentDetails_usingNDISSupportsInEmployment"
        name="employmentDetails_usingNDISSupportsInEmployment"
        value={formData.employmentDetails_usingNDISSupportsInEmployment}
        onChange={handleChange}
      >
        <option value="">Select Option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="employmentDetails_supportedWages">Supported Wages:</label>
      <select
        id="employmentDetails_supportedWages"
        name="employmentDetails_supportedWages"
        value={formData.employmentDetails_supportedWages}
        onChange={handleChange}
      >
        <option value="">Select Option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="employmentDetails_startDate">Employment Start Date:</label>
      <input
        type="date"
        id="employmentDetails_startDate"
        name="employmentDetails_startDate"
        value={formData.employmentDetails_startDate}
        onChange={handleChange}
      />

      <label htmlFor="employmentDetails_employmentNotes">Employment Notes:</label>
      <textarea
        id="employmentDetails_employmentNotes"
        name="employmentDetails_employmentNotes"
        value={formData.employmentDetails_employmentNotes}
        onChange={handleChange}
        rows="4"
      />
    </div>
  );
};

export default EmploymentDetails;
