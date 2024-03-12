import { TopBlock } from "./Bus-table";
import SearchBlock from "./element/search-block";
import styled from "styled-components";
import { darkGreen, lightGrey, mainGreen } from "./utils/utills";
import { useLocation } from "react-router-dom";
// import { searchingData } from "./utils/data";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../images/e-avtobus-logo.png";

export default function SearchResult() {
  const { state } = useLocation();
  const [dataT, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/ebuscont/api/triprace?bus_table__fromWhere=${
        state.search.from
      }&bus_table__toWhere=${state.search.to}&date=${state.search.date
        .toISOString()
        .slice(0, 10)}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(dataT);
  }, []);

  function getSearchData() {
    let arr = [];
    fetch(
      `http://127.0.0.1:8000/ebuscont/api/triprace?bus_table__fromWhere=${
        state.search.from
      }&bus_table__toWhere=${state.search.to}&date=${state.search.date
        .toISOString()
        .slice(0, 10)}`
    )
      .then((response) => response.json())
      .then((data) => {
        data.map((item) => {
          if (item.freeSeats.length >= state.search.person.value) {
            setData({
              id: item.id,
              departureTime: item.timeFrom.slice(0, 5),
              from: state.search.from,
              to: state.search.to,
              arrivalTime: item.timeTo.slice(0, 5),
              price: "50",
              date: item.date,
            });
          }
        });
      });
    return arr;
  }

  return (
    <div>
      <TopBlock className="w-100 d-flex flex-column align-items-center justify-content-center">
        <img src={logo} alt="logo big" />

        <SearchBlock data={state.search} />
      </TopBlock>
      <div className="w-100 d-flex flex-column align-items-center py-1">
        <TitleBlock className="d-flex flex-column align-items-center">
          <h5>Розклад автобусів за маршрутом:</h5>
          <h6>
            “{state.search.from} - {state.search.to}”
          </h6>
        </TitleBlock>
        {/* {console.log(dataT?.length)} */}
        {dataT === null ? (
          <p>Маршрут за вашими побажання не знайдено</p>
        ) : (
          dataT.map((item) => (
            <BusSearchItem key={item.id} data={item} />
          ))
        )}
      </div>
    </div>
  );
}

const BusSearchItem = ({ data }) => {
  const navigate = useNavigate();
  const [bus, setBus] = useState({});
useEffect(()=> {
  fetch("http://127.0.0.1:8000/ebuscont/api/")
    .then((response) => response.json())
    .then((data_r) =>
      data_r.map((item) => {
        if (data.bus_table === item.id) {
          setBus(item);
        }
      })
    );

}, [])

  console.log(bus)
  return (
    <BusSearchItemSt className="row align-items-center">
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
        <h3>{data.timeFrom.slice(0, 5)}</h3>
        <p>{data.date}</p>
        <h4>{bus.fromWhere}</h4>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 align-items-xl-start align-items-lg-start align-items-md-start align-items-sm-start align-items-end">
        <h3>{data.timeTo.slice(0, 5)}</h3>
        <p>{data.date}</p>
        <h4>{bus.toWhere}</h4>
      </div>
      <span className="col-xl-3 col-lg-3 col-6 col-sm-4 col-md-4 d-flex align-items-end justify-content-lg-start justify-content-md-end justify-content-sm-end">
        {bus.price} <p>UAN</p>
      </span>
      <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-6 align-items-xl-start align-items-lg-start align-items-md-center align-items-sm-center align-items-end pt-md-3 pt-sm-3">
        <button className="" onClick={()=> {
           navigate("/ticket-registration", {
            state: {
              race: data,
              bus: bus,
            },
          })
        }}>Замовити</button>
      </div>
    </BusSearchItemSt>
  );
};

const BusSearchItemSt = styled.div`
  width: 80%;
  background-color: #ededed;
  font-family: "DiaFontMedium";
  margin: 1em;
  padding: 1em;
  & > *:not(:nth-child(3)) {
    display: flex;
    flex-direction: column;
  }
  div {
    & > * {
      color: #474747;
      margin: 0.2em 0;
    }
    p {
      font-size: 1.1em;
      font-family: "DiaFontLight";
      padding-top: 0.3em;
    }
    h3 {
      font-size: 2em;
    }
    h4 {
      font-size: 1.2em;
      font-family: "DiaFontRegular";
    }
  }
  span {
    font-size: 2.5em;
    color: ${mainGreen};
    p {
      margin: 0.3em;
      font-size: 0.5em !important;
    }
  }

  button {
    /* height: 45px; */
    border-radius: 7px;
    background-color: ${mainGreen};
    border: 2px solid ${mainGreen};
    color: #fff;
    padding: 0.5em 2.5em;
    font-family: "DiaFontRegular";
    &:hover {
      background-color: ${darkGreen};
    }
  }
`;

const TitleBlock = styled.span`
  margin: 1em 0;
  & > * {
    font-family: "DiaFontRegular";
    font-size: 1.4em;
    margin: 0.5em;
  }
  h6 {
    font-family: "DiaFontMedium";
    color: ${mainGreen};
    font-size: 1.5em;
  }
`;
