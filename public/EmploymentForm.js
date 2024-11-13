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
  // Initializing all form data fields to avoid validation issues
  const [formData, setFormData] = useState({
    // Provider fields
    providerRegNumber: '',
    ABN: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    
    // Participant fields
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
  
  // Define the order of tabs for navigation
  const tabNames = [
    'ProviderInfo',
    'ParticipantDetails',
    'ReportingDates',
    'SupportProvided',
    'TotalSupportHours',
    'FinalOutcomes',
    'EmploymentDetails',
  ];

  // Sync providerRegNumber to providerID
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      providerID: prevFormData.providerRegNumber,
    }));
  }, [formData.providerRegNumber]);

  // Navigation functions
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

    // Separate data for participants and providers
    const providerData = {
      providerRegNumber: formData.providerRegNumber,
      ABN: formData.ABN,
      contactPerson: formData.contactPerson,
      contactEmail: formData.contactEmail,
      contactPhone: formData.contactPhone,
    };

    const participantData = {
      providerID: formData.providerID,
      stateOrTerritory: formData.stateOrTerritory,
      LGA: formData.LGA,
      surname: formData.surname,
      firstName: formData.firstName,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      NDISParticipantNumber: formData.NDISParticipantNumber,
      primaryDisability: formData.primaryDisability,
      employmentServiceStartDate: formData.employmentServiceStartDate,
      reportingPeriod_periodStart: formData.reportingPeriod_periodStart,
      reportingPeriod_periodEnd: formData.reportingPeriod_periodEnd,
      // All support fields, total hours, final outcomes, and employment details
      supportProvided_Assessment_hoursSpent: formData.supportProvided_Assessment_hoursSpent,
      supportProvided_Planning_and_reviewing_progress_hoursSpent: formData.supportProvided_Planning_and_reviewing_progress_hoursSpent,
      supportProvided_Exploring_employment_options_hoursSpent: formData.supportProvided_Exploring_employment_options_hoursSpent,
      supportProvided_Engagement_with_family_hoursSpent: formData.supportProvided_Engagement_with_family_hoursSpent,
      supportProvided_Engagement_with_professionals_hoursSpent: formData.supportProvided_Engagement_with_professionals_hoursSpent,
      supportProvided_Building_social_skills_progressTowardsMilestone: formData.supportProvided_Building_social_skills_progressTowardsMilestone,
      supportProvided_Building_social_skills_hoursSpent: formData.supportProvided_Building_social_skills_hoursSpent,
      supportProvided_Travel_training_progressTowardsMilestone: formData.supportProvided_Travel_training_progressTowardsMilestone,
      supportProvided_Travel_training_hoursSpent: formData.supportProvided_Travel_training_hoursSpent,
      supportProvided_Work_skill_training_progressTowardsMilestone: formData.supportProvided_Work_skill_training_progressTowardsMilestone,
      supportProvided_Work_skill_training_hoursSpent: formData.supportProvided_Work_skill_training_hoursSpent,
      supportProvided_Employer_engagement_progressTowardsMilestone: formData.supportProvided_Employer_engagement_progressTowardsMilestone,
      supportProvided_Employer_engagement_hoursSpent: formData.supportProvided_Employer_engagement_hoursSpent,
      supportProvided_Work_experience_support_progressTowardsMilestone: formData.supportProvided_Work_experience_support_progressTowardsMilestone,
      supportProvided_Work_experience_support_hoursSpent: formData.supportProvided_Work_experience_support_hoursSpent,
      supportProvided_On_the_job_support_progressTowardsMilestone: formData.supportProvided_On_the_job_support_progressTowardsMilestone,
      supportProvided_On_the_job_support_hoursSpent: formData.supportProvided_On_the_job_support_hoursSpent,
      supportProvided_Other_activity_description: formData.supportProvided_Other_activity_description,
      supportProvided_Other_progressAchieved: formData.supportProvided_Other_progressAchieved,
      supportProvided_Other_hoursSpent: formData.supportProvided_Other_hoursSpent,
      supportProvided_Additional_notes: formData.supportProvided_Additional_notes,
      totalSupportHours_totalHours: formData.totalSupportHours_totalHours,
      totalSupportHours_oneToOnePercentage: formData.totalSupportHours_oneToOnePercentage,
      totalSupportHours_groupBasedPercentage: formData.totalSupportHours_groupBasedPercentage,
      totalSupportHours_distanceOnlinePercentage: formData.totalSupportHours_distanceOnlinePercentage,
      totalSupportHours_totalPercentage: formData.totalSupportHours_totalPercentage,
      finalOutcome_continueSupportNextPeriod: formData.finalOutcome_continueSupportNextPeriod,
      finalOutcome_outcomeAtExit: formData.finalOutcome_outcomeAtExit,
      finalOutcome_exitDate: formData.finalOutcome_exitDate,
      finalOutcome_exitNotes: formData.finalOutcome_exitNotes,
      employmentDetails_status: formData.employmentDetails_status,
      employmentDetails_industry: formData.employmentDetails_industry,
      employmentDetails_employerName: formData.employmentDetails_employerName,
      employmentDetails_averageWeeklyHours: formData.employmentDetails_averageWeeklyHours,
      employmentDetails_usingNDISSupportsInEmployment: formData.employmentDetails_usingNDISSupportsInEmployment,
      employmentDetails_supportedWages: formData.employmentDetails_supportedWages,
      employmentDetails_startDate: formData.employmentDetails_startDate,
      employmentDetails_employmentNotes: formData.employmentDetails_employmentNotes,
    };

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
        return <ProviderInfo formData={formData} setFormData={setFormData} />;
      case 'ParticipantDetails':
        return <ParticipantDetails formData={formData} setFormData={setFormData} />;
      case 'ReportingDates':
        return <ReportingDates formData={formData} setFormData={setFormData} />;
      case 'SupportProvided':
        return <SupportProvided formData={formData} setFormData={setFormData} />;
      case 'TotalSupportHours':
        return <TotalSupportHours formData={formData} setFormData={setFormData} />;
      case 'FinalOutcomes':
        return <FinalOutcomes formData={formData} setFormData={setFormData} />;
      case 'EmploymentDetails':
        return <EmploymentDetails formData={formData} setFormData={setFormData} />;
      default:
        return <ProviderInfo formData={formData} setFormData={setFormData} />;
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

      <div className="tab-content">{renderTabContent()}</div>

      <div className="navigation-buttons">
        {activeTab !== 'ProviderInfo' && (
          <button type="button" onClick={previousTab}>Previous</button>
        )}
        {activeTab !== 'EmploymentDetails' && (
          <button type="button" onClick={nextTab}>Next</button>
        )}
      </div>

      {activeTab === 'EmploymentDetails' && (
        <button type="submit" className="submit-button">Submit</button>
      )}
    </form>
  );
};

export default EmploymentForm;
