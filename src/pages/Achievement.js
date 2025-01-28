import React, { Suspense } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Banner4 } from '../components/AchievePage/Banner4'
import { Banner5 } from '../components/AchievePage/Banner5'
import { Banner6 } from '../components/AchievePage/Banner6'
import { SalesCharts } from '../components/AchievePage/salesChart';
import { SideAchieve } from '../components/AchievePage/SideAchieve'
import { Footer } from '../components/Footer';



function Achievement() {
  return (
    <>
      <Suspense>
        <div className="App">
          <Banner4 />
          <Banner5 />
          <Banner6 />
          <SalesCharts />
          <SideAchieve />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default Achievement;
