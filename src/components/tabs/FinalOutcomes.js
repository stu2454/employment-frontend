import React from 'react';

const FinalOutcomes = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Final Outcomes</h3>

      <label htmlFor="finalOutcome_continueSupportNextPeriod">Continue Support Next Period:</label>
      <select
        id="finalOutcome_continueSupportNextPeriod"
        name="finalOutcome_continueSupportNextPeriod"
        value={formData.finalOutcome_continueSupportNextPeriod}
        onChange={handleChange}
      >
        <option value="">Select Option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="finalOutcome_outcomeAtExit">Outcome at Exit:</label>
      <input
        type="text"
        id="finalOutcome_outcomeAtExit"
        name="finalOutcome_outcomeAtExit"
        value={formData.finalOutcome_outcomeAtExit}
        onChange={handleChange}
      />

      <label htmlFor="finalOutcome_exitDate">Exit Date:</label>
      <input
        type="date"
        id="finalOutcome_exitDate"
        name="finalOutcome_exitDate"
        value={formData.finalOutcome_exitDate}
        onChange={handleChange}
      />

      <label htmlFor="finalOutcome_exitNotes">Exit Notes:</label>
      <textarea
        id="finalOutcome_exitNotes"
        name="finalOutcome_exitNotes"
        value={formData.finalOutcome_exitNotes}
        onChange={handleChange}
        rows="4"
      />
    </div>
  );
};

export default FinalOutcomes;
