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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6538688.918011022!2d-129.38946057083675!3d36.849200571761294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1695464189991!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 'none', borderRadius: '10px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default ContactUs
