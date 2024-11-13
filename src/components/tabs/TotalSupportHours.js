import React from 'react';

const TotalSupportHours = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Total Support Hours</h3>

      <label htmlFor="totalSupportHours_totalHours">Total Hours:</label>
      <input
        type="number"
        id="totalSupportHours_totalHours"
        name="totalSupportHours_totalHours"
        value={formData.totalSupportHours_totalHours}
        onChange={handleChange}
      />

      <label htmlFor="totalSupportHours_oneToOnePercentage">One-to-One Percentage:</label>
      <input
        type="number"
        id="totalSupportHours_oneToOnePercentage"
        name="totalSupportHours_oneToOnePercentage"
        value={formData.totalSupportHours_oneToOnePercentage}
        onChange={handleChange}
      />

      <label htmlFor="totalSupportHours_groupBasedPercentage">Group-Based Percentage:</label>
      <input
        type="number"
        id="totalSupportHours_groupBasedPercentage"
        name="totalSupportHours_groupBasedPercentage"
        value={formData.totalSupportHours_groupBasedPercentage}
        onChange={handleChange}
      />

      <label htmlFor="totalSupportHours_distanceOnlinePercentage">Distance/Online Percentage:</label>
      <input
        type="number"
        id="totalSupportHours_distanceOnlinePercentage"
        name="totalSupportHours_distanceOnlinePercentage"
        value={formData.totalSupportHours_distanceOnlinePercentage}
        onChange={handleChange}
      />

      <label htmlFor="totalSupportHours_totalPercentage">Total Percentage:</label>
      <input
        type="number"
        id="totalSupportHours_totalPercentage"
        name="totalSupportHours_totalPercentage"
        value={formData.totalSupportHours_totalPercentage}
        onChange={handleChange}
      />
    </div>
  );
};

export default TotalSupportHours;
