import styled from "styled-components";
import { MainButton, darkGreen } from "./utils/utills";
import TicketBus from "./element/ticket-bus";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import "./style/modal-styles.css";

export function getCorrectDate(date) {
  let correct = new Date(date);
  return `${("0" + correct.getDate()).slice(-2)}.${(
    "0" +
    (correct.getMonth() + 1)
  ).slice(-2)}.${correct.getUTCFullYear()}`;
}

export default function TicketRegistration() {
  let seats = [];
  const [res, setRes] = useState([]);
  const [bus, setBus] = useState({});
  const [race, setRace] = useState({});
  const [show, setShow] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  const checkSeat = (item) => {
    seats = [];
    let seattag = document.getElementById("selected-seat");
    let string = "";
    item.map((seat) => {
      seats.push(seat);
      string += `${seat}, `;
    });
    setRes(seats);
    seattag.innerText = string.substring(0, string.length - 2);
    document.getElementById("text-select").innerText =
      item.length > 1 ? "Вибрані місця: " : "Вибране місце: ";
    if (item.length > 6) {
      seattag.parentElement.classList.remove("align-items-center");
      seattag.parentElement.classList.add("flex-column");
      seattag.parentElement.classList.add("align-items-start");
    } else {
      seattag.parentElement.classList.remove("flex-column");
      seattag.parentElement.classList.remove("align-items-start");
    }
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
            <h4 className="m-0 px-3">{bus.fromWhere} – {bus.toWhere}</h4>
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
            <span id="selected-seat" className=" py-0 my-0">
              {"  "}
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
      {/* <Link to={"/ready-ticket"}> */}
      <Btn
        onMouseEnter={(e) => {
          res.length === 0
            ? (e.currentTarget.style.cursor = "not-allowed")
            : (e.currentTarget.style.cursor = "pointer");
        }}
        onClick={() => {
          if (res.length === 0) {
            setShow(true);
            setTimeout(() => {
              setShow(false);
            }, 1500);
          } else {
            console.log(res);
            navigate("/ready-ticket", {
              state: {
                seats: res,
                bus: bus,
                race: race,
              },
            });
          }
        }}
      >
        Замовити квиток
      </Btn>
      {/* </Link> */}
      <Toast
        className={""}
        onClose={() => setShow(false)}
        show={show}
        // delay={3000}
        // autohide
      >
        {/*  */}
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <p className="m-0 me-auto">Сповіщення</p>
          {/* <small>11 mins ago</small> */}
        </Toast.Header>
        <Toast.Body className="p-2 d-flex align-items-center">
          <i
            className="fa-solid fa-circle-exclamation fa-xl"
            style={{ color: "red" }}
          ></i>
          <p className="m-0 px-2" style={{ fontSize: "1.2em" }}>
            Виберіть хоча б одне місце, щоб продовжити.
          </p>
        </Toast.Body>
      </Toast>
    </Block>
  );
}

const Block = styled.div`
  #selected-seat {
    max-width: 200px;
    line-height: 2em;
  }
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
