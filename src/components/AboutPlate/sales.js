import React from 'react'
import { lines } from './banner2&3Line'



export const Sales = () => {
  
    return (
        <div className='salesLine' data-aos="zoom-in-right"
            data-aos-duration="2000"
            data-aos-offset="0"
            data-aos-delay="400"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
        >
            <h2>Sales Representative - 5 Years</h2>
            <p>
                {lines.salesline1}<br/>
                {lines.salesline2}<br/>
                {lines.salesline3}<br/>
                {lines.salesline4}<br/>
                {lines.salesline5}<br/>
                {lines.salesline6}
            </p>
        </div>
    )
}
