import styled from "styled-components";
import bus_img from "../images/bus-logo.png";
import { MainButton } from "./element/header";
import { Link } from "react-router-dom";

export default function Home() {
  fetch('http://127.0.0.1:8000/ebuscont/api/')
        .then(response => response.json())
        .then(data => console.log(data));
  return (
    <Block
      id="block"
      className="w-100 d-flex flex-column align-items-center justify-content-center"
    >
      <span className="d-flex align-items-center">
        <img src={bus_img} alt="bus" />
        <h3>єАвтобус</h3>
      </span>
      <p>Зручне оформлення квитків для кожного.</p>
      <Link to={"/buses-table"}>
        <button>Замовити квиток</button>
      </Link>
    </Block>
  );
}

const Block = styled.div`
  height: 77vh;
  span {
    @media (max-width: 600px) {
      flex-direction: column;
      h3 {
      }
    }
    img {
      width: 7em;
    }
    h3 {
      font-family: "DiaFontRegular";
      font-size: 5em;
      margin-left: 0.3em;
      @media (max-width: 600px) {
        font-size: 3.5em;
        margin-top: 0.5em;
      }
    }
  }
  p {
    font-family: "DiaFontLight";
    font-size: 1.7em;
    margin: 1.5em;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 1.3em;
    }
  }
  button {
    ${MainButton};
    width: 14em;
  }
`;
