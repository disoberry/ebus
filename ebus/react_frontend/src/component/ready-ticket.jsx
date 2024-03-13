import styled from "styled-components";
import TicketCard from "./element/ticket-card";
import quote_1 from "../images/quote 1.png";
import quote_2 from "../images/quote 2.png";
import { MainButton, NotValidBtn, lightGreen } from "./utils/utills";
import { Link, useLocation } from "react-router-dom";

export default function ReadyTicket() {
  const { state } = useLocation();
  console.log(state);
  return (
    <Block className="w-100 d-flex flex-column align-items-center">
      <h3 className="my-xl-3 text-center">
        {state.seats.length >= 2 ? "Ваші квитки готові" : "Ваш квиток готовий"}
      </h3>
      <h4 className="text-center pb-3">
        Всі придбані квитки зберігаються в Кабінеті.
      </h4>
      <div className="row w-100 m-0 align-items-start justify-content-around">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-9 col-11 d-flex flex-column justify-content-end">
          {state.seats.map((seat) => (
            <TicketCard
              key={state.seats.indexOf(seat)}
              race={state.race}
              bus={state.bus}
              seat={seat}
              status={"Не активований"}
            />
          ))}
        </div>
        <span className="brief col-xl-4 col-lg-5 col-md-7 col-sm-8 col-11 my-md-4 my-sm-4 my-4 d-flex">
          <img className="quote1" src={quote_1} alt="quote1" />
          <p>
            <b>
              Після оплати, на пошту, яку ви вказали у вашому кабінеті, прийде
              лист з копією квитка.
            </b>
            Якщо квитка немає в Кабінеті, то оплата не пройшла коректно.
            Спробуйте ще раз.
          </p>
          <img className="quote2" src={quote_2} alt="quote2" />
        </span>
      </div>
      <div className="d-flex w-50 align-items-center justify-content-center">
        <Link to={"/buses-table"}>
          <button className="to-main m-4">На головну</button>
        </Link>
        <Link to={"/user/tickets"}>
          {" "}
          <button className="pay-btn m-4">Переглянути квитки</button>
        </Link>
      </div>
    </Block>
  );
}
const Block = styled.div`
  font-family: "DiaFontLight";
  .pay-btn {
    ${MainButton};
  }
  .to-main {
    ${NotValidBtn}
  }
  a {
    width: 50%;
  }
  h3 {
    font-family: "DiaFontBold";
    font-size: 2.5em;
    margin: 0 auto;
  }
  h4 {
    font-size: 1.35em;
    margin: 0 auto;
  }
  .brief {
    background-color: ${lightGreen};
    padding: 1em;
    p {
      margin: 0;
      width: 100%;
    }
    img {
      position: relative;
      width: 3em;
      height: 3em;
    }
    .quote1 {
      bottom: 2.5em;
      left: -0.5em;
    }
    .quote2 {
      bottom: -5.5em;
      right: -0.5em;
    }
    @media (max-width: 1438px) {
      .quote2 {
        bottom: -6.5em;
      }
    }
    @media (max-width: 1274px) {
      .quote2 {
        bottom: -8.5em;
      }
    }
    @media (max-width: 1200px) {
      .quote2 {
        bottom: -5.5em;
      }
    }
    @media (max-width: 1151px) {
      .quote2 {
        bottom: -7em;
      }
    }
    @media (max-width: 1020px) {
      .quote2 {
        bottom: -8.5em;
      }
    }
    @media (max-width: 992px) {
      .quote2 {
        bottom: -5.5em;
      }
      .pay-btn,
      .to-main {
        width: 70% !important;
      }
    }
    @media (max-width: 822px) {
      .quote2 {
        bottom: -7em;
      }
      a {
        width: 70% !important;
      }
    }
    @media (max-width: 768px) {
      .quote2 {
        bottom: -5.5em;
      }
    }
    @media (max-width: 719px) {
      .quote2 {
        bottom: -7em;
      }
      a {
        width: 70% !important;
      }
    }
    @media (max-width: 637px) {
      .quote2 {
        bottom: -8.5em;
      }
      a {
        width: 70% !important;
      }
    }
    @media (max-width: 576px) {
      p {
        font-size: 0.95em;
      }
      .quote2 {
        bottom: -5.5em;
      }
      a {
        width: 70% !important;
      }
    }
    @media (max-width: 504px) {
      p {
        font-size: 0.9em;
      }
      .quote2 {
        bottom: -6.5em;
      }
    }
    @media (max-width: 431px) {
      p {
        font-size: 0.85em;
      }
      img {
        width: 2.7em;
        height: 2.7em;
      }
      .quote2 {
        bottom: -6.5em;
      }
    }
  }
`;
