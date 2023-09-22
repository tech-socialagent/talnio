import React, { useContext, useState } from 'react';
import { ResumeStageContext, SkillContext } from '@/Context';
import styles from '@/styles/ResumeBuilder.module.css';

const Skills = () => {
    const { setResumeStage } = useContext(ResumeStageContext);
    const { skillData, setSkillData } = useContext(SkillContext);

    const [newSkills, setNewSkills] = useState([
        { id: Date.now(), skill: '', certificate: null },
    ]);

    const addSkillField = () => {
        setNewSkills([...newSkills, { id: Date.now(), skill: '', certificate: null }]);
    };

    const removeSkillField = (id) => {
        // Remove the skill from newSkills
        const updatedNewSkills = newSkills.filter((field) => field.id !== id);
        setNewSkills(updatedNewSkills);

        // Remove the skill from skillData using setSkillData
        const updatedSkillData = skillData.filter((field) => field.id !== id);
        setSkillData(updatedSkillData);
    };

    const handleSkillChange = (id, value) => {
        const updatedNewSkills = newSkills.map((field) =>
            field.id === id ? { ...field, skill: value } : field
        );
        setNewSkills(updatedNewSkills);

        // Update the skill in skillData using setSkillData
        const updatedSkillData = skillData.map((field) =>
            field.id === id ? { ...field, skill: value } : field
        );
        setSkillData(updatedSkillData);
    };

    const handleCertificateChange = (id, file) => {
        const updatedNewSkills = newSkills.map((field) =>
            field.id === id ? { ...field, certificate: file } : field
        );
        setNewSkills(updatedNewSkills);

        // Update the skill in skillData using setSkillData
        const updatedSkillData = skillData.map((field) =>
            field.id === id ? { ...field, certificate: file } : field
        );
        setSkillData(updatedSkillData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Collect the data into a state variable
        const skillData = newSkills.map((field) => ({
            id: field.id, // Include ID in the skill data
            skill: field.skill,
            certificate: field.certificate,
        }));

        // Update the skill data using the setSkillData function
        setSkillData(skillData);

        setResumeStage('Preview');
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formWrap}>
            {/* Display existing skills from skillData */}
            {skillData.map((existingSkill) => (
                <div key={existingSkill.id} className={styles.large}>
                    <label>Skill</label>
                    <input type="text" value={existingSkill.skill} readOnly />
                    <label style={{ marginTop: '20px' }}>Certificate (PDF only)</label>
                    {existingSkill.certificate ? (
                        <p>{existingSkill.certificate.name}</p>
                    ) : (
                        <p>No certificate uploaded</p>
                    )}
                    {/* Include the "Remove" button for existing skills */}
                    <button
                        type="button"
                        onClick={() => removeSkillField(existingSkill.id)}
                        className={styles.removeButton}
                    >
                        Remove
                    </button>
                </div>
            ))}

            {/* Display new skills */}
            {newSkills.map((field) => (
                <div key={field.id} className={styles.large}>
                    <label htmlFor={`skill-${field.id}`}>Skill</label>
                    <input
                        id={`skill-${field.id}`}
                        type="text"
                        placeholder="Writing"
                        value={field.skill}
                        onChange={(e) => handleSkillChange(field.id, e.target.value)}
                    />
                    <label style={{ marginTop: '20px' }} htmlFor={`certificate-${field.id}`}>
                        Certificate (PDF only)
                    </label>
                    <input
                        id={`certificate-${field.id}`}
                        type="file"
                        accept=".pdf"
                        onChange={(e) => handleCertificateChange(field.id, e.target.files[0])}
                    />
                    {/* Include the "Remove" button for new skills */}
                    <button
                        type="button"
                        onClick={() => removeSkillField(field.id)}
                        className={styles.removeButton}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <div className={styles.small}>
                <button type="button" onClick={addSkillField} className={styles.addSkillBtn}>
                    Add Skill
                </button>
            </div>
            <div className={styles.btnWrap}>
                <input type="submit" value="Next" className={styles.btn} />
            </div>
        </form>
    );
};

export default Skills;
