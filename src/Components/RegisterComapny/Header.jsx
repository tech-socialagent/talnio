import React from 'react'
import styles from '@/styles/RegisterCompany.module.css'
import { MdOutlineDone } from 'react-icons/md'

const Header = () => {
    return (
        <div className={styles.headerWrap}>
            <h1>Register Your Business</h1>
            <div className={styles.stageWap}>
                <div className={styles.firstIconWrap}>
                    <MdOutlineDone className={styles.icon} />
                    <div className={styles.content}>Your Details</div>
                </div>
                <hr className={styles.line} />
                <div className={styles.secondIconWrap}>
                    <MdOutlineDone className={styles.icon} />
                    <div className={styles.content}>Company Details</div>
                </div>
            </div>
            <div className={styles.businessType}>
                <button className={styles.btnActive} >Company/Business</button>
                <button className={styles.btnDisabled}>Individual/Proprietor</button>
            </div>
        </div>
    )
}

export default Header