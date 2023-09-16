import React from 'react'
import styles from '@/styles/HomePage/HeroSection.module.css'
import Image from 'next/image'
import heroimage from '../../../public/assets/heroSection.png'

const HeroSection = () => {
    return (
        <div className={styles.HeroWrap}>
            <div className={styles.leftContent}>
                <div className={styles.heading}>
                    Unleash Your Potential with Exciting Career Opportunities at <span style={{background: 'var(--primary-color)', color: '#fff', padding: '0px 6px'}} >Talnio.</span>
                </div>
                <div className={styles.subHeading}>
                    Lorem ipsum dolor sit amet consectetur. Mattis fringilla egestas elit sed nisi.
                </div>
                <button className={styles.btn} >Get Started</button>
            </div>
            <div className={styles.rightImage}>
                <Image src={heroimage}  alt='person' className={styles.heroImage} />
            </div>
        </div>
    )
}

export default HeroSection