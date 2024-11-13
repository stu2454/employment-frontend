import React from 'react';

const ProviderInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Provider Information</h3>
      <label>Provider Registration Number:</label>
      <input type="text" name="providerRegNumber" value={formData.providerRegNumber} onChange={handleChange} />
      
      <label>ABN:</label>
      <input type="text" name="ABN" value={formData.ABN} onChange={handleChange} />

      <label>Contact Person:</label>
      <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} />

      <label>Contact Email:</label>
      <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} />

      <label>Contact Phone:</label>
      <input type="tel" name="contactPhone" value={formData.contactPhone} onChange={handleChange} />
    </div>
  );
};

export default ProviderInfo;
