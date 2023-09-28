import React from 'react'
import styles from '@/styles/Profile.module.css'

const Skills = ({ userDB }) => {
    return (
        <div className={styles.sectionWrap} id='Skills' >
            <div className="">
                <div className={styles.heading1}>Skills</div>
            </div>
            <ul className={styles.skillsList}>
                <li>UI/UX Designing</li>
                <li>Prototyping</li>
                <li>User Research</li>
                <li>User Experience</li>
            </ul>
            <div style={{ marginTop: "40px" }}>
                <div className={styles.heading1}>Certificatations</div>
                <div className={styles.certifications}>
                    <div className={styles.paragraph}>Foundations of User Experience (UX) Design<br></br> Coursera</div>
                    <div className={styles.greyText}>Issued Apr 2023</div>
                </div>
            </div>
        </div>
    )
}

export default Skills