import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import tab components
import ProviderInfo from './tabs/ProviderInfo';
import ParticipantDetails from './tabs/ParticipantDetails';
import ReportingDates from './tabs/ReportingDates';
import SupportProvided from './tabs/SupportProvided';
import TotalSupportHours from './tabs/TotalSupportHours';
import FinalOutcomes from './tabs/FinalOutcomes';
import EmploymentDetails from './tabs/EmploymentDetails';

import './css/EmploymentForm.css';

const EmploymentForm = () => {
  const [formData, setFormData] = useState({
    providerRegNumber: '',
    ABN: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    providerID: '',
    stateOrTerritory: '',
    LGA: '',
    surname: '',
    firstName: '',
    dateOfBirth: '',
    gender: '',
    NDISParticipantNumber: '',
    primaryDisability: '',
    employmentServiceStartDate: '',
    reportingPeriod_periodStart: '',
    reportingPeriod_periodEnd: '',
    supportProvided_Assessment_hoursSpent: 0,
    supportProvided_Planning_and_reviewing_progress_hoursSpent: 0,
    supportProvided_Exploring_employment_options_hoursSpent: 0,
    supportProvided_Engagement_with_family_hoursSpent: 0,
    supportProvided_Engagement_with_professionals_hoursSpent: 0,
    supportProvided_Building_social_skills_progressTowardsMilestone: '',
    supportProvided_Building_social_skills_hoursSpent: 0,
    supportProvided_Travel_training_progressTowardsMilestone: '',
    supportProvided_Travel_training_hoursSpent: 0,
    supportProvided_Work_skill_training_progressTowardsMilestone: '',
    supportProvided_Work_skill_training_hoursSpent: 0,
    supportProvided_Employer_engagement_progressTowardsMilestone: '',
    supportProvided_Employer_engagement_hoursSpent: 0,
    supportProvided_Work_experience_support_progressTowardsMilestone: '',
    supportProvided_Work_experience_support_hoursSpent: 0,
    supportProvided_On_the_job_support_progressTowardsMilestone: '',
    supportProvided_On_the_job_support_hoursSpent: 0,
    supportProvided_Other_activity_description: '',
    supportProvided_Other_progressAchieved: '',
    supportProvided_Other_hoursSpent: 0,
    supportProvided_Additional_notes: '',
    totalSupportHours_totalHours: 0,
    totalSupportHours_oneToOnePercentage: 0,
    totalSupportHours_groupBasedPercentage: 0,
    totalSupportHours_distanceOnlinePercentage: 0,
    totalSupportHours_totalPercentage: 0,
    finalOutcome_continueSupportNextPeriod: '',
    finalOutcome_outcomeAtExit: '',
    finalOutcome_exitDate: '',
    finalOutcome_exitNotes: '',
    employmentDetails_status: '',
    employmentDetails_industry: '',
    employmentDetails_employerName: '',
    employmentDetails_averageWeeklyHours: 0,
    employmentDetails_usingNDISSupportsInEmployment: '',
    employmentDetails_supportedWages: '',
    employmentDetails_startDate: '',
    employmentDetails_employmentNotes: ''
  });

  const [activeTab, setActiveTab] = useState('ProviderInfo');

  // Automatically update providerID with providerRegNumber when it changes
  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      providerID: prevData.providerRegNumber
    }));
  }, [formData.providerRegNumber]);

  const tabNames = [
    'ProviderInfo',
    'ParticipantDetails',
    'ReportingDates',
    'SupportProvided',
    'TotalSupportHours',
    'FinalOutcomes',
    'EmploymentDetails',
  ];

  const nextTab = () => {
    const currentIndex = tabNames.indexOf(activeTab);
    if (currentIndex < tabNames.length - 1) {
      setActiveTab(tabNames[currentIndex + 1]);
    }
  };

  const previousTab = () => {
    const currentIndex = tabNames.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabNames[currentIndex - 1]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const providerData = {
      providerRegNumber: formData.providerRegNumber,
      ABN: formData.ABN,
      contactPerson: formData.contactPerson,
      contactEmail: formData.contactEmail,
      contactPhone: formData.contactPhone,
    };

    const participantData = { ...formData };

    try {
      await axios.post('http://localhost:5001/api/providers', providerData);
      await axios.post('http://localhost:5001/api/participants', participantData);
      alert('Data submitted successfully');
    } catch (error) {
      console.error('There was an error submitting the data:', error);
      alert('There was an error submitting the data.');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ProviderInfo':
        return (
          <div className="tab-content single-column">
            <ProviderInfo formData={formData} setFormData={setFormData} />
          </div>
        );
      case 'ParticipantDetails':
        return (
          <div className="tab-content single-column">
            <ParticipantDetails formData={formData} setFormData={setFormData} />
          </div>
        );
      case 'ReportingDates':
        return (
          <div className="tab-content single-column">
            <ReportingDates formData={formData} setFormData={setFormData} />
          </div>
        );
      case 'SupportProvided':
        return (
          <div className="tab-content support-provided-columns">
            <SupportProvided formData={formData} setFormData={setFormData} />
          </div>
        );
      case 'TotalSupportHours':
        return (
          <div className="tab-content single-column">
            <TotalSupportHours formData={formData} setFormData={setFormData} />
          </div>
        );
      case 'FinalOutcomes':
        return (
          <div className="tab-content single-column">
            <FinalOutcomes formData={formData} setFormData={setFormData} />
          </div>
        );
      case 'EmploymentDetails':
        return (
          <div className="tab-content single-column">
            <EmploymentDetails formData={formData} setFormData={setFormData} />
          </div>
        );
      default:
        return (
          <div className="tab-content single-column">
            <ProviderInfo formData={formData} setFormData={setFormData} />
          </div>
        );
    }
  };

  const progressPercentage = ((tabNames.indexOf(activeTab) + 1) / tabNames.length) * 100;

  return (
    <form onSubmit={handleSubmit}>
      <div className="tabs">
        {tabNames.map((tab, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'active' : ''}
          >
            {tab.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      {renderTabContent()}

      <div className="navigation-buttons">
        {activeTab !== 'ProviderInfo' && (
          <button type="button" onClick={previousTab}>Previous</button>
        )}
        {activeTab !== 'EmploymentDetails' && (
          <button type="button" onClick={nextTab}>Next</button>
        )}
      </div>

      {activeTab === 'EmploymentDetails' && (
        <div className="submit-container">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      )}
    </form>
  );
};

export default EmploymentForm;
