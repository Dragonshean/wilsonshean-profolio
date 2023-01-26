import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import React from 'react'
import SF from './img/SF-me.JPG'
import SF1 from './img/parachutte.JPG'
import SF2 from './img/parachuting.JPG'
import SF3 from './img/SF-me2.JPG'
import { Army } from "../AboutPlate/army";






export const Banner3 = () => {
  const [loopNum, setLoopNum] = useState(1); //找出要顯示的圖片的index
  const toRotate = [SF, SF1, SF2, SF3]; //要顯示的圖片
  const [isChanging, setIsChanging] = useState(false); //顯示的職位 是否正在清除
  const [image, setImage] = useState(SF); //現在顯示的圖片是甚麼
  const [delta, setDelta] = useState(5000 - Math.random() * 1000); //字體出現的時間
  const period = 5000; //字體轉換的時間

  const imgSwitch = () => {//字體輸入動作  函式
    let i = loopNum; //  i 是 looNum 取 3 的餘數
    let nowImage = toRotate[i]; // fullText = 是第 i 個職位
    let updatedImage = isChanging // true減少顯示的字 false增加顯示的字
      ? setLoopNum(i - 1)
      : setLoopNum(i + 1);
      setImage(nowImage);
      
      if(isChanging) {//如果正在清除 字體的出現時間 減半
        setDelta(prevDelta => prevDelta / 2)
    } 
  
    if (updatedImage === 3){//如果沒有在清除 與 字體是滿的 則 執行清除, 設定字體轉換時間
      setIsChanging(true);
      setImage(nowImage);
      setDelta(period);
    }else if (image === SF2) {//如果正在清除 與 字體是空的 則 執行加字, 設定職位, 字體轉換時間
      setLoopNum(0)
      setImage(nowImage)
      setDelta(5000);
    }
  }


  useEffect(() => {//只要text有在改變   則執行tick
    let ticker = setInterval(() => {
      imgSwitch();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [image]);



  return (
    <section className="banner" id="home" data-aos="fade-right"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-delay="50"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <p className="backWords">{"<p>"}</p>
            <Army/>
            <p className="backWords">{"</p>"}</p>
            <br />
            <p className="backWords">{"<p>"}</p>
            <p className="bannerInfo">
              Army Airborne Special Forces - Combat Mortar Paratrooper  
            </p>
            <p className="backWords">{"</p>"}</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <br/>
            <p className="backWords">{"<img/>"}</p>
            <img src={image} alt="img"/>
            <a 
              href="https://www.youtube.com/watch?v=yeAll_ePXJM" 
              target="_blank"
              rel="noopener noreferrer"
              className="about-a"
            >
              Explore the troops
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
