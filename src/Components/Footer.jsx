import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import bricstal from '../../public/assets/footer/bricstal.png'
import Link from 'next/link'
import img from '../../public/assets/careerPath.png'
import { BiLogoYoutube, BiLogoInstagramAlt, BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {

    return (
        <div className={styles.sectionWrap}>
            <div className={styles.imgContent}>
                <Image src={img} alt='image' className={styles.contentImage} />
                <div className={styles.contentContainer}>
                    <Image src='/assets/footer/vector.png' width={1000} height={1000} className={styles.vectorImage} />
                    <h1>More Than a Job, It's a  Career Path.</h1>
                </div>
            </div>
            <div className={styles.mainFooter}>
                <h5>Discovering the new narratives</h5>
                <h1>Request More Information</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Egestas dictum vitae nisi praesent enim.</p>
                <button>Contact Us</button>
                <div className={styles.rights}>© 2023 Bricstal Group</div>
                <div className={styles.onlyBorder}></div>
                <div className={styles.linksWrap}>
                    <div className={styles.logoContainer}>
                        <Image src={logo} alt='logo' className={styles.talnioLogo} />
                        <Image src={bricstal} alt='logo' className={styles.bricstalLogo} />
                    </div>
                    <div className={styles.pageLinks}>
                        <Link href='/'>Home</Link>
                        <Link href='/'>About us</Link>
                        <Link href='/'>Terms and Conditions</Link>
                        <Link href='/'>Privacy Policy</Link>
                    </div>
                    <div className={styles.socialMedia}>
                        <span><BiLogoLinkedin /></span>
                        <span><BiLogoFacebook /></span>
                        <span><BiLogoInstagramAlt  /></span>
                        <span><BiLogoYoutube ></BiLogoYoutube></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer