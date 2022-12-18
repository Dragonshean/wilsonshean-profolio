import React, { Suspense } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Banner4 } from '../components/Banner4'
import { Banner5 } from '../components/Banner5'
import { SalesCharts } from '../components/salesChart';
import { SideAchieve } from '../components/SideAchieve'
import { Footer } from '../components/Footer';



function Achievement() {
  return (
    <>
      <Suspense>
        <div className="App">
          <Banner4 />
          <Banner5 />
          <SalesCharts />
          <SideAchieve />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default Achievement;
