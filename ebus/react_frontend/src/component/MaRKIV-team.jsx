import logo_markiv from "../images/markiv 1.png";
import styled from "styled-components";
import { darkGreen } from "./utils/utills";
import { team } from "./utils/data";

export default function MaRKIV_Team() {
  return (
    <Block className="d-flex flex-column align-items-center justify-content-between">
      <span className="logo-block d-flex align-items-center justify-content-center">
        <img src={logo_markiv} alt="logo markiv" />
      </span>
      <TitleDiv className="d-flex flex-column align-items-center">
        <h5>Наша команда</h5>
        <p className="text-center">
          Ми - MARKIV, група талановитих студентів, які об’єдналися для розвитку
          іноваційних проектів у сфері послуг.{" "}
        </p>
      </TitleDiv>
      <div className="d-flex align-items-start justify-content-between py-3" style={{width: "70%"}}>
        {team.map((item) => (
          <MemberItem key={item.id} className="col-xl-2 col-lg-2 col-md-3 d-flex flex-column align-items-center">
            <img src={item.photo} alt={item.name} />
            <h5>{item.name}</h5>
            <p>{item.work}</p>
          </MemberItem>
        ))}
      </div>
      <p style={{fontFamily: "DiaFontLight"}}>MARKIV - іновації що змінюють світ.</p>
    </Block>
  );
}

const MemberItem = styled.div`
img {
    width: 85%;
    margin: 1em;
}
p {
    text-align: center;
    font-size: 0.93em;
    font-family: "DiaFontLight";
}
`;

const Block = styled.div`
width: 100wv;
height: 100vh;
  font-family: "DiaFontRegular";
  .logo-block {
    width: 90%;
    height: 90px;
    border-bottom: 2px solid ${darkGreen};
    img {
      width: 230px;
    }
  }
`;

const TitleDiv = styled.div`
  width: 50%;
  border-bottom: 2px solid ${darkGreen};
  padding-bottom: 1em;
  padding-top: 2em;
  h5 {
    font-family: "DiaFontMedium";
    font-size: 2em;
  }
  p {
    font-family: "DiaFontLight";
    font-size: 1.2em;
  }
`;
