import React, { useContext, useState } from 'react';
import { PersonalDetailsContext, ResumeStageContext, UserContext } from '@/Context';
import styles from '@/styles/ResumeBuilder.module.css';
import { updateDoc, setDoc, doc } from "firebase/firestore";
import db from '../../FirebaseConfig'

const PersonalDetailsForm = () => {
    const { setResumeStage } = useContext(ResumeStageContext);
    const { personalDetails, setPersonalDetails } = useContext(PersonalDetailsContext)
    const { user } = useContext(UserContext);

    // Handle input changes and update the state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails({
            ...personalDetails,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const userDB = async () => {
            try {
                //Update Information
                const usersRef = doc(db, "users", user.email);

                await updateDoc(usersRef, {
                    firstName: personalDetails.firstName || '',
                    middleName: personalDetails.middleName || '',
                    lastName: personalDetails.lastName || '',
                    mobileNumber: personalDetails.mobileNumber || '',
                    emailAddress: personalDetails.emailAddress || '',
                    careerHeadline: personalDetails.careerHeadline || '',
                    city: personalDetails.city || '',
                    state: personalDetails.state || '',
                    pincode: personalDetails.pincode || '',
                    region: personalDetails.region || '',
                    portfolioLink: personalDetails.portfolioLink || '',
                })
                setResumeStage('Work Experience')
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        };
        userDB();
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formWrap}>
            <div className={styles.small}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={personalDetails.firstName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.small}>
                <label htmlFor="middleName">Middle Name</label>
                <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    placeholder="Enter your middle name"
                    value={personalDetails.middleName}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.small}>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={personalDetails.lastName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Enter your mobile number"
                    value={personalDetails.mobileNumber}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="emailAddress">Email Address</label>
                <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="Enter your email address"
                    value={personalDetails.emailAddress}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.large}>
                <label htmlFor="careerHeadline">Career Headline</label>
                <input
                    type="text"
                    id="careerHeadline"
                    name="careerHeadline"
                    placeholder="Enter your career headline"
                    value={personalDetails.careerHeadline}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter your city"
                    value={personalDetails.city}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="state">State</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Enter your state"
                    value={personalDetails.state}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="pincode">Pincode</label>
                <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    placeholder="Enter your pincode"
                    value={personalDetails.pincode}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="region">Region</label>
                <input
                    type="text"
                    id="region"
                    name="region"
                    placeholder="Enter your region"
                    value={personalDetails.region}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.large}>
                <label htmlFor="portfolioLink">Website/Portfolio Link</label>
                <input
                    type="url"
                    id="portfolioLink"
                    name="portfolioLink"
                    placeholder="Enter your website/portfolio link"
                    value={personalDetails.portfolioLink}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.btnWrap}>
                <input type='submit' value='Next' className={styles.btn} />
            </div>
        </form>
    );
}

export default PersonalDetailsForm;
