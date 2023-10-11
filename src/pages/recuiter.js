import Head from 'next/head'
import React from 'react'
import Header from '@/Components/Header'
import HeroSection from '@/Components/HomePage/HeroSection'
import SecondSection from '@/Components/HomePage/SecondSection'
import { Candidate } from '@/Components/HomePage/Candidate'
import Recruit from '@/Components/HomePage/Recruit'
import FindYouCandidate from '@/Components/HomePage/FindYouCandidate'
import BuildResume from '@/Components/HomePage/BuildResume'
import ContactUs from '@/Components/HomePage/ContactUs'
import Footer from '@/Components/Footer'
import HowItWorks from '@/Components/HomePage/HowItWorks'
import heroimage from '../../public/assets/heroSectionRecuiter.png'


export default function Home() {
    return (
        <>
            <Head>
                <title>Talnio</title>
                <meta name="descriFption" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main >
                <Header />
                <HeroSection
                    heading="Bridge the gap between talented individuals & your opportunities through"
                    subHeading=""
                    btn="Create Account"
                    heroimage={heroimage}
                />
                <SecondSection />
                <HowItWorks />
                <Candidate btn="Upgrade Now" />
                <Recruit />
                <FindYouCandidate />
                <BuildResume />

                {/* temporary */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8% 0' }} >
                    <h1 style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '56px', margin: '0' }}>More Than a Job – It's a Career Path</h1>
                    <div style={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontSize: '22px' }}>Our platform is designed to streamline and simplify your hiring journey, allowing you to recruit with ease.</div>
                </div>
                {/* END */}

                <ContactUs />
                {/* <Footer /> */}
            </main>
        </>
    )
}
