import React from 'react'
import { Banner2 } from '../components/Banner2'
import { Banner3 } from '../components/Banner3'
import { Footer } from '../components/Footer';
import { Suspense } from 'react'





function About() {
    return (
      <>
        <Suspense>
          <div className="App">
            <Banner2 />
            <Banner3 />
            <Footer />
          </div>
        </Suspense>
      </>
    );
  }
  
  export default About;