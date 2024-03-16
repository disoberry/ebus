import QRCode from "react-qr-code";
import styled from "styled-components";
import { darkGreen, mainGreen } from "../utils/utills";
import { getCorrectDate } from "../Ticket-registration";

export default function TicketCard({ race, bus, seat }) {

  return (
    <Card
      className={`${
        window.location.href.includes("ready-ticket")
          ? "w-100"
          : "col-xl-6 col-lg-7 col-md-8 col-sm-10 col-12"
      }`}
    >
      <div className="row">
        <section className="col-7 d-flex flex-column justify-content-center">
          <h2>
            {bus?.fromWhere} – {bus?.toWhere}
          </h2>
          <p>Рейс - {race?.id}</p>
          <p>Відправка о {race?.timeFrom.slice(0, 5)} </p>
          <p>Прибуття о {race?.timeTo.slice(0, 5)} </p>
          <p>Місце : {seat}</p>
          <span className="pt-2 d-flex align-items-center">
            Cтатус:
            <h5
              style={{
                color:
                  new Date(race?.date).toLocaleDateString() >=
                  new Date().toLocaleDateString()
                    ? {darkGreen}
                    : "black",
              }}
            >
              {new Date(race?.date).toLocaleDateString() >=
              new Date().toLocaleDateString()
                ? "Активний"
                : "Не дійсний"}
            </h5>
          </span>
        </section>
        <section className="col-5 d-flex flex-column align-items-center justify-content-center m-0 p-0">
          <QRCode
            style={{ height: "70%", width: "70%", color: (new Date(race?.date).toLocaleDateString()) >=
            new Date().toLocaleDateString()
              ? "black"
              : "grey" }}
            title=""
            value={`${bus?.fromWhere}–${bus?.toWhere}, race:${
              race?.id
            }, seat:${seat}, user:${
              JSON.parse(localStorage.getItem("user")).user.email
            }`}
            bgColor="#000"
            fgColor={"#fff"}
            // size={size === "" ? 0 : size}
          />
          <p style={{ margin: "0; !important" }}>ID 000{bus?.id}{race?.id}{seat}</p>
          <p style={{ margin: "0; !important" }}>
            {getCorrectDate(race?.date)}
          </p>
        </section>
      </div>
    </Card>
  );
}

const Card = styled.div`
  border: 2px solid ${darkGreen};
  padding: 1em;
  margin: 1em;
  margin-left: 1em;
  margin-bottom: 0;
  color: #000;
  div {
    h2 {
      font-size: 1.6em;
      font-family: "DiaFontBold";
    }
    p {
      font-size: 1em !important;
    }
    span {
      font-size: 1em;
      h5 {
        font-size: 1.05em;
        font-family: "DiaFontBold";
        margin: 0;
        padding-left: 0.5em;
        color: ${darkGreen};
      }
    }
  }
`;