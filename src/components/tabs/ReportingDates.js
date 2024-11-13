import React from 'react';

const ReportingDates = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Reporting Dates</h3>

      <label htmlFor="employmentServiceStartDate">Employment Service Start Date:</label>
      <input
        type="date"
        id="employmentServiceStartDate"
        name="employmentServiceStartDate"
        value={formData.employmentServiceStartDate}
        onChange={handleChange}
      />

      <label htmlFor="reportingPeriod_periodStart">Reporting Period Start Date:</label>
      <input
        type="date"
        id="reportingPeriod_periodStart"
        name="reportingPeriod_periodStart"
        value={formData.reportingPeriod_periodStart}
        onChange={handleChange}
      />

      <label htmlFor="reportingPeriod_periodEnd">Reporting Period End Date:</label>
      <input
        type="date"
        id="reportingPeriod_periodEnd"
        name="reportingPeriod_periodEnd"
        value={formData.reportingPeriod_periodEnd}
        onChange={handleChange}
      />
    </div>
  );
};

export default ReportingDates;
