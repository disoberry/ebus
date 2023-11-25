import QRCode from "react-qr-code";
import styled from "styled-components";
import { MainButton, darkGreen, lightGrey } from "./utills";
import { Router } from "react-router-dom";

export default function TicketCard({ status }) {
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
          <h2>Рівне - Київ</h2>
          <p>Рейс - 1</p>
          <p>Відправка о 18:00 </p>
          <p>Прибуття о 22:10 </p>
          <p>Місце : 58</p>
          <span className="pt-2 d-flex align-items-center">
            Cтатус:<h5>{status}</h5>
          </span>
        </section>
        <section className="col-5 d-flex flex-column align-items-center justify-content-center m-0 p-0">
          <QRCode
            style={{ height: "70%", width: "70%" }}
            title=""
            value={"Rivne-Kyiv, flight:1, seat:58, user:Iryna"}
            bgColor="#000"
            fgColor={"#fff"}
            // size={size === "" ? 0 : size}
          />
          <p style={{ margin: "0; !important" }}>ID 0000001</p>
          <p style={{ margin: "0; !important" }}>16.11.2023</p>
        </section>
      </div>
    </Card>
  );
}

const Card = styled.div`
  border: 2px solid ${darkGreen};
  padding: 1em;
  margin: 1em;
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
      }
    }
  }
`;

{
  /* <TicketCard className="row w-100 m-0 mb-2 justify-content-center align-items-center">
                <div className="mainblock col-xl-6 col-lg-7 col-md-8 col-sm-10 col-12">
                  <div className="row">
                    <section className="col-7 d-flex flex-column justify-content-center">
                      <h2>Рівне - Київ</h2>
                      <p>Рейс - 1</p>
                      <p>Відправка о 18:00 </p>
                      <p>Прибуття о 22:10 </p>
                      <p>Місце : 58</p>
                      <span className="pt-2 d-flex align-items-center">
                        Cтатус:<h5>Не дійсний</h5>
                      </span>
                    </section>
                    <section className="col-5 d-flex flex-column align-items-center justify-content-center m-0 p-0">
                      <QRCode
                        style={{ height: "70%", width: "70%" }}
                        title=""
                        value={"Rivne-Kyiv, flight:1, seat:58, user:Iryna"}
                        bgColor="#000"
                        fgColor={"#fff"}
                        // size={size === "" ? 0 : size}
                      />
                      <p style={{ margin: "0; !important" }}>ID 0000001</p>
                      <p style={{ margin: "0; !important" }}>16.11.2023</p>
                    </section>
                  </div>
                </div>
                <span className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-8 d-flex flex-column align-items-center">
                  <button className="my-2 not-valid-btn">Оплачено</button>
                </span>
              </TicketCard> */
}
// const TicketCard = styled.div`
//   .mainblock {
//     border: 2px solid ${darkGreen};
//     padding: 1em;
//     margin: 1em;
//     margin-bottom: 0;
//     color: #000;
//     div {
//       h2 {
//         font-size: 1.6em;
//         font-family: "DiaFontBold";
//       }
//       p {
//         font-size: 1em !important;
//       }
//       span {
//         font-size: 1em;
//         h5 {
//           font-size: 1.05em;
//           font-family: "DiaFontBold";
//           margin: 0;
//           padding-left: 0.5em;
//         }
//       }
//     }
//   }
//   span {
//     button {
//       ${MainButton}
//     }
//     .not-valid-btn {
//       border-color: ${lightGrey};
//       background-color: #b7b7b7;
//       color: #fff;
//       cursor: not-allowed;
//       &:hover {
//         background-color: ${lightGrey};
//         border-color: ${lightGrey};
//       }
//     }
//     p {
//       font-size: 1.1em !important;
//       color: #ff0000;
//     }
//   }
// `;
