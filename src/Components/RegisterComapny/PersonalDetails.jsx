import React, { useContext } from 'react'
import styles from '@/styles/RegisterCompany.module.css'
import { PersonalDetailsContext, RegisterStageContext, UserContext } from '../../Context';
import { doc, updateDoc } from 'firebase/firestore';
import db from '../../FirebaseConfig'

const PersonalDetails = () => {

    const { personalDetails, setPersonalDetails } = useContext(PersonalDetailsContext)
    const { setRegisterStage } = useContext(RegisterStageContext);
    const { user } = useContext(UserContext);

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
                    companyRep: true || false,
                })
                setRegisterStage('Company Details')
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        };
        userDB();
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <form action="" onSubmit={handleSubmit} className={styles.formWrap} >
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
            <div className={styles.btnWrap}>
                <input type='submit' value='Next' className={styles.btn} />
            </div>
        </form>
    )
}

export default PersonalDetails