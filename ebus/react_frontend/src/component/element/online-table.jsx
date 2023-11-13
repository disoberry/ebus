import styled from "styled-components";
import { darkGreen, mainGreen } from "./utills";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    departureTime: "09:15",
    from: "Рівне",
    to: "Київ",
    arrivalTime: "14:20",
    platform: 28,
    status: "Відбув",
  },
  {
    id: 2,
    departureTime: "10:45",
    from: "Рівне",
    to: "Дубно",
    arrivalTime: "12:15",
    platform: 5,
    status: "Очікується",
  },
  {
    id: 3,
    departureTime: "11:00",
    from: "Рівнe",
    to: "Дачі",
    arrivalTime: "11:55",
    platform: 118,
    status: "Прибув",
  },
];

export default function OnlineTable() {
  const [listBuses, setList] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/ebuscont/api/")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  function getTime(date) {
    let mydate = new Date(date);
    return `${("0" + mydate.getUTCHours()).slice(-2)} : 
    ${("0" + mydate.getUTCMinutes()).slice(-2)} : 
    ${("0" + mydate.getUTCSeconds()).slice(-2)}`;
  }

  function checkingColor(status) {
    if (status === false) {
      return "#5E5E5E";
    }
    if (status === "Очікується") {
      return "#000";
    }
    if (status === true) {
      return "#169A43";
    }
  }
  return (
    <AdaptiveTable className="row w-100">
      <div className="w-100 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-10">
        <table className="w-100 table table-responsive caption-top">
          <caption className="p-0">
            <span className="w-100 bg-black text-white">Онлайн Табло</span>
          </caption>
          <thead style={{ background: "#F1F1F1" }}>
            <tr>
              <th scope="col">Відправлення</th>
              <th scope="col">Рейс</th>
              <th scope="col">Прибуття</th>
              <th scope="col">Платформа</th>
              <th scope="col">Статус</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map((item) => (
              <tr
                key={item.id}
                style={{
                  "--bs-table-bg": item.id % 2 === 0 ? "#F1F1F1" : "#E4E4E4",
                }}
              >
                <td>{item.departureTime}</td>
                <td>{`${item.from} – ${item.to}`}</td>
                <td>{item.arrivalTime}</td>
                <td>{item.platform}</td>
                <td
                  style={{
                    color: checkingColor(item.status),
                    fontWeight: item.status === "Прибув" ? "bold" : "",
                  }}
                >
                  {item.status}
                </td>
                <td>
                  <button
                    style={{
                      backgroundColor:
                        item.id % 2 === 0 ? darkGreen : mainGreen,
                    }}
                  >
                    Знайти квиток
                  </button>
                </td>
              </tr>
            ))} */}
            {listBuses.map((item) => (
              <tr
                key={item.raceNum}
                style={{
                  "--bs-table-bg":
                    item.raceNum % 2 === 0 ? "#F1F1F1" : "#E4E4E4",
                }}
              >
                <td>{getTime(item.fromWhen)}</td>
                <td>{`${item.fromWhere} – ${item.toWhere}`}</td>
                <td>{getTime(item.toWhen)}</td>
                <td>{item.platform}</td>
                <td
                  style={{
                    color: checkingColor(item.status),
                    fontWeight: item.status === true ? "bold" : "",
                  }}
                >
                  {item.status ? "Прибув" : "Відбув"}
                </td>
                <td>
                  <button
                    style={{
                      backgroundColor:
                        item.raceNum % 2 === 0 ? darkGreen : mainGreen,
                    }}
                  >
                    Знайти квиток
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdaptiveTable>
  );
}

const AdaptiveTable = styled.div`
  margin: 0 auto;
  font-family: "DiaFontLight";
  @media (min-width: 700px) {
    padding: 2.5em;
  }
  @media (min-width: 1200px) {
    padding: 3em 7em;
  }
  @media (max-width: 700px) {
    padding: 1.5em;
  }
  table {
    padding: 1em 0;
    tbody tr td {
      color: "#474747";
    }
    tr th {
      font-size: 0.7em;
      font-weight: lighter;
    }
    thead tr {
      --bs-table-bg: "#F1F1F1";
    }
  }
  span {
    padding: 0.5em;
    /* margin: 0.5em 0; */
    display: block;
    font-size: 1.2em;
    text-align: center;
    border-radius: 1em 1em 0 0;
  }
  button {
    color: #fff;
    border: none;
    padding: 0.5em 0.7em;
    font-size: 0.9em;
    border-radius: 0.5em;
    &:hover {
      box-shadow: 0 0 2px 3px #3e9045;
    }
  }
`;
