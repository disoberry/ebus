import background from "../images/image 4.png";
import styled from "styled-components";
import { darkGreen, lightGrey, mainGreen } from "./utils/utills";

import { Link } from "react-router-dom";
import { advantages, partners, services } from "./utils/data";

export default function AboutUs() {

  return (
    <Block className="d-flex flex-column align-items-center">
      <img src={background} alt="background" className="w-100" />
      <h4>Про нас</h4>
      <Desc>Ласкаво просимо до Автовокзалу "Андріївський"!</Desc>
      <h5>Наші переваги:</h5>
      <AdvantsDiv>
        {advantages.map((item) => (
          <div key={advantages.indexOf(item)}>
            <span>{item.title}</span>
            {item.text}
          </div>
        ))}
      </AdvantsDiv>
      <OurPartnersDiv className="w-100 row align-items-center justify-content-center">
        <div className="col-9 d-flex flex-column align-items-center">
          <span className="row title-partner-div d-flex align-items-center justify-content-between justify-content-md-center">
            <h3 className="col-xl-2 col-lg-3 col-md-9 col-xs-10">Наші Партнери</h3>
            <p className="col-xl-9 col-lg-9 col-md-9 col-xs-10 m-0">
              Разом ми будуємо міцні зв'язки, сприяємо інноваціям та досягаємо
              великих результатів. Це спільний шлях до успіху, на якому кожен
              крок зроблений разом, має вагоме значення.
            </p>
          </span>
          <div className="row w-100 align-items-start justify-content-around">
            {partners.map((item)=> (
            <PartnerCard className="p-0 col-xl-5 col-lg-8 col-md-9 col-xs-10 col-12 d-flex flex-column justify-content-between">
              <span className="row d-flex align-items-center justify-content-center">
                <img className="col-xl-5 col-lg-5 col-md-5 col-xs-8 col-7" src={item.logo} alt={item.shortName} />
                <p className="col-xl-6 col-lg-6 col-md-6 col-xs-11 col-11">
                  {item.name}
                </p>
              </span>
              <Link to={item.link} className=""><button className="w-100">{item.shortName}</button></Link>
            </PartnerCard>
            ))}            
          </div>
        </div>
      </OurPartnersDiv>
      <ServicesDiv className="d-flex flex-column align-items-center">
        <h5 className="mb-3 text-center">Доступні послуги Автовокзалу “Андріївський”</h5>
        <div className="d-flex flex-wrap w-75 justify-content-between">
          {services.map((item) => (
            <div key={services.indexOf(item)}>
              <img src={item.icon} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </ServicesDiv>
    </Block>
  );
}

const PartnerCard = styled.div`
  background-color: #fff;
  border-radius: 8.5px;
  border: 1px solid #333333;
  /* height: 320px; */
  /* width: 40% !important; */
  margin: 1.5em 0.5em;
  
  span {
    padding: 1.5em;
  }
  img {
    /* width: 40%; */
  }
  p {
    line-height: 1.7em;
    font-size: 1.2em;
    /* width: 50%; */
    padding-left: 1em;
    font-family: "DiaFontLight";
  }
  button {
    border-radius: 0 0 7px 7px;
    border: none;
    height: 50px;
    background-color: #333333;
    color: #fff;
    &:hover {
      background-color: #505050;
    }
  }
`;

const OurPartnersDiv = styled.div`
  background-color: lightgray;
  padding: 2em 1em;
  border: 1px solid ${mainGreen};
  border-left: none;
  border-right: none;
  .title-partner-div {
    h3 {
      font-size: 1.8em;
      line-height: 1.5em;
      margin: 0;
      font-family: "DiaFontMedium";
    }
    p {
      /* padding-left: 1em; */
      line-height: 1.3em;
      font-size: 1.2em;
      font-family: "DiaFontLight";
    }
  }
`;

const ServicesDiv = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  background-color: #f5f5f5;
  width: 100%;
  margin-top: 1.5em;
  div div {
    display: flex;
    align-items: center;
    padding: 0.3em;
    flex: 1 1 33%;
    width: 33%;
    img {
      width: 30px;
      height: 30px;
    }
    p {
      margin: 0;
      padding-left: 10px;
      color: ${darkGreen};
    }
  }
`;

const AdvantsDiv = styled.div`
  width: 80%;
 padding-bottom: 2em;
  div {
    padding: 0.6em 0;
    span {
      font-family: "DiaFontMedium";
      color: ${darkGreen};
      font-size: 1.05em;
    }
  }
`;

const Block = styled.div`
  /* padding: 2em 1em; */
  font-family: "DiaFontRegular";
  /* height: 50vh; */
  h4 {
    margin: 0.3em 0;
    font-size: 1.5em;
    padding-top: 0.5em;
    font-family: "DiaFontMedium";
  }
  h5 {
    font-size: 1.4em;
    margin: 0.3em 0;
  }
`;
const Desc = styled.p`
  font-family: "DiaFontLight";
  font-size: 1.35em;
  border-bottom: 3px solid ${darkGreen};
  text-align: center;
`;
