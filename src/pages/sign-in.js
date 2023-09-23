import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/SignIn.module.css';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import db from '../FirebaseConfig'
import img from '../../public/assets/signUp.png'
import { useRouter } from 'next/router';


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const handleGoogleSignIn = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        router.push(`/profile/${user.email}`)
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

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        router.push(`/profile/${user.email}`)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", error);
      });
  };


  return (
    <div className={styles.sectionWrap}>
      <div className={styles.left}>
        <Image className={styles.img} src={img} alt='image' loading='eager' />
      </div>
      <div className={styles.right}>
        <h1>Sign up to Talnio.</h1>
        <div className={styles.googleSignInWrap} onClick={handleGoogleSignIn} >
          <FcGoogle className={styles.icon} />
          <p>Sign up with Google</p>
        </div>
        <hr className={styles.or} />

        <div className={styles.emailOptSelected}>
          <div className={styles.backBtn}></div>
          <form onSubmit={handleEmailSignIn}>
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
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={styles.createBtnWrap}>
              <input type="submit" required value="Sign In" />
            </div>
            <div className={styles.singInWrap}>
              <p>
                Don't have an account?{' '}
                <Link className={styles.link} href="/sign-up">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
