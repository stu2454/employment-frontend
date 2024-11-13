import React from 'react';

const SupportProvided = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Support Provided</h3>
      <div className="support-provided-columns">
        {/* Column 1 */}
        <div className="column">
          {/* Building Social Skills */}
          <label htmlFor="supportProvided_Building_social_skills_progressTowardsMilestone">Building Social Skills - Progress Towards Milestone:</label>
          <input
            type="text"
            id="supportProvided_Building_social_skills_progressTowardsMilestone"
            name="supportProvided_Building_social_skills_progressTowardsMilestone"
            value={formData.supportProvided_Building_social_skills_progressTowardsMilestone}
            onChange={handleChange}
          />
          <label htmlFor="supportProvided_Building_social_skills_hoursSpent">Building Social Skills - Hours Spent:</label>
          <input
            type="number"
            id="supportProvided_Building_social_skills_hoursSpent"
            name="supportProvided_Building_social_skills_hoursSpent"
            value={formData.supportProvided_Building_social_skills_hoursSpent}
            onChange={handleChange}
          />

          {/* Travel Training */}
          <label htmlFor="supportProvided_Travel_training_progressTowardsMilestone">Travel Training - Progress Towards Milestone:</label>
          <input
            type="text"
            id="supportProvided_Travel_training_progressTowardsMilestone"
            name="supportProvided_Travel_training_progressTowardsMilestone"
            value={formData.supportProvided_Travel_training_progressTowardsMilestone}
            onChange={handleChange}
          />
          <label htmlFor="supportProvided_Travel_training_hoursSpent">Travel Training - Hours Spent:</label>
          <input
            type="number"
            id="supportProvided_Travel_training_hoursSpent"
            name="supportProvided_Travel_training_hoursSpent"
            value={formData.supportProvided_Travel_training_hoursSpent}
            onChange={handleChange}
          />

          {/* Work Skill Training */}
          <label htmlFor="supportProvided_Work_skill_training_progressTowardsMilestone">Work Skill Training - Progress Towards Milestone:</label>
          <input
            type="text"
            id="supportProvided_Work_skill_training_progressTowardsMilestone"
            name="supportProvided_Work_skill_training_progressTowardsMilestone"
            value={formData.supportProvided_Work_skill_training_progressTowardsMilestone}
            onChange={handleChange}
          />
          <label htmlFor="supportProvided_Work_skill_training_hoursSpent">Work Skill Training - Hours Spent:</label>
          <input
            type="number"
            id="supportProvided_Work_skill_training_hoursSpent"
            name="supportProvided_Work_skill_training_hoursSpent"
            value={formData.supportProvided_Work_skill_training_hoursSpent}
            onChange={handleChange}
          />
        </div>

        {/* Column 2 */}
        <div className="column">
          {/* Employer Engagement */}
          <label htmlFor="supportProvided_Employer_engagement_progressTowardsMilestone">Employer Engagement - Progress Towards Milestone:</label>
          <input
            type="text"
            id="supportProvided_Employer_engagement_progressTowardsMilestone"
            name="supportProvided_Employer_engagement_progressTowardsMilestone"
            value={formData.supportProvided_Employer_engagement_progressTowardsMilestone}
            onChange={handleChange}
          />
          <label htmlFor="supportProvided_Employer_engagement_hoursSpent">Employer Engagement - Hours Spent:</label>
          <input
            type="number"
            id="supportProvided_Employer_engagement_hoursSpent"
            name="supportProvided_Employer_engagement_hoursSpent"
            value={formData.supportProvided_Employer_engagement_hoursSpent}
            onChange={handleChange}
          />

          {/* Work Experience Support */}
          <label htmlFor="supportProvided_Work_experience_support_progressTowardsMilestone">Work Experience Support - Progress Towards Milestone:</label>
          <input
            type="text"
            id="supportProvided_Work_experience_support_progressTowardsMilestone"
            name="supportProvided_Work_experience_support_progressTowardsMilestone"
            value={formData.supportProvided_Work_experience_support_progressTowardsMilestone}
            onChange={handleChange}
          />
          <label htmlFor="supportProvided_Work_experience_support_hoursSpent">Work Experience Support - Hours Spent:</label>
          <input
            type="number"
            id="supportProvided_Work_experience_support_hoursSpent"
            name="supportProvided_Work_experience_support_hoursSpent"
            value={formData.supportProvided_Work_experience_support_hoursSpent}
            onChange={handleChange}
          />

          {/* On the Job Support */}
          <label htmlFor="supportProvided_On_the_job_support_progressTowardsMilestone">On the Job Support - Progress Towards Milestone:</label>
          <input
            type="text"
            id="supportProvided_On_the_job_support_progressTowardsMilestone"
            name="supportProvided_On_the_job_support_progressTowardsMilestone"
            value={formData.supportProvided_On_the_job_support_progressTowardsMilestone}
            onChange={handleChange}
          />
          <label htmlFor="supportProvided_On_the_job_support_hoursSpent">On the Job Support - Hours Spent:</label>
          <input
            type="number"
            id="supportProvided_On_the_job_support_hoursSpent"
            name="supportProvided_On_the_job_support_hoursSpent"
            value={formData.supportProvided_On_the_job_support_hoursSpent}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SupportProvided;
