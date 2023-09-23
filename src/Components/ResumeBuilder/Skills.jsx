import React, { useContext, useState } from 'react';
import { ResumeStageContext, SkillContext, UserContext } from '@/Context';
import styles from '@/styles/ResumeBuilder.module.css';
import { RiAddFill } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { addDoc, updateDoc, doc } from 'firebase/firestore'; // Import Firestore functions
import db from '../../FirebaseConfig'

const Skills = () => {
    const { user } = useContext(UserContext);
    const route = useRouter();
    const [selectedSector, setSelectedSector] = useState('IT'); // Initialize with 'IT' as the default sector
    const [selectedSkills, setSelectedSkills] = useState([]); // State to hold selected skills

    const skillData = [
        {
            sector: 'IT',
            skills: ['Java', 'JavaScript'],
        },
        {
            sector: 'Marketing',
            skills: ['Google Ads', 'Meta Ads', 'Google Analytics'],
        },
        {
            sector: 'Design',
            skills: ['Photoshop', 'Illustrator', 'In-Design', 'Canva'],
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Update the user document in Firestore with the selected skills
            const userDocRef = doc(db, 'users', user.email); // Assuming 'users' is the collection name
            await updateDoc(userDocRef, {
                skills: selectedSkills,
            });
            
            // Redirect to the user's profile page
            route.push(`/profile/${user.email}`);
        } catch (error) {
            console.error('Error updating user document:', error);
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSectorChange = (e) => {
        setSelectedSector(e.target.value);
    };

    const handleSkillButtonClick = (skill) => {
        // Check if the skill is already selected, if not, add it to the selectedSkills array
        if (!selectedSkills.includes(skill)) {
            setSelectedSkills([...selectedSkills, skill]);
        } else {
            // If the skill is already selected, remove it from the selectedSkills array
            setSelectedSkills(selectedSkills.filter((selectedSkill) => selectedSkill !== skill));
        }
    };

    const isSkillSelected = (skill) => {
        // Check if a skill is selected based on whether it's in the selectedSkills array
        return selectedSkills.includes(skill);
    };

    return (
        <div className={styles.skillWrap}>
            <select
                id="sector"
                name="sector"
                className={styles.sector}
                value={selectedSector}
                onChange={handleSectorChange}
            >
                {skillData.map((data) => (
                    <option key={data.sector} value={data.sector}>
                        {data.sector}
                    </option>
                ))}
            </select>
            <div className={styles.skillSelection}>
                {skillData
                    .find((data) => data.sector === selectedSector)
                    .skills.map((skill, index) => (
                        <button
                            key={index}
                            onClick={() => handleSkillButtonClick(skill)}
                            className={isSkillSelected(skill) ? styles.btnSelected : styles.skillBtn}
                        >
                            {skill} <RiAddFill className={styles.addIcon} />
                        </button>
                    ))}
            </div>

            {/* <div className={styles.selectedSkills}>
                <p>Selected Skills:</p>
                <ul>
                    {selectedSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div> */}

            <div className={styles.btnWrap}>
                <button onClick={handleSubmit} className={styles.btn}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Skills;
