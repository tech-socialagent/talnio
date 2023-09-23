import { ResumeStageContext, UserContext } from '@/Context';
import '@/styles/globals.css';
import { useState } from 'react';
import db from '../FirebaseConfig'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App({ Component, pageProps }) {
  const [resumeStage, setResumeStage] = useState('Skills');
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
        <Component {...pageProps} />
      </ResumeStageContext.Provider>
    </UserContext.Provider>
  );
}
