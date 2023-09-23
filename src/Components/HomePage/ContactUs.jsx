import React from 'react'
import styles from '@/styles/HomePage/ContactUs.module.css'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'


const ContactUs = () => {
    return (
        <div className={styles.sectionWrap}>
            <div className={styles.left}>
                <h3>Contact us</h3>
                <p>We're here to ignite your potential and explore an exciting journey through the realm of professional growth.</p>
                <div className={styles.iconText}>
                    <BsTelephoneFill className={styles.icon} />
                    <a href="">+911234567890</a>
                </div>
                <div className={styles.iconText}>
                    <IoIosMail className={styles.icon} />
                    <a href="">Talio@gmail.com</a>
                </div>
                <div className={styles.iconTextAddress}>
                    <FaLocationDot className={styles.icon} />
                    <a className={styles.address} href="">21/25 Broad Street, Lagos Island, Lagos
                        comms@hireme.net
                    </a>
                </div>
            </div>
            <div className={styles.right}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.695590769052!2d77.6534354!3d12.9126127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156ddcc9e49f%3A0x9dc40c60fec016a0!2sSocial%20Agent!5e0!3m2!1sen!2sin!4v1695021860743!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 'none', borderRadius: '10px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default ContactUs