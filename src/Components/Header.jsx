import React from 'react'
import styles from '@/styles/Header.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'

const Header = () => {
  return (
    <div className={styles.headerWrap}>
        <Image src={logo} alt='logo'  className={styles.logo} />
    </div>
  )
}

export default Header