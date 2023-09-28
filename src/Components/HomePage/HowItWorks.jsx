import React from 'react'
import styles from '@/styles/HomePage/HowItWorks.module.css'
import { LuSearchCheck } from 'react-icons/lu'

const HowItWorks = () => {
    return (
        <div className={styles.sectionWrap}>
            <div className={styles.headerSection}>
                <h2>How it works</h2>
                <p>Lorem ipsum</p>
            </div>
            <div className={styles.cardsWrap}>
                <div className={styles.card}>
                    <LuSearchCheck className={styles.icon} />
                    <p>Pre-Verified and Interviewed Talent.</p>
                </div>
                <div className={styles.card}>
                    <LuSearchCheck className={styles.icon} />
                    <p>"Discover Talents Who Align with Your Job Role."
                    </p>
                </div>
                <div className={styles.card}>
                    <LuSearchCheck className={styles.icon} />
                    <p>Onboarding the Ideal Candidate.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks