import React from 'react'
import styles from '@/styles/Profile.module.css'
import Image from 'next/image'

const WorkExperience = ({ userDB }) => {
    return (
        <div className={styles.sectionWrap} id='WorkExperience' >
            <div className="">
                <div className={styles.heading1}>Work Experience</div>
            </div>
            <div className={styles.experienceList}>
                <Image className={styles.companyLogo} width={80} height={80} src={userDB.profilePicture} alt="image" />
                <div className={styles.content}>
                    <div className={styles.heading2}>UI/UX designer</div>
                    <div className={styles.subHeading}>Company name </div>
                    <div className={styles.greyText}>Nov 2022 - Apr 2023</div>
                    <div className={styles.greyText}>Bangalore, Karnataka, INDIA</div>
                    <div className={styles.paragraph}><b>JOB ROLE:</b> Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience