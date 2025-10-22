import React from 'react'


/**
 * node modules
 */

import {ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Login from './pages/Login';
import Signup from './pages/Signup';








/**
 * register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger); 

/**
 * 
 * components
 */
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill'
import Work from './components/Work';
import YouTubePage from './components/YouTubePage';
import AIToolsPage from './components/AIToolsPage';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Payment from './components/Payment';

{/* <Route path="/payment" element={<Payment />} /> */}


const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')

    elements.forEach((elements)=> {
      gsap.to(elements, {
        scrollTrigger :{
          trigger: elements,
          start:'200 bottom',
          end: 'bottom 80%',
           scrub: true
        },
        y:0,
        opacity:1,
        duration:1,
        ease:'power2.out'
      })
    })
  });



  

  return (
    <ReactLenis root>

      <Header />

      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <YouTubePage />
        <AIToolsPage />
        <Review />
        <Contact />
        <Payment />
        
       
      </main>
       <Footer />
    </ReactLenis>


  )
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App

