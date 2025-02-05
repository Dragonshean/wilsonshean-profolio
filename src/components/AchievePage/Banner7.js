import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { Exhibit2024 } from "../AchievePlate/exhibit2024";
import exhibit2024Img from "./img/intex2024-1.jpg";
import exhibit2024Img2 from "./img/intex2024-2.jpg";
import exhibit2024Img3 from "./img/intex2024-3.jpg";
import exhibit2024Img4 from "./img/intex2024-4.jpg";

export const Banner7 = () => {
  const [loopNum, setLoopNum] = useState(1); //找出要顯示的圖片的index
  const toRotate = [
    exhibit2024Img,
    exhibit2024Img2,
    exhibit2024Img3,
    exhibit2024Img4,
  ]; //要顯示的圖片
  const [isChanging, setIsChanging] = useState(false); //顯示的圖片 是否正在清除
  const [image, setImage] = useState(exhibit2024Img); //現在顯示的圖片是甚麼
  const [delta, setDelta] = useState(5000 - Math.random() * 1000); //圖片出現的時間
  const period = 5000; //圖片轉換的時間

  const imgSwitch = () => {
    //圖片輸入動作  函式
    let i = loopNum; //  i 是 looNum 取 3 的餘數
    let nowImage = toRotate[i]; // fullText = 是第 i 個職位
    let updatedImage = isChanging // true減少顯示的字 false增加顯示的字
      ? setLoopNum(i - 1)
      : setLoopNum(i + 1);
    setImage(nowImage);

    if (isChanging) {
      //如果正在清除 圖片的出現時間 減半
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (updatedImage === 3) {
      //如果沒有在清除 與 字體是滿的 則 執行清除, 設定字體轉換時間
      setIsChanging(true);
      setImage(nowImage);
      setDelta(period);
    } else if (image === exhibit2024Img2) {
      //如果正在清除 與 字體是空的 則 執行加字, 設定職位, 字體轉換時間
      setLoopNum(0);
      setImage(nowImage);
      setDelta(5000);
    }
  };

  useEffect(() => {
    //只要text有在改變   則執行tick
    let ticker = setInterval(() => {
      imgSwitch();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [image]);

  return (
    <section
      className="banner"
      id="home"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      data-aos-offset="0"
      data-aos-delay="50"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <p className="backWords">{"<p>"}</p>
            <Exhibit2024 />
            <p className="backWords">{"</p>"}</p>
            <br />
            <p className="backWords">{"<p>"}</p>
            <p className="bannerInfo">
              3 days for exhibition, 10 days for clients visit
            </p>
            <p className="backWords">{"</p>"}</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <p className="backWords">{"<img/>"}</p>
            <img src={image} alt="img" height={50} />
            <a
              href="https://intexsouthasia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-a"
            >
              Explore Exhibition Website
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
