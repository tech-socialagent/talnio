import React, { useState } from 'react'
import styles from '@/styles/Profile.module.css'
import userPlaceholder from '../../../public/assets/user.png'
import Image from 'next/image'
import { FaUserGraduate, FaUniversity } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import img from '../../../public/assets/recruit.png'
import { FaPencilAlt } from 'react-icons/fa'

const Header = ({ userDB }) => {
    const [visibility, setVisibility] = useState(false)

    const candidateData = [
        {
            name: "Adora Jacobs",
            graduate: "Graduate",
            university: "University of Lagos",
            location: "Tokyo"
        },
        {
            name: "Adora Jacobs",
            graduate: "Graduate",
            university: "University of Lagos",
            location: "Tokyo"
        },
        {
            name: "Adora Jacobs",
            graduate: "Graduate",
            university: "University of Lagos",
            location: "Tokyo"
        },
    ]
    return (
        <div className={styles.headSectionWrap}>
            <div className={styles.leftProfile}>
                <Image width={1000} height={1000} className={styles.dp} src={userDB.profilePicture ? userDB.profilePicture : userPlaceholder} alt='profile Pic' />
                <div className={styles.basicInfoWrap}>
                    <div className={styles.name} >{userDB.firstName + " " + userDB.middleName + " " + userDB.lastName} </div>
                    <div className={styles.designation}>UI/UX Designer</div>
                    <div className={styles.eduInfoWrap}>
                        <div className={styles.eduInfo}>
                            <FaUserGraduate className={styles.icon} />
                            <p>graduate</p>
                        </div>
                        <div className={styles.eduInfo}>
                            <FaUniversity className={styles.icon} />
                            <p>university</p>
                        </div>
                        <div className={styles.eduInfo}>
                            <FaLocationDot className={styles.icon} />
                            <p>location</p>
                        </div>
                    </div>
                    <div className={styles.btnsWrap}>
                        <button className={styles.btnWrap}>
                            Edit Profile <div className={styles.icon}> <FaPencilAlt /></div>
                        </button>
                        <button className={styles.btnWrap}>
                            Share Profile <div className={styles.icon}> <FaPencilAlt /></div>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.rightVisibility}>
                Profile Visibility
                <div className={styles.toggleWrap} onClick={()=> setVisibility(!visibility)} >
                    <button>ON</button>
                    <button>OFF</button>
                <div className={visibility ? styles.toggleActive :  styles.toggle}></div>
                </div>
            </div>
        </div>
    )
}

export default Header