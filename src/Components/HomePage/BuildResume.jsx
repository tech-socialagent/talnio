import React from 'react'
import styles from '@/styles/HomePage/BuildResume.module.css'
import Image from 'next/image'
import laptop from '../../../public/assets/laptop.png'
import { useRouter } from 'next/router'

const BuildResume = () => {
    const route = useRouter();
    return (
        <div className={styles.sectionWrap}>
            <div className={styles.leftContent}>
                <div className={styles.heading}>
                    Profile Builder
                </div>
                <div className={styles.subHeading}>
                    Create a professional and compelling resume that showcases your skills and experiences. Our user-friendly builder guides you through the process, ensuring your resume stands out.
                </div>
                <button onClick={()=> route.push('/resume-builder')} className={styles.btn} >Get Started</button>
            </div>
            <div className={styles.rightImage}>
                <Image src={laptop} alt='image' className={styles.heroImage} loading='eager'/>
            </div>
        </div>
    )
}

export default BuildResume