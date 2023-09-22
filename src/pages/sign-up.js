import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/SignIn.module.css';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import db from '../FirebaseConfig'
import img from '../../public/assets/signUp.jpg'
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import Head from 'next/head';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from 'next/router';



const SignUp = () => {

    const [signUpOpt, setSignUpOpt] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleGoogleSignUp = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const user = result.user;
                const profilePicture = user.photoURL;

                // Upload the profile picture to Firebase Storage
                const storage = getStorage();
                const storageRef = ref(storage, `profilePictures/${user.email}`);
                await uploadBytes(storageRef, user.photoURL);

                // Get the download URL of the uploaded image
                const downloadURL = await getDownloadURL(storageRef);

                // Now, you can add the user data to Firestore with the download URL
                const userDB = async () => {
                    try {
                        // Specify the Firestore collection name ('users') and use user's UID as the document ID
                        const docRef = await setDoc(doc(db, 'users', user.email), {
                            firstName: user.displayName,
                            email: user.email,
                            creationTime: user.metadata.creationTime,
                            profilePicture: profilePicture,
                            uid: user.uid,
                        });
                        router.push(`/profile/${user.email}`)
                    } catch (e) {
                        console.error('Error adding document: ', e);
                    }
                };
                userDB();
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error", error);
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const handleEmailSignUp = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };


    return (
        <>
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.sectionWrap}>
                <div className={styles.left}>
                    <Image className={styles.img} src={img} alt='image' loading='eager' />
                </div>
                <div className={styles.right}>
                    {
                        signUpOpt != 'email' ?


                            <div className={styles.signUpOpt}>
                                <h1>Sign up to Talnio.</h1>
                                <div className={styles.googleSignUpWrap} onClick={handleGoogleSignUp} >
                                    <FcGoogle className={styles.icon} />
                                    <p>Sign up with Google</p>
                                </div>
                                <hr className={styles.or} />

                                <div className={styles.emailSignUpWrap} onClick={() => setSignUpOpt('email')} >
                                    <MdEmail className={styles.icon} />
                                    <p>Continue with email</p>
                                </div>
                                <div className={styles.privacyPolicyWrap}>
                                    <p>By creating an account you agree with our <Link className={styles.link} href='/'>Terms of Service</Link>, <Link className={styles.link} href='/'>Privacy Policy</Link>, and our default Notification Settings.</p>
                                </div>
                                <div className={styles.singInWrap}>
                                    <p>Already have an account? <Link className={styles.link} href='/sign-in'>Sign In</Link> </p>
                                </div>
                            </div>

                            :

                            // handleEmailSignUp

                            <div className={styles.emailOptSelected}>
                                <div className={styles.backBtn}></div>
                                <form onSubmit={handleEmailSignUp}>
                                    <h1>Sign up to Talnio.</h1>
                                    <div className={styles.inputWrap}>
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.inputWrap}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.inputWrap}>
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="6+ characters"
                                            value={password}
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.privacyPolicyWrap}>
                                        <input required type="checkbox" id="" />
                                        <p>
                                            By creating an account you agree with our{' '}
                                            <Link className={styles.link} href="/">
                                                Terms of Service
                                            </Link>
                                            ,{' '}
                                            <Link className={styles.link} href="/">
                                                Privacy Policy
                                            </Link>
                                            , and our default Notification Settings.
                                        </p>
                                    </div>
                                    <div className={styles.createBtnWrap}>
                                        <input type="submit" required value="Create Account" />
                                    </div>
                                    <div className={styles.singInWrap}>
                                        <p>
                                            Already have an account?{' '}
                                            <Link className={styles.link} href="/sign-in">
                                                Sign In
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                    }
                </div>
            </div>
        </>
    );
};

export default SignUp;
