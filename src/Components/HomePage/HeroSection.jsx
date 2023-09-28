import React from 'react'
import styles from '@/styles/HomePage/HeroSection.module.css'
import Image from 'next/image'

import { useRouter } from 'next/router'

const HeroSection = ({ heading, subHeading, btn, heroimage }) => {
    const route = useRouter();
    return (
        <div className={styles.HeroWrap}>
            <div className={styles.leftContent}>
                <div className={styles.heading}>
                   {heading} <span style={{ background: 'var(--primary-color)', color: '#fff', padding: '0px 6px' }} >Talnio.</span>
                </div>
                <div className={styles.subHeading}>
                    {subHeading}
                </div>
                <button onClick={() => route.push('/sign-up')} className={styles.btn} >{btn}</button>
            </div>
            <div className={styles.rightImage}>
                <Image src={heroimage} alt='person' className={styles.heroImage} loading='eager' />
            </div>
        </div>
    )
}

export default HeroSection