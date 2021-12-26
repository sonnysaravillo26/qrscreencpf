import React, { useState, useEffect } from 'react';
import { useTransition, animated, useSpring } from "@react-spring/web";
import { useTranslation } from 'react-i18next';
import qrphoto from "../assets/QRSample.jpg";
import phoneSmallLand from "../assets/PhoneSmallLand.png";
// import 'animate.css';
import styled from 'styled-components';

const Styles = styled.div`  

`;


const QrScreentv = () => {
  const [index, set] = useState(0);

  const duration = 8000;
  const slides = [
    ({ style }) => {
      return (
        <SlideContainer style={style}>
          <LittleText>掃描和註冊</LittleText>
        </SlideContainer>
      );
    },
    ({ style }) => {
      return (
        <SlideContainer style={style}>
          <LittleText>
            ஸ்கேன் செய்து பதிவு செய்யவும்
          </LittleText>
        </SlideContainer>
      );
    },
    ({ style }) => {
      return (
        <SlideContainer style={style}>
          <LittleText>
            IMBAS DAN DAFTAR
          </LittleText>
        </SlideContainer>
      );
    }
  ];

  const CarouselContainer = styled.div`
  display: flex;
  display-direction: column;
  justify-content: center;
  align-items: center;
  `;

  const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7vh;
  overflow: hidden;
  position: relative;
`;

  const SlideContainer = styled(animated.div)`
  width: 100%;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

  const LittleText = styled.span`
  color: black;
  font-size: 50px !important;
  font-weight: 500;
  z-index: 10;
  text-align: center;
`;

  useEffect(() => {
    const t = setInterval(() => {
      set((state) => (state + 1) % slides.length);
    }, duration - 500);
    return () => clearTimeout(t);

  }, []); 
  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 }
  });

  return (
    <Styles>
      {/* fixed background */}
      <div className="bgContent"></div>

      {/* CONTENT */}
      <div className="headerTitles2">
        <h2>Welcome to</h2>
        <h2>CPF Maxwell Service Centre</h2>
      </div>

      <div className="leftContent2">
        <div className="leftContentIns2">
          <span className="span1 spanall">SCAN </span>
          <span className="span3 spanall">& REGISTER</span>

          {/* FADE IN FADE OUT anim */}
          <br /><br />
          <div className="languageSec">
            <CarouselContainer>
              <Carousel>
                {transitions((style, i) => {
                  const Slide = slides[i];
                  return <Slide style={style} />;
                })}
              </Carousel>
            </CarouselContainer>
          </div>


          <div className="phoneSection">
            {/* background phone */}
            <div className="qrdata2">
              <h5>DECEMBER 08, 2021</h5>
              <img className="qrSize2" src={qrphoto} alt="qr" />
            </div>
            <div className="bgrIcon2">
              <img src={phoneSmallLand} alt="Small Phone" />
            </div>
          </div>
        </div>
      </div>


      <div className="rightContent">
        <div className="mediaTv">

        </div>
      </div>


      {/* vertical line */}
      <div className="vl"></div>

    </Styles >
  );
}

export default QrScreentv;