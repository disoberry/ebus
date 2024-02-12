import styled from "styled-components";
import { darkGreen, mainGreen } from "./element/utills";
import background from "../images/image 4.png";

export default function Contacts() {
  const days = [
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п’ятниця",
    "субота",
    "неділя",
  ];

  return (
    <>
      <img src={background} alt="background" className="w-100" />
      <LocationBlock className="w-100 d-flex flex-column align-items-center">
        <Line> </Line>
        <h4>Розташування та як з нами зв’язатися?</h4>
        <Line> </Line>
        <div className="row justify-content-center h-75 w-100 mt-2">
          <div className="col-xl-4 col-lg-4 col-md-7 col-9">
            <InfoSpan className="d-flex justify-content-between align-items-start">
              <i className="fa-solid fa-location-dot"></i>
              <span>
                <h3>Адреса:</h3>
                <p>вул. Київська, 40, Рівне, Рівненська обл., 33004</p>
              </span>
            </InfoSpan>
            <InfoSpan className="d-flex justify-content-between align-items-start">
              <i className="fa-regular fa-clock"></i>
              <span>
                <h3>Графік роботи:</h3>
                <span>
                  {days.map((item) => (
                    <p key={item} className="row w-100 justify-content-between">
                      <span className="col m-0 p-0">{item}</span>
                      <span className="col m-0 p-0">05:30 - 23:00</span>
                    </p>
                  ))}
                  <p style={{ fontSize: "0.75em", width: "80%" }}>
                    <span style={{ color: darkGreen, fontWeight: "bold" }}>
                      Комендантська година
                    </span>{" "}
                    у місті Рівне станом на 19.09.2023 триває з 00:00 до 05:00
                  </p>
                </span>
              </span>
            </InfoSpan>
            <InfoSpan className="d-flex justify-content-between align-items-start">
              <i className="fa-solid fa-phone"></i>
              <span>
                <h3>Телефони для довідки:</h3>
                <p>+ 38 (036) 263 69 14</p>
              </span>
            </InfoSpan>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-7 col-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.1441886196797!2d26.281215256907597!3d50.61494926930282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f132956986b91%3A0xd7533fea51251354!2z0JDQstGC0L7QstC-0LrQt9Cw0Lsg0KDRltCy0L3QtSAo0YbQtdC90YLRgNCw0LvRjNC90LjQuSk!5e0!3m2!1suk!2sua!4v1697799492509!5m2!1suk!2sua"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </LocationBlock>
    </>
  );
}

const InfoSpan = styled.span`
  padding: 1em;
  i {
    color: ${mainGreen};
    margin-right: 1em;
    font-size: 1.5em;
    width: 1em;
    margin-top: 2px;
  }
  h3,
  p {
    font-size: 0.95em;
    margin: 0;
    padding-top: 5px;
  }
  h3 {
    color: #1e1e1e;
    font-weight: bold;
  }
  p {
    color: #5e5e5e;
  }
  span {
    width: 85%;
  }
`;

const Line = styled.span`
  display: block;
  height: 1.7px;
  width: 95%;
  background-color: #000;
  margin: 0.4em;
`;

const LocationBlock = styled.div`
  padding: 2em 1em;
  font-family: "DiaFontLight";
  background: #d6d6d643;
  /* height: 50vh; */
  h4 {
    margin: 0.3em;
  }
  iframe {
    padding: 0.2em;
    border: 2px solid ${darkGreen};
  }
`;
