import React from 'react'
import styles from '@/styles/Profile.module.css'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'


const PersonalDetail = ({ userDB }) => {
    return (
        <div className={styles.sectionWrap} id="PersonalDetails">
            <div className="">
                <div className={styles.heading1}>{userDB.firstName + " " + userDB.lastName + ""} </div>
                <div className={styles.subHeading}>{userDB.designation}WEB DEVELOPER</div>
            </div>
            <div className={styles.location}>
                <div className="">INDIA</div>
                <div className={styles.paragraph}>JP Nagar, Bangalore, Karnataka 560021.</div>
            </div>
            <div className={styles.emailPhoneNo}>
                <button><BsTelephoneFill className={styles.emailPhoneIcon} /> +91 9876543219</button>
                <button><IoIosMail className={styles.emailPhoneIcon} /> +91 9876543219</button>
            </div>
            <div style={{marginTop: '40px'}} className={styles.paragraph}>Creative and detail oriented UI/UX designer with 1 Year of experience designing intuitive and visually appealing user interfaces for web and mobile applications. Proficient in User research, wire framing and prototyping. Successfully collaborated with cross-function teams to deliver high quality design solutions that enhance user experience. Skilled in Figma, Adobe Illustrator and Spline. Demonstrated ability to quickly learn and adapt to new technologies and Creative and detail oriented UI/UX designer with 1 Year of experience designing intuitive and visually appealing user interfaces for web and mobile applications. Proficient in User research, wire framing and prototyping. Successfully collaborated with cross-function teams to deliver high quality design solutions that enhance user experience. Skilled in Figma, Adobe Illustrator and Spline. Demonstrated ability to quickly learn and adapt to new technologies and Creative and detail oriented UI/UX designer with 1 Year of experience.</div>
        </div>
    )
}

export default PersonalDetail