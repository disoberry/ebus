import styled from "styled-components";
import {
  MainButton,
  darkGreen,
  darkGrey,
  lightGreen,
  mainGreen,
} from "./element/utills";
import TicketBus from "./element/ticket-bus";
import { Link } from "react-router-dom";

export default function TicketRegistration() {
  return (
    <Block className="w-100 d-flex flex-column align-items-center">
      <h3 className="my-xl-3">Оберіть своє місце</h3>
      <div className="w-100 m-0 d-flex flex-xl-row flex-lg-column flex-md-column flex-sm-column flex-column justify-content-center align-items-start">
        <div className="info-div d-flex flex-column justify-content-between pt-4">
          <span className="d-flex align-items-center pb-2">
            <i className="fa-solid fa-route fa-2xl"></i>
            <h4 className="m-0 px-3">Рівне - Київ</h4>
          </span>
          <span className="d-flex justify-content-between align-items-center">
            <p className="my-0">Рейс - 1</p>
            <p
              className="my-0"
              style={{ color: `${darkGreen}`, fontWeight: "bold" }}
            >
              за 20.11.2023
            </p>
          </span>
          <p>Відправка о 5:00</p>
          <p>Прибуття о 11:15</p>
        </div>
        <span className="">
          <TicketBus />
        </span>
      </div>
      <Link to={'/ready-ticket'}><Btn>Замовити квиток</Btn></Link>
    </Block>
  );
}

const Block = styled.div`
  font-family: "DiaFontLight";
  h3 {
    font-family: "DiaFontBold";
    font-size: 2.5em;
    margin: 0 auto;
  }
  .info-div {
    h4 {
      font-family: "DiaFontBold";
      font-size: 1.8em;
    }
    p {
      font-size: 1.2em;
      margin: 0.25em 0.35em;
    }
    @media (max-width: 1200px) {
      width: 70%;
      padding-left: 1em;
    }
  }
`;

const Btn = styled.button`
  ${MainButton};
  width: 15em;
`;
