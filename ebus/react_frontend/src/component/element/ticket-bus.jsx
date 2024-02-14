import styled from "styled-components";
import { darkGreen, lightGreen, mainGreen } from "../utils/utills";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// const seatItem = {
//   seats: 40,
//   freeSeats: [
//     2, 3, 4, 5, 6, 8, 9, 10, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26, 27,
//     28, 29, 30, 31, 33, 34, 36, 37, 39,
//   ],
// };

let seats = [];
export default function TicketBus({ checkSeat }) {
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [lastRow, setLastRow] = useState([]);
  const checkCurrentSeat = (item) => {
    checkSeat(item);
  };
  const { state } = useLocation();

  useEffect(() => {
    setBusSeats();
  }, []);

  function fillBlock(arrSeats, setChildren) {
    const children = [];
    arrSeats.map((item) =>
      children.push(
        <SeatElem
          key={item.key}
          id={item.value}
          checkCurrentSeat={checkCurrentSeat}
          isReserved={item.isReserved}
        />
      )
    );
    setChildren(children);
  }

  function setBusSeats() {
    let list = [];
    for (let key = 1; key <= state.race.seats; key++) {
      list.push({
        key: key - 1,
        value: key,
        isReserved: !state.race.freeSeats.includes(key),
      });
    }
    let last_row = list.slice(list.length - 5, list.length);
    let first_row = list.slice(
      0,
      Math.round((list.length - last_row.length) / 2)
    );
    let second_row = list.slice(
      first_row.length,
      list.length - last_row.length
    );
    fillBlock(first_row, setFirstRow);
    fillBlock(second_row, setSecondRow);
    fillBlock(last_row, setLastRow);
  }
  return (
    <div
      className="p-xl-2"
      style={{
        margin: "0 auto",
        width: `${(firstRow.length / 2) * 70 + 65}px`,
      }}
    >
      <BusDiv className="d-flex justify-content-between ">
        <div className="d-flex flex-column justify-content-between align-items-center">
          <span id="first-row" className="d-flex flex-wrap justify-content-end">
            {firstRow}
          </span>
          <span
            id="second-row"
            className="d-flex flex-wrap-reverse justify-content-end"
          >
            {secondRow}
          </span>
        </div>
        <span
          id="last-row"
          className="d-flex flex-column justify-content-between"
        >
          {lastRow}
        </span>
      </BusDiv>
    </div>
  );
}

const SeatElem = ({ id, checkCurrentSeat, isReserved }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (seats.includes(e.target.textContent)) {
      seats.splice(seats.indexOf(e.target.textContent), 1);
      e.target.style.boxShadow = `none`;
      e.target.style.backgroundColor = `transparent`;
      e.target.style.borderColor = `#000`;
      e.target.style.color = "#000";
    } else {
      seats.push(e.target.textContent);
      e.target.style.boxShadow = `0 0 2px 1px ${mainGreen}`;
      e.target.style.backgroundColor = `${darkGreen}`;
      e.target.style.borderColor = "transparent";
      e.target.style.color = "#fff";
    }
    checkCurrentSeat(seats);
  };
  return (
    <button
      key={id}
      style={{
        backgroundColor: isReserved ? `${lightGreen}` : "transparent",
        color: "#000",
        borderColor: isReserved ? `${mainGreen}` : "",
      }}
      className="d-flex justify-content-center align-items-center"
      onClick={(e) => (!isReserved ? handleClick(e) : {})}
      onMouseEnter={(e) =>
        isReserved ? (e.target.style.cursor = "not-allowed") : "default"
      }
      onMouseLeave={(e) =>
        isReserved ? (e.target.style.cursor = "default") : "default"
      }
    >
      {id}{" "}
    </button>
  );
};

const BusDiv = styled.div`
  font-family: "DiaFontBold";
  border: 3px solid #000;
  border-radius: 1em;
  padding: 1em;
  margin: 0.5em;
  button {
    margin: 3px;
    padding: 0.5em;
    border: 3px solid #000;
    border-radius: 40%;
    width: 50px;
    height: 50px;
    font-size: 1.1em;
    background-color: transparent;
    &:hover {
      background-color: ${mainGreen} !important;
      border-color: #000;
      color: #fff !important;
      cursor: pointer;
    }
  }
`;
