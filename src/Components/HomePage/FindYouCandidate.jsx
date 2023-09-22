import React from 'react'
import styles from '@/styles/HomePage/FindYouCandidate.module.css'
import Image from 'next/image'
import findYouCandidate from '../../../public/assets/findYourCandidate.png'

const FindYouCandidate = () => {
    return (
        <div className={styles.sectionWrap}>
            <div className={styles.imageWrap}>
                <Image src={findYouCandidate} className={styles.img} alt='image' />
            </div>
            <div className={styles.contentWrap}>
                <h2>Find your ideal candidate</h2>
                <p>Our advanced search and matching algorithms ensure you can efficiently find the right candidate for your job openings.</p>
            </div>
        </div>
    )
}

export default FindYouCandidate