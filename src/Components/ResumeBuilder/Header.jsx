import React, { useContext } from 'react'
import styles from '@/styles/ResumeBuilder.module.css'
import { ResumeStageContext } from '@/Context';
import { IoIosArrowBack } from 'react-icons/io'

const Header = () => {

    const data = ['Personal details', 'Work  Experience', 'Education', 'Skills', 'Preview'];
    const { resumeStage, setResumeStage } = useContext(ResumeStageContext);

    const handleBackBtn = () => {
        setResumeStage(resumeStage === 'Work  Experience' ? 'Personal details' : resumeStage === 'Education' ? 'Work  Experience' : resumeStage === 'Skills' ? 'Education' : resumeStage === 'Preview' ? 'Skills' : '')
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={styles.sectionWrap}>
            <div className={styles.topSection}>
                <h1>Build Your Resume</h1>
                <p>Our advanced search and matching algorithms ensure you can efficiently find the right candidate for your job openings.</p>
            </div>
            <div className={styles.stagesWrap}>
                {
                    data.map((item, key) => (
                        <div key={key} className={resumeStage === item ? styles.SelectedStage : styles.stage}>{item}</div>
                    ))
                }
            </div>
            <div className={styles.formTitle}>{resumeStage != 'Personal details' ? <IoIosArrowBack onClick={handleBackBtn} style={{ color: 'var(--primary-color)', cursor: 'pointer' }} /> : ''} {resumeStage}</div>
        </div>
    )
}

export default Header