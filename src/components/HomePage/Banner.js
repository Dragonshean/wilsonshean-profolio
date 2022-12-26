import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { Bounce } from '../Bounce/Bounce'
import { Bounce2 } from '../Bounce/Bounce2'
// import BannerImg from './img/Drashean_logo.png'
import React from 'react'


const salesYear = () => {
  const today = new Date();
  return today.getFullYear() - 2017;
};
const codeYear = () => {
  const firstDate = new Date();
  return firstDate.getFullYear() - 2021;
};

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); //找出要顯示的職位的index
  const [isDeleting, setIsDeleting] = useState(false); //顯示的職位 是否正在清除
  const toRotate = ["Web Developer", "Sales Manager", "UI/UX Designer"]; //要顯示的職位
  const [text, setText] = useState(""); //現在顯示的text是甚麼
  const [delta, setDelta] = useState( 300 - Math.random() * 100); //字體出現的時間
  const period = 2000; //字體轉換的時間

  const tick = () => {//字體輸入動作  函式
    let i = loopNum % toRotate.length; //  i 是 looNum 取 3 的餘數
    let fullText = toRotate[i]; // fullText = 是第 i 個職位
    let updatedText = isDeleting // true減少顯示的字 false增加顯示的字
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    
    if(isDeleting) {//如果正在清除 字體的出現時間 減半
      setDelta(prevDelta => prevDelta / 2)
    } 
    
    if (!isDeleting && updatedText === fullText){//如果沒有在清除 與 字體是滿的 則 執行清除, 設定字體轉換時間
      setIsDeleting(true);
      setDelta(period);
    }else if (isDeleting && updatedText === '') {//如果正在清除 與 字體是空的 則 執行加字, 設定職位, 字體轉換時間
      setLoopNum(loopNum + 1);  
      setIsDeleting(false);
      setDelta(500);
    }
  };

  useEffect(() => {//只要text有在改變   則執行tick
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home" 
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-delay="50"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="10"
            data-aos-delay="200"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-easing="ease-in-sine">
            <p className="backWords">{"<h1>"}</p>
            <Bounce2/>
            <h1>
              <Bounce />
              <span className="wrap"> {text}</span>
            </h1>
            <p className="backWords">{"</h1>"}</p>
            <br />
            <p className="backWords">{"<p>"}</p>
            <p className="bannerInfo">
              With {salesYear()} years sales experiences, <br/>and {codeYear()} year
              self-coding experiences
            </p>
            <p className="backWords">{"</p>"}</p>
            <br/>
            <p className="backWords">{"<a>"}</p>
            <a href='https://reurl.cc/58VmpG'
              target="_blank"
              rel="noopener noreferrer"
            >
              See my sales Resume <ArrowRightCircle size={25} />
            </a><br/><p className="backWords">{"</a>"}</p><br/><p className="backWords">{"<a>"}</p>
            <a href='https://reurl.cc/jRaAGy'
              target="_blank"
              rel="noopener noreferrer"
            >
              See my software Resume <ArrowRightCircle size={25} />
            </a><br/>
            <p className="backWords">{"</a>"}</p>
          </Col>
          <Col xs={12} md={6} xl={5}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="10"
            data-aos-delay="200"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-easing="ease-in-sine"
          >
            <div className="homeImg"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
