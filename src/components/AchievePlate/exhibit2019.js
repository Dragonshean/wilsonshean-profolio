import React from 'react'
import { lines } from './banner4Line'



export const Exhibit2019 = () => {
  
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
            <h2>Intex South Asia 2019 textile exhibition</h2>
            <p>
                {lines.exhibit2019line1}<br/>
                {lines.exhibit2019line2}<br/>
                {lines.exhibit2019line3}<br/>
                {lines.exhibit2019line4}
            </p>
        </div>
    )
}
