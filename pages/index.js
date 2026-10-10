import React from "react";
import Head from "next/head";
import HomeContent from "./HomeContent";
import Aboutme from "./aboutme";
import Experience from "./Experience";
import Technicalskills from "./Technicalskills";
import Whatioffer from "./Whatioffer";
import Project from "./Project";
import Education from "./Education";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anu Antony | Software Programmer &amp; React.js Developer</title>
        <meta
          name="description"
          content="Portfolio of Anu Antony, a Software Programmer and React.js Developer with 4+ years of experience building responsive web applications, enterprise ERP student portals (35,000+ users), Capacitor mobile apps, and payment gateway workflows."
        />
        <meta name="keywords" content="Anu Antony, React Developer, Software Programmer, Frontend Engineer, Next.js, Redux, Material-UI, Capacitor, Kochi" />
        <meta name="author" content="Anu Antony" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeContent />
        <Aboutme />
        <Experience />
        <Technicalskills />
        <Whatioffer />
        <Project />
        <Education />
        <Contact />
      </main>
    </>
  );
}
