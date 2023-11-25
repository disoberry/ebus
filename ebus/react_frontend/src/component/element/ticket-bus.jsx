import styled from "styled-components";
import { lightGreen, mainGreen } from "./utills";

export default function TicketBus() {
  //   const arr = Array(59).fill("");
  function setBusSeats(start, end) {
    const childen = [];
    for (let i = start; i <= end; i++) {
      childen.push(<SeatElem key={i} id={i} />);
    }
    return childen;
  }
  return (
    <div className=" w-100 p-xl-2" style={{ margin: "0 auto" }}>
      <BusDiv className="d-flex justify-content-between ">
        <div className="d-flex flex-column justify-content-between align-items-center">
          <span id="first" className="d-flex flex-wrap">
            {setBusSeats(1, 26)}
          </span>
          <span id="second" className="d-flex flex-wrap">
            {setBusSeats(27, 52)}
          </span>
        </div>
        <span className="d-flex flex-column justify-content-between">
          {setBusSeats(53, 58)}
        </span>
      </BusDiv>
    </div>
  );
}

const SeatElem = ({ id }) => {
  const handleFocus = (e) => {
    e.preventDefault();
    e.target.style.boxShadow = `0 0 2px 1px ${mainGreen}`;
  };
  const handleBlur = (e) => {
    e.preventDefault();
    e.target.style.boxShadow = `none`;
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.textContent);
  };
  return (
    <button
      key={id}
      style={{
        backgroundColor: id % 2 === 0 ? `${lightGreen}` : "transparent",
        color: "#000",
        borderColor: id % 2 === 0 ? `${mainGreen}` : "",
      }}
      className="d-flex justify-content-center align-items-center"
      onFocus={(e) => handleFocus(e)}
      onBlur={(e) => handleBlur(e)}
      onClick={(e) => handleClick(e)}
    >
      {id}
    </button>
  );
};

const BusDiv = styled.div`
  font-family: "DiaFontBold";
  border: 3px solid #000;
  border-radius: 1em;
  padding: 1em;
  margin: 0.5em;
  width: 786px;
  button {
    margin: 3px;
    padding: 0.5em;
    border: 3px solid #000;
    border-radius: 40%;
    width: 2.7em;
    height: 2.7em;
    font-size: 1.1em;
    background-color: transparent;
    &:hover {
      background-color: ${mainGreen} !important;
      border-color: ${mainGreen};
      color: #fff !important;
      cursor: pointer;
    }
  }
`;
