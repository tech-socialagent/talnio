import React from 'react'
import styles from '@/styles//HomePage/SecondSection.module.css'

const SecondSection = () => {

    const data = [
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


            {
                data.map((item, key) => (
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

            {/* <div className={styles.cardWrap}>
                <div className={styles.title}>
                    Early access to opportunities
                </div>
                <div className={styles.desc}>
                    Gain exclusive access to internships and early career opportunities, giving you a head start in your professional journey.
                </div>
            </div>
            <div className={styles.cardWrap}>
                <div className={styles.title}>
                    Early access to opportunities
                </div>
                <div className={styles.desc}>
                    Gain exclusive access to internships and early career opportunities, giving you a head start in your professional journey.
                </div>
            </div>
            <div className={styles.cardWrap}>
                <div className={styles.title}>
                    Early access to opportunities
                </div>
                <div className={styles.desc}>
                    Gain exclusive access to internships and early career opportunities, giving you a head start in your professional journey.
                </div>
            </div> */}
        </div>
    )
}

export default SecondSection