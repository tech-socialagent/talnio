import React, { useContext } from 'react';
import styles from '@/styles/RegisterCompany.module.css';
import { CompanyDetailsContext, RegisterStageContext, UserContext } from '../../Context';
import { doc, updateDoc } from 'firebase/firestore';
import db from '../../FirebaseConfig';

const CompanyDetails = () => {
    const { companyDetails, setCompanyDetails } = useContext(CompanyDetailsContext);
    const { setRegisterStage } = useContext(RegisterStageContext);
    const { user } = useContext(UserContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCompanyDetails({
            ...companyDetails,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Update the user's document with company details
            const userRef = doc(db, "users", user.email); // Replace 'user.email' with the actual user identifier
            await updateDoc(userRef, {
                companyDetails: {
                    companyName: companyDetails.companyName || '',
                    companyEmail: companyDetails.companyEmail || '',
                    designation: companyDetails.designation || '',
                    address: companyDetails.address || '',
                    pincode: companyDetails.pincode || '',
                },
            });

            setRegisterStage(' ');
        } catch (e) {
            console.error('Error updating document: ', e);
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <form action="" onSubmit={handleSubmit} className={styles.formWrap}>
            <div className={styles.small}>
                <label htmlFor="companyName">Company Name</label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter your company name"
                    value={companyDetails.companyName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.small}>
                <label htmlFor="companyEmail">Company Email Address</label>
                <input
                    type="text"
                    id="companyEmail"
                    name="companyEmail"
                    placeholder="Enter your company email address"
                    value={companyDetails.companyEmail}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.small}>
                <label htmlFor="designation">Your Designation</label>
                <input
                    type="text"
                    id="designation"
                    name="designation"
                    placeholder="Enter your designation"
                    value={companyDetails.designation}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="address">Address</label>
                <input
                    type="tel"
                    id="address"
                    name="address"
                    placeholder="Enter your address"
                    value={companyDetails.address}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.medium}>
                <label htmlFor="pincode">Pincode</label>
                <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    placeholder="Enter your pincode"
                    value={companyDetails.pincode}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.btnWrap}>
                <input type='submit' value='Next' className={styles.btn} />
            </div>
        </form>
    );
};

export default CompanyDetails;
