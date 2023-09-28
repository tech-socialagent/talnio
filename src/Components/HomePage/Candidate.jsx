import React from 'react'
import styles from '@/styles/HomePage/Candidate.module.css'
import Image from 'next/image'

export const Candidate = ({btn}) => {

    const data = [
        {
            img: require("../../../public/assets/candidate.png"),
            designation: "UI/UX Designer",
        },
        {
            img: require("../../../public/assets/candidate.png"),
            designation: "Web Developer",
        },
        {
            img: require("../../../public/assets/candidate.png"),
            designation: "Graphic Designer",
        },
        {
            img: require("../../../public/assets/candidate.png"),
            designation: "Marketing Specialist",
        },

    ]
    const ContentData = [
        {
            title: "Pre-screened Excellence",
            desc: " Our candidates have already cleared rigorous interviews, ensuring top-notch skills."
        },
        {
            title: "Proven Professionals",
            desc: "Meet individuals who have showcased their expertise and passion during our selection process."
        },
        {
            title: "Ready to Contribute",
            desc: "Our candidates are capable of making a meaningful impact in their respective roles."
        },
        {
            title: "Diverse Skill Sets",
            desc: "From creative minds to technical wizards, Our team boasts a wide range of talents."
        },
    ]


    return (
        <div className={styles.sectionWrap}>
            <div className={styles.headerSection}>
                <h2>Highly Skilled Candidates</h2>
                <p>Exceptionally capable candidates with top-tier skills and qualifications.</p>
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
                    {btn ? <button onClick={() => route.push('/sign-up')} className={styles.btn} >{btn}</button> : ''}
                </div>
            </div>
        </div>
    )
}
