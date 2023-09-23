import Header from '@/Components/ResumeBuilder/Header'
import PersonalDetailsForm from '@/Components/ResumeBuilder/PersonalDetailsForm'
import Head from 'next/head'
import WorkExperience from '@/Components/ResumeBuilder/WorkExperience'
import Education from '@/Components/ResumeBuilder/Education'
import Skills from '@/Components/ResumeBuilder/Skills'
import Preview from '@/Components/ResumeBuilder/Preview'
import { useContext, useState } from 'react'
import { EducationContext, ResumeStageContext, PersonalDetailsContext, SkillContext, WorkExperienceContext } from '@/Context'

export default function ResumeBuilder() {
    const { resumeStage } = useContext(ResumeStageContext);

    const [personalDetails, setPersonalDetails] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: '',
        careerHeadline: '',
        city: '',
        state: '',
        pincode: '',
        region: '',
        portfolioLink: '',
    });

    const [educationData, setEducationData] = useState({
        highestEducationLevel: '',
        institutionName: '',
        fieldOfStudy: '',
        degreeEarned: '',
        graduationDate: '',
        gpaOrGrade: '',
        skills: '',
        certifications: '',
    });

    const [workExperienceData, setWorkExperienceData] = useState({
        jobTitle: '',
        companyName: '',
        jobDescription: '',
        startDate: '',
        endDate: '',
    });

    const [skillData, setSkillData] = useState([]); // Create state for skill data

    return (
        <>
            <Head>
                <title>Resume Builder</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main >
                <Header />
                <PersonalDetailsContext.Provider value={{ personalDetails, setPersonalDetails }}>
                    <EducationContext.Provider value={{ educationData, setEducationData }}>
                        <WorkExperienceContext.Provider value={{ workExperienceData, setWorkExperienceData }}>
                            <SkillContext.Provider value={{ skillData, setSkillData }}> 
                                {resumeStage === 'Personal details' ? <PersonalDetailsForm /> : resumeStage === 'Work Experience' ? <WorkExperience /> : resumeStage === 'Education' ? <Education /> : resumeStage === 'Skills' ? <Skills /> : resumeStage === 'Preview' ? <Preview /> : ''}
                            </SkillContext.Provider>
                        </WorkExperienceContext.Provider>
                    </EducationContext.Provider>
                </PersonalDetailsContext.Provider>
            </main>
        </>
    )
}
