//字體彈跳模板
import { useState } from 'react'
import React from 'react'


export const Bounce = () => {

 //舊的做法
  
  // const [hovered, setHovered] = useState(false)
  // const [hovered1, setHovered1] = useState(false)
  // const [hovered2, setHovered2] = useState(false)
  // const [hovered3, setHovered3] = useState(false)
  // const [hovered4, setHovered4] = useState(false)
  // const [hovered5, setHovered5] = useState(false)
  // const [hovered6, setHovered6] = useState(false)
  // const [hovered7, setHovered7] = useState(false)
  // const [hovered8, setHovered8] = useState(false)
  // const [hovered9, setHovered9] = useState(false)
  // const [hovered10, setHovered10] = useState(false)

  // const push = () => {
  //   setHovered(true)
  // }
  // const pop = () => {
  //   setTimeout(() => {
  //     setHovered(false);
  // }, 1000);
  // }
  // const push1 = () => {
  //   setHovered1(true)
  // }
  // const pop1 = () => {
  //   setTimeout(() => {
  //     setHovered1(false);
  // }, 1000);
  // }  
  // const push2 = () => {
  //   setHovered2(true)
  // }
  // const pop2 = () => {
  //   setTimeout(() => {
  //     setHovered2(false);
  // }, 1000);
  // }  
  // const push3 = () => {
  //   setHovered3(true)
  // }
  // const pop3 = () => {
  //   setTimeout(() => {
  //     setHovered3(false);
  // }, 1000);
  // }  
  // const push4 = () => {
  //   setHovered4(true)
  // }
  // const pop4 = () => {
  //   setTimeout(() => {
  //     setHovered4(false);
  // }, 1000);
  // }  
  // const push5 = () => {
  //   setHovered5(true)
  // }
  // const pop5 = () => {
  //   setTimeout(() => {
  //     setHovered5(false);
  // }, 1000);
  // }  
  // const push6 = () => {
  //   setHovered6(true)
  // }
  // const pop6 = () => {
  //   setTimeout(() => {
  //     setHovered6(false);
  // }, 1000);
  // }  
  // const push7 = () => {
  //   setHovered7(true)
  // }
  // const pop7 = () => {
  //   setTimeout(() => {
  //     setHovered7(false);
  // }, 1000);
  // }  
  // const push8 = () => {
  //   setHovered8(true)
  // }
  // const pop8 = () => {
  //   setTimeout(() => {
  //     setHovered8(false);
  // }, 1000);
  // }  
  // const push9 = () => {
  //   setHovered9(true)
  // }
  // const pop9 = () => {
  //   setTimeout(() => {
  //     setHovered9(false);
  // }, 1000);
  // }  
  // const push10 = () => {
  //   setHovered10(true)
  // }
  // const pop10 = () => {
  //   setTimeout(() => {
  //     setHovered10(false);
  // }, 1000);
  // }

  //舊的做法
    // return (
    //   <div>
    //     <span aria-hidden="true" style={{ opacity: 1 }}>
    //       <p onMouseEnter={push} onMouseLeave={pop} className={hovered ? "rubberBand" : ""} aria-label=" Hi,  I'm  Shean">H</p>
    //       <p onMouseEnter={push1} onMouseLeave={pop1} className={hovered1 ? "rubberBand" : ""}>i</p>
    //       <p onMouseEnter={push2} onMouseLeave={pop2} className={hovered2 ? "rubberBand" : ""}>,</p>
    //       <p onMouseEnter={push3} onMouseLeave={pop3} className={hovered3 ? "rubberBand textSpace" : "textSpace"}>I</p>
    //       <p onMouseEnter={push4} onMouseLeave={pop4} className={hovered4 ? "rubberBand" : ""}>'</p>
    //       <p onMouseEnter={push5} onMouseLeave={pop5} className={hovered5 ? "rubberBand" : ""}>m</p>
    //       <p onMouseEnter={push6} onMouseLeave={pop6} className={hovered6 ? "rubberBand textSpace" : "textSpace"}>S</p>
    //       <p onMouseEnter={push7} onMouseLeave={pop7} className={hovered7 ? "rubberBand" : ""}>h</p>
    //       <p onMouseEnter={push8} onMouseLeave={pop8} className={hovered8 ? "rubberBand" : ""}>e</p>
    //       <p onMouseEnter={push9} onMouseLeave={pop9} className={hovered9 ? "rubberBand" : ""}>a</p>
    //       <p onMouseEnter={push10} onMouseLeave={pop10} className={hovered10 ? "rubberBand" : ""}>n</p>
    //     </span>
    //   </div>
    // );

 //新的做法
  const letters = "Hi, I'm Shean".split("")
  const hoverStates = letters.map(() => useState(false));

  return (
    <div>
      <span aria-hidden="true" style={{ opacity: 1 }}>
      {
        letters.map((letter, index) => {
          let push = () => {
            hoverStates[index][1](true)
          }
      
          let pop = () => {
            setTimeout(() => {
              hoverStates[index][1](false)
            }, 1000);
          }
          if (index === 4 || index === 8){
            return (
            <p key={index} onMouseEnter={push} onMouseLeave={pop} className={hoverStates[index][0] ? "rubberBand textSpace" : "textSpace"}>{letter}</p>
            )
          } else {
            return (
              <p key={index} onMouseEnter={push} onMouseLeave={pop} className={hoverStates[index][0] ? "rubberBand" : ""}>{letter}</p>
              )
          }
        })
      }
      </span>
    </div>);
};
