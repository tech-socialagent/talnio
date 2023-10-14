import React from 'react';
import styles from '@/styles/Landing/Landing.module.css';
import Image from 'next/image';
import logo from '../../../public/assets/logo.png';
import symbol from '../../../public/assets/landing/symbol.png';
import phoneImage from '../../../public/assets/landing/phone.png';
import Link from 'next/link';

const Landing = () => {
    return (
        <div className={styles.pageWrap}>
            <div className={styles.navbar}>
                <Image src={logo} alt='logo' className={styles.navbarLogo} />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>Hello</h1>
                    <Image src={symbol} alt='!!' className={styles.symbol} />
                </div>
                <p>Welcome to Talnio. Are you looking for a job or <br />recruiting talent</p>
                <div className={styles.btnContainer}>
                    <Link href='' >
                        <button className={styles.candidate}>Candidate</button>
                    </Link>
                    <Link href='' >
                        <button className={styles.recruiter}>Recruiter</button>
                    </Link>
                </div>
            </div>
            <Image src={phoneImage} alt='iPhone' className={styles.mainImage} />
        </div>
    )
}

export default Landing;