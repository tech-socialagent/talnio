import React from 'react'
import styles from '@/styles/HomePage/FindYouCandidate.module.css'
import findYouCandidate from '../../../public/assets/findYouCandidate.png'

const FindYouCandidate = () => {
    return (
        <div className={styles.sectionWrap}>
            <Image src={findYouCandidate} alt='image' />
            <div className={styles.contentWrap}>
                <h2>Find your ideal candidate</h2>
                <p>Our advanced search and matching algorithms ensure you can efficiently find the right candidate for your job openings.</p>
            </div>
        </div>
    )
}

export default FindYouCandidate