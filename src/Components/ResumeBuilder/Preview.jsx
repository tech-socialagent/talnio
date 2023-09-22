import React, { useContext } from 'react';
import { PersonalDetailsContext, WorkExperienceContext, EducationContext, SkillContext } from '@/Context';
import styles from '@/styles/ResumeBuilder.module.css';

const Preview = () => {
  const { personalDetails } = useContext(PersonalDetailsContext);
  const { workExperienceData } = useContext(WorkExperienceContext);
  const { educationData } = useContext(EducationContext);
  const { skillData } = useContext(SkillContext);

  return (
    <div>
      <h2>Preview</h2>
      <h3>Personal Details</h3>
      <p><strong>First Name:</strong> {personalDetails.firstName}</p>
      <p><strong>Middle Name:</strong> {personalDetails.middleName}</p>
      <p><strong>Last Name:</strong> {personalDetails.lastName}</p>
      {/* Display other personal details fields here */}

      <h3>Work Experience</h3>
      <p><strong>Job Title:</strong> {workExperienceData.jobTitle}</p>
      <p><strong>Company Name:</strong> {workExperienceData.companyName}</p>
      <p><strong>Job Description:</strong> {workExperienceData.jobDescription}</p>
      {/* Display other work experience fields here */}

      <h3>Education</h3>
      <p><strong>Highest Education Level:</strong> {educationData.highestEducationLevel}</p>
      <p><strong>Institution Name:</strong> {educationData.institutionName}</p>
      <p><strong>Field of Study:</strong> {educationData.fieldOfStudy}</p>
      {/* Display other education fields here */}

      <h3>Skills</h3>
      <ul>
        {skillData.map((skill, index) => (
          <li key={index}>
            <strong>Skill:</strong> {skill.skill}
            <br />
            <strong>Certificate:</strong> {skill.certificate ? skill.certificate.name : 'No certificate uploaded'}
          </li>
        ))}
      </ul>
      <div className={styles.btnWrap}>
        <button className={styles.btn} >Save</button>
      </div>
    </div>
  );
};

export default Preview;
