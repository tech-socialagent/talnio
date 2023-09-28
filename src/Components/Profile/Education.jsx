import React from 'react'
import styles from '@/styles/Profile.module.css'
import Image from 'next/image'

const Education = ({ userDB }) => {
    return (
        <div className={styles.sectionWrap} id='Education' >
            <div className="">
                <div className={styles.heading1}>Education</div>
            </div>
            <div className={styles.experienceList}>
                <Image className={styles.companyLogo} width={80} height={80} src={userDB.profilePicture} alt="image" />
                <div className={styles.content}>
                    <div className={styles.heading2}>University of texas</div>
                    <div className={styles.subHeading}>UI/UX designer</div>
                    <div className={styles.greyText}>Nov 2022 - Apr 2023</div>
                </div>
            </div>
        </div>
    )
}

export default Education