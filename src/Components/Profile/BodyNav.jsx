import React, { useContext, useEffect, useState } from 'react';
import styles from '@/styles/Profile.module.css';
import { ProfileNavContext } from '@/Context';
import { useRouter } from 'next/router';

const BodyNav = () => {
  const { profileNav, setProfileNav } = useContext(ProfileNavContext);
  const router = useRouter();

  const handleNav = (data) => {
    setProfileNav(data);
    router.push(`/profile/pavan@socialagent.in/#${data}`);
  };
  useEffect(() => {
    if(profileNav === ""){
      router.push('/profile/pavan@socialagent.in/')
    }
  }, [])

  return (
    <div className={styles.bodyNavWrap}>
      <div
        className={profileNav === "PersonalDetails" ? styles.navitemActive : styles.navitem}
        onClick={() => handleNav("PersonalDetails")} // Wrap in arrow function
      >
        Personal Details
      </div>
      <div
        className={profileNav === "WorkExperience" ? styles.navitemActive : styles.navitem}
        onClick={() => handleNav("WorkExperience")} // Wrap in arrow function
      >
        Work Experience
      </div>
      <div
        className={profileNav === "Education" ? styles.navitemActive : styles.navitem}
        onClick={() => handleNav("Education")} // Wrap in arrow function
      >
        Education
      </div>
      <div
        className={profileNav === "Skills" ? styles.navitemActive : styles.navitem}
        onClick={() => handleNav("Skills")} // Wrap in arrow function
      >
        Skills
      </div>
    </div>
  );
};

export default BodyNav;
