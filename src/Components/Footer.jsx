import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import Link from 'next/link'
import img from '../../public/assets/careerPath.png'

const Footer = () => {

    return (
        <div className={styles.sectionWrap}>
            <div className={styles.imgContent}>
                <Image src={img} alt='image' />
                <h1>More Than a Job, It's a  Career Path.</h1>
            </div>
            <div className={styles.mainFooter}>
                <h5>Discovering the new narratives</h5>
                <h1>Request More Information</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Egestas dictum vitae nisi praesent enim.</p>
                <button>Contact Us</button>
                <div className={styles.rights}>© 2023 Bricstal Group</div>
                <div className={styles.linksWrap}>
                    <Image src={logo} alt='logo' />
                    <Image src={logo} alt='logo' />
                    <div className={styles.pageLinks}>
                        <Link href='/'>Home</Link>
                        <Link href='/'>About us</Link>
                        <Link href='/'>Terms and Conditions</Link>
                        <Link href='/'>Privacy Policy</Link>
                    </div>
                    <div className={styles.socialMedia}>
                            <div className={styles.iconWrap}>
                                
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer