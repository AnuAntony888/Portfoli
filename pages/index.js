import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeContent from './HomeContent'
import Aboutme from './aboutme'
import Technicalskills from './Technicalskills'
import Contact from './Contact'
import Testmonials from './Testmonials'
import Whatioffer from './Whatioffer'
import Project from './Project'
import Script from 'next/script'




export default function Home() {
  return (<>

<HomeContent/>
<Aboutme/>
<Technicalskills/>
<Whatioffer/>
<Project/>
<Testmonials/>
<Contact/>
</>
 
  )
}
