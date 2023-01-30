import React from 'react'
import { lines } from './banner4Line'



export const Exhibit2018 = () => {
  
    return (
        <div className='armyLine' 
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            data-aos-offset="0"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
        >
            <h2>Intex South Asia 2018 textile exhibition</h2>
            <p>
                {lines.exhibit2018line1}<br/>
                {lines.exhibit2018line2}<br/>
                {lines.exhibit2018line3}
            </p>
        </div>
    )
}
