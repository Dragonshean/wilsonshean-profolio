//字體彈跳模板
import { useState } from 'react'
import React from 'react'


export const Bounce2 = () => {
  const [hovered, setHovered] = useState(false)
  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)
  const [hovered3, setHovered3] = useState(false)
  const [hovered4, setHovered4] = useState(false)
  const [hovered5, setHovered5] = useState(false)
  const [hovered6, setHovered6] = useState(false)
  const [hovered7, setHovered7] = useState(false)
  const [hovered8, setHovered8] = useState(false)
  const [hovered9, setHovered9] = useState(false)
  const [hovered10, setHovered10] = useState(false)
  const [hovered11, setHovered11] = useState(false)
  const [hovered12, setHovered12] = useState(false)
  const [hovered13, setHovered13] = useState(false)
  const [hovered14, setHovered14] = useState(false)
  const [hovered15, setHovered15] = useState(false)
  const [hovered16, setHovered16] = useState(false)
  const [hovered17, setHovered17] = useState(false)
  const [hovered18, setHovered18] = useState(false)
  const [hovered19, setHovered19] = useState(false)

  const push = () => {
    setHovered(true)
  }
  const pop = () => {
    setTimeout(() => {
      setHovered(false);
  }, 1000);
  }
  const push1 = () => {
    setHovered1(true)
  }
  const pop1 = () => {
    setTimeout(() => {
      setHovered1(false);
  }, 1000);
  }  
  const push2 = () => {
    setHovered2(true)
  }
  const pop2 = () => {
    setTimeout(() => {
      setHovered2(false);
  }, 1000);
  }  
  const push3 = () => {
    setHovered3(true)
  }
  const pop3 = () => {
    setTimeout(() => {
      setHovered3(false);
  }, 1000);
  }  
  const push4 = () => {
    setHovered4(true)
  }
  const pop4 = () => {
    setTimeout(() => {
      setHovered4(false);
  }, 1000);
  }  
  const push5 = () => {
    setHovered5(true)
  }
  const pop5 = () => {
    setTimeout(() => {
      setHovered5(false);
  }, 1000);
  }  
  const push6 = () => {
    setHovered6(true)
  }
  const pop6 = () => {
    setTimeout(() => {
      setHovered6(false);
  }, 1000);
  }  
  const push7 = () => {
    setHovered7(true)
  }
  const pop7 = () => {
    setTimeout(() => {
      setHovered7(false);
  }, 1000);
  }  
  const push8 = () => {
    setHovered8(true)
  }
  const pop8 = () => {
    setTimeout(() => {
      setHovered8(false);
  }, 1000);
  }  
  const push9 = () => {
    setHovered9(true)
  }
  const pop9 = () => {
    setTimeout(() => {
      setHovered9(false);
  }, 1000);
  }  
  const push10 = () => {
    setHovered10(true)
  }
  const pop10 = () => {
    setTimeout(() => {
      setHovered10(false);
  }, 1000);
  }
  const push11 = () => {
    setHovered11(true)
  }
  const pop11 = () => {
    setTimeout(() => {
      setHovered11(false);
  }, 1000);
  }
  const push12 = () => {
    setHovered12(true)
  }
  const pop12 = () => {
    setTimeout(() => {
      setHovered12(false);
  }, 1000);
  }
  const push13 = () => {
    setHovered13(true)
  }
  const pop13 = () => {
    setTimeout(() => {
      setHovered13(false);
  }, 1000);
  }
  const push14 = () => {
    setHovered14(true)
  }
  const pop14 = () => {
    setTimeout(() => {
      setHovered14(false);
  }, 1000);
  }
  const push15 = () => {
    setHovered15(true)
  }
  const pop15 = () => {
    setTimeout(() => {
      setHovered15(false);
  }, 1000);
  }
  const push16 = () => {
    setHovered16(true)
  }
  const pop16 = () => {
    setTimeout(() => {
      setHovered16(false);
  }, 1000);
  }
  const push17 = () => {
    setHovered17(true)
  }
  const pop17 = () => {
    setTimeout(() => {
      setHovered17(false);
  }, 1000);
  }
  const push18 = () => {
    setHovered18(true)
  }
  const pop18 = () => {
    setTimeout(() => {
      setHovered18(false);
  }, 1000);
  }
  const push19 = () => {
    setHovered19(true)
  }
  const pop19 = () => {
    setTimeout(() => {
      setHovered19(false);
  }, 1000);
  }

  return (
    <div className='tagline-box'>
      <span className="tagline">
        <p onMouseEnter={push} onMouseLeave={pop} className={hovered ? "rubberBand" : ""} aria-label=" Hi,  I'm  Shean">C</p>
        <p onMouseEnter={push1} onMouseLeave={pop1} className={hovered1 ? "rubberBand" : ""}>o</p>
        <p onMouseEnter={push2} onMouseLeave={pop2} className={hovered2 ? "rubberBand" : ""}>m</p>
        <p onMouseEnter={push3} onMouseLeave={pop3} className={hovered3 ? "rubberBand" : ""}>p</p>
        <p onMouseEnter={push4} onMouseLeave={pop4} className={hovered4 ? "rubberBand" : ""}>i</p>
        <p onMouseEnter={push5} onMouseLeave={pop5} className={hovered5 ? "rubberBand" : ""}>l</p>
        <p onMouseEnter={push6} onMouseLeave={pop6} className={hovered6 ? "rubberBand" : ""}>e</p>
        <p onMouseEnter={push7} onMouseLeave={pop7} className={hovered7 ? "rubberBand" : ""}>d</p>
        <p onMouseEnter={push8} onMouseLeave={pop8} className={hovered8 ? "rubberBand textSpace" : "textSpace"}>S</p>
        <p onMouseEnter={push9} onMouseLeave={pop9} className={hovered9 ? "rubberBand" : ""}>u</p>
        <p onMouseEnter={push10} onMouseLeave={pop10} className={hovered10 ? "rubberBand" : ""}>c</p>
        <p onMouseEnter={push11} onMouseLeave={pop11} className={hovered11 ? "rubberBand" : ""}>c</p>
        <p onMouseEnter={push12} onMouseLeave={pop12} className={hovered12 ? "rubberBand" : ""}>e</p>
        <p onMouseEnter={push13} onMouseLeave={pop13} className={hovered13 ? "rubberBand" : ""}>s</p>
        <p onMouseEnter={push14} onMouseLeave={pop14} className={hovered14 ? "rubberBand" : ""}>s</p>
        <p onMouseEnter={push15} onMouseLeave={pop15} className={hovered15 ? "rubberBand" : ""}>f</p>
        <p onMouseEnter={push16} onMouseLeave={pop16} className={hovered16 ? "rubberBand" : ""}>u</p>
        <p onMouseEnter={push17} onMouseLeave={pop17} className={hovered17 ? "rubberBand" : ""}>l</p>
        <p onMouseEnter={push18} onMouseLeave={pop18} className={hovered18 ? "rubberBand" : ""}>l</p>
        <p onMouseEnter={push19} onMouseLeave={pop19} className={hovered19 ? "rubberBand" : ""}>y</p>
      </span>
    </div>
  );
};
