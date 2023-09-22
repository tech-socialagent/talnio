import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import Link from 'next/link'

const Footer = () => {

    const data = [
        {
            title: 'Our Products',
            links: [{
                name: "For Employers",
                url: '#'
            },
            {
                name: "For Candidates",
                url: '#'
            }]
        },
        {
            title: 'Our Company',
            links: [
                {
                    name: "About Us",
                    url: '#'
                },
                {
                    name: "Careers",
                    url: '#'
                },
                {
                    name: "Terms & Conditions",
                    url: '#'
                },
                {
                    name: "Privacy policy",
                    url: '#'
                },
            ]
        },
        {
            title: 'Resources',
            links: [{
                name: "Blog",
                url: '#'
            }]
        },
        {
            title: 'Support',
            links: [{
                name: "FAQs",
                url: '#'
            },
            {
                name: "Contact Us",
                url: '#'
            }]
        },

    ]

    return (
        <div className={styles.sectionWrap}>
            <div className={styles.logoWrap}>
                <Image src={logo} alt='logo' className={styles.logo} />
            </div>
            <div className={styles.contentWrap}>
                {
                    data.map((item, key) => (
                        <div className={styles.content} key={key}>
                            <div className={styles.title}>
                                {item.title}
                            </div>
                            <div className={styles.linksWrap}>
                                {
                                    item.links.map((subItem, key) => (
                                        <Link key={key} className={styles.link} href={subItem.url} >{subItem.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer