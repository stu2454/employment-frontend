import React from 'react';

const ParticipantDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Participant Details</h3>

      {/* Provider ID */}
      <label htmlFor="providerID">Provider ID:</label>
      <input
        type="text"
        id="providerID"
        name="providerID"
        value={formData.providerID}
        onChange={handleChange}
      />

      {/* State or Territory Dropdown */}
      <label htmlFor="stateOrTerritory">State or Territory:</label>
      <select
        id="stateOrTerritory"
        name="stateOrTerritory"
        value={formData.stateOrTerritory}
        onChange={handleChange}
      >
        <option value="">--Select a State/Territory--</option>
        <option value="NSW">New South Wales</option>
        <option value="VIC">Victoria</option>
        <option value="QLD">Queensland</option>
        <option value="SA">South Australia</option>
        <option value="WA">Western Australia</option>
        <option value="TAS">Tasmania</option>
        <option value="ACT">Australian Capital Territory</option>
        <option value="NT">Northern Territory</option>
      </select>

      {/* Other participant details */}
      <label htmlFor="LGA">LGA:</label>
      <input
        type="text"
        id="LGA"
        name="LGA"
        value={formData.LGA}
        onChange={handleChange}
      />

      <label htmlFor="surname">Surname:</label>
      <input
        type="text"
        id="surname"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
      />

      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <label htmlFor="dateOfBirth">Date of Birth:</label>
      <input
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
      />

      <label htmlFor="gender">Gender:</label>
      <input
        type="text"
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      />

      <label htmlFor="NDISParticipantNumber">NDIS Participant Number:</label>
      <input
        type="text"
        id="NDISParticipantNumber"
        name="NDISParticipantNumber"
        value={formData.NDISParticipantNumber}
        onChange={handleChange}
      />

      <label htmlFor="primaryDisability">Primary Disability:</label>
      <input
        type="text"
        id="primaryDisability"
        name="primaryDisability"
        value={formData.primaryDisability}
        onChange={handleChange}
      />
      
      <label htmlFor="employmentServiceStartDate">Employment Service Start Date:</label>
      <input
        type="date"
        id="employmentServiceStartDate"
        name="employmentServiceStartDate"
        value={formData.employmentServiceStartDate}
        onChange={handleChange}
      />
    </div>
  );
};

export default ParticipantDetails;
