import React, { useContext } from 'react';
import { ResumeStageContext, WorkExperienceContext } from '@/Context';
import styles from '@/styles/ResumeBuilder.module.css';

const WorkExperience = () => {
    const { setResumeStage } = useContext(ResumeStageContext);

    // Use the context for work experience data
    const { workExperienceData, setWorkExperienceData } = useContext(WorkExperienceContext);

    // Handle input changes and update the state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWorkExperienceData({
            ...workExperienceData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setResumeStage('Education'); // Transition to the next stage
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formWrap}>
            <div className={styles.medium}>
                <label htmlFor="jobTitle">Job title</label>
                <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    placeholder="Enter job title"
                    value={workExperienceData.jobTitle}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="companyName">Company name</label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter company name"
                    value={workExperienceData.companyName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.large}>
                <label htmlFor="jobDescription">Job description</label>
                <textarea
                    id="jobDescription"
                    name="jobDescription"
                    placeholder="Enter job description"
                    value={workExperienceData.jobDescription}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="startDate">Start Date</label>
                <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={workExperienceData.startDate}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="endDate">End Date</label>
                <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={workExperienceData.endDate}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.btnWrap}>
                <input type='submit' value='Next' className={styles.btn} />
            </div>
        </form>
    );
}

export default WorkExperience;
