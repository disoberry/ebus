import styled from "styled-components";
import { MainButton, darkGreen } from "./element/utills";
import TicketBus from "./element/ticket-bus";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function getCorrectDate(date) {
  let correct = new Date(date);
  return `${("0" + correct.getDate()).slice(-2)}. ${(
    "0" +
    (correct.getMonth() + 1)
  ).slice(-2)}. ${correct.getUTCFullYear()}`;
}

export default function TicketRegistration() {
  // const [seat, setSeat] = useState(0);
  const [bus, setBus] = useState({});
  const [race, setRace] = useState({});
  const { state } = useLocation();

  const checkSeat = (item) => {
    console.log(item);
    document.getElementById("selected-seat").innerText = item;
    item.length > 1
      ? (document.getElementById("text-select").innerText = "Вибрані місця: ")
      : (document.getElementById("text-select").innerText = "Вибране місце: ");
  };

  useEffect(() => {
    setBus(state.bus);
    setRace(state.race);
  }, []);

  return (
    <Block className="w-100 d-flex flex-column align-items-center">
      <h3 className="my-xl-3">Оберіть своє місце</h3>
      <div className="w-100 m-0 d-flex flex-xl-row flex-lg-column flex-md-column flex-sm-column flex-column justify-content-center align-items-xl-start align-items-lg-center align-items-md-center align-items-sm-center align--items-center">
        <div className="info-div d-flex flex-column justify-content-between pt-4">
          <span className="d-flex align-items-center pb-2">
            <i className="fa-solid fa-route fa-2xl"></i>
            <h4 className="m-0 px-3">{`${bus.fromWhere} – ${bus.toWhere}`}</h4>
          </span>
          <span className="d-flex justify-content-between align-items-center">
            <p className="my-0">Рейс - {race.id}</p>
            <p
              className="my-0"
              style={{ color: `${darkGreen}`, fontWeight: "bold" }}
            >
              за {getCorrectDate(race.date)}
            </p>
          </span>
          <p>Відправка о {race.timeFrom}</p>
          <p>Прибуття о {race.timeTo}</p>
          <span className="d-flex align-items-center w-100 px-1 py-2 mx-1">
            <b id="text-select">Вибране місце:</b>{" "}
            <span id="selected-seat" className="px-2 py-0 my-0">
              {" "}
            </span>
          </span>
        </div>
        <span className="">
          <TicketBus
            checkSeat={checkSeat}
            seatItem={{
              seats: race.seats,
              freeSeats: race.freeSeats,
            }}
            seats={race.seats}
            freeSeats={race.freeSeats}
          />
        </span>
      </div>
      <Link to={"/ready-ticket"}>
        <Btn>Замовити квиток</Btn>
      </Link>
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
