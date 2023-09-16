import React from 'react'
import styles from '@/styles/HomePage/Candidate.module.css'
import Image from 'next/image'

export const Candidate = () => {

    const data = [
        {
            img: require("../../../public/assets/candidate.png"),
            designation: "UI/UX Designer",
        },
        {
            img: require("../../../public/assets/candidate.png"),
            designation: "UI/UX Designer",
        },
        {
            img: require("../../../public/assets/candidate.png"),
            designation: "UI/UX Designer",
        },
        {
            img: require("../../../public/assets/candidate.png"),
            designation: "UI/UX Designer",
        },

    ]
    const ContentData = [
        {
            title: "Early access to opportunities",
            desc: "Gain exclusive access to internships and early career opportunities, giving you a head start in your professional journey."
        },
        {
            title: "Connect with over 100 top companies",
            desc: "Expand your network and engage with leading companies actively seeking fresh talent."
        },
        {
            title: "Early access to opportunities",
            desc: "Gain exclusive access to internships and early career opportunities, giving you a head start in your professional journey."
        },
        {
            title: "Early access to opportunities",
            desc: "Gain exclusive access to internships and early career opportunities, giving you a head start in your professional journey."
        },
    ]


    return (
        <div className={styles.sectionWrap}>
            <div className={styles.headerSection}>
                <h2>Candidate</h2>
                <p>Lorem ipsum</p>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    {
                        data.map((item, key) => (
                            <div className={styles.cardWrap} key={key} >
                                <Image width={1000} height={1000} src={item.img} className={styles.image} alt='image' />
                                <div className={styles.designation}>{item.designation}</div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.right}>
                    {
                        ContentData.map((item, key) => (
                            <div key={key} className={styles.cardWrap}>
                                <div className={styles.title}>
                                    {item.title}
                                </div>
                                <div className={styles.desc}>
                                    {item.desc}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
