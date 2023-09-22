import React, { useContext, useState } from 'react';
import { EducationContext, ResumeStageContext } from '@/Context';
import styles from '@/styles/ResumeBuilder.module.css';

const Education = () => {
    const { setResumeStage } = useContext(ResumeStageContext);
    const { educationData, setEducationData } = useContext(EducationContext)


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEducationData({
            ...educationData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any additional actions, such as validation, before transitioning to the next stage
        setResumeStage('Skills');
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formWrap}>
            <div className={styles.medium}>
                <label htmlFor="highestEducationLevel">Highest Level of Education</label>
                <input
                    type="text"
                    id="highestEducationLevel"
                    name="highestEducationLevel"
                    placeholder='Enter highest level of education'
                    value={educationData.highestEducationLevel}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="institutionName">Name of Educational Institution</label>
                <input
                    type="text"
                    id="institutionName"
                    name="institutionName"
                    placeholder='Enter institution name'
                    value={educationData.institutionName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="fieldOfStudy">Major/Field of Study</label>
                <input
                    type="text"
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    placeholder='Enter major/field of study'
                    value={educationData.fieldOfStudy}
                    onChange={handleInputChange}
                    required
                />
            </div>
            {/* Add similar input fields for the remaining education details */}
            {/* ... */}
            <div className={styles.btnWrap}>
                <input type='submit' value='Next' className={styles.btn} />
            </div>
        </form>
    );
}

export default Education;
