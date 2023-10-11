import { RegisterStageContext, ResumeStageContext, UserContext } from '@/Context';
import '@/styles/globals.css';
import { useState } from 'react';
import db from '../FirebaseConfig'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App({ Component, pageProps }) {
  const [resumeStage, setResumeStage] = useState('Personal details');
  const [registerStage, setRegisterStage] = useState('Personal Details');
  const [user, setUser] = useState([])


  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      // User is signed out
      // ...
    }
  });


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ResumeStageContext.Provider value={{ resumeStage, setResumeStage }}>
        <RegisterStageContext.Provider value={{ registerStage, setRegisterStage }}>
          <Component {...pageProps} />
        </RegisterStageContext.Provider>
      </ResumeStageContext.Provider>
    </UserContext.Provider>
  );
}
