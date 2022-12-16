import React from 'react'
import { lines } from './banner2&3Line'



export const Army = () => {
  
    return (
        <div className='armyLine' 
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            data-aos-offset="0"
            data-aos-delay="300"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <h2>Airborne Special Forces - 1 Year</h2>
            <p>
                {lines.armyline1}<br/>
                {lines.armyline2}<br/>
                {lines.armyline3}<br/>
                {lines.armyline4}<br/>
                {lines.armyline5}<br/>
                {lines.armyline6}
            </p>
        </div>
    )
}
