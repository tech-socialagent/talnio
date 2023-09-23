import React from 'react'
import Image from 'next/image'
import styles from '@/styles/HomePage/Recruit.module.css'
import img from '../../../public/assets/recruit.png'
import { BsBookmark } from 'react-icons/bs'
import { FaUserGraduate, FaUniversity } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'


const Recruit = () => {

    const candidateData = [
        {
            name: "Adora Jacobs",
            // graduate: "Graduate",
            // university: "University of Lagos",
            // location: "Tokyo"
        },
        {
            name: "Adora Jacobs",
            // graduate: "Graduate",
            // university: "University of Lagos",
            // location: "Tokyo"
        },
        {
            name: "Adora Jacobs",
            // graduate: "Graduate",
            // university: "University of Lagos",
            // location: "Tokyo"
        },
    ]

    return (
        <div className={styles.sectionWrap}>
            <div className={styles.headerSection}>
                <h2>Recruit with Ease</h2>
                <p>Lorem ipsum</p>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    <h2>most qualified candidates</h2>
                    <p>Our platform allows you to identify talent with <br></br>the right skills and cultural fit.</p>
                    <button className={styles.btn} >Get Started</button>
                </div>
                <div className={styles.right}>
                    <div className={styles.CardsWrap}>

                        {
                            candidateData.map((item, key) => (
                                <div className={styles.card} key={key} >
                                     <div style={{ display: 'flex', alignItems: 'center', width: '50%' }}>
                                        <Image src={img} alt='image' className={styles.profileImg} />
                                        <div className={styles.info}>
                                            <div className={styles.name} >{item.name}</div>
                                            <div className={styles.eduInfoWrap}>
                                                <div className={styles.eduInfo}>
                                                    <FaUserGraduate className={styles.icon} />
                                                    <p>{item.graduate}</p>
                                                </div>
                                                <div className={styles.eduInfo}>
                                                    <FaUniversity className={styles.icon} />
                                                    <p>{item.university}</p>
                                                </div>
                                                <div className={styles.eduInfo}>
                                                    <FaLocationDot className={styles.icon} />
                                                    <p>{item.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.buttonWrap}>
                                        <button className={styles.applicationBtn}>View Application</button>
                                        <BsBookmark className={styles.bookmark} />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recruit