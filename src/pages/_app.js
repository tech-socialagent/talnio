import { ResumeStageContext, UserContext } from '@/Context';
import '@/styles/globals.css';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [resumeStage, setResumeStage] = useState('Personal details');
  const [user, setUser] = useState([])



  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ResumeStageContext.Provider value={{ resumeStage, setResumeStage }}>
        <Component {...pageProps} />
      </ResumeStageContext.Provider>
    </UserContext.Provider>
  );
}
