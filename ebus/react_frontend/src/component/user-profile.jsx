import styled from "styled-components";
import {
  MainButton,
  NotValidBtn,
  darkGreen,
  darkGrey,
  lightGreen,
  lightGrey,
  mainGreen,
} from "./element/utills";
import user_img from "../images/user-profile.png";
import quote_1 from "../images/quote 1.png";
import quote_2 from "../images/quote 2.png";
import free_icon_bus from "../images/free-icon-bus.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TicketCard from "./element/ticket-card";

export default function UserProfile({ link }) {
  const [displayed, setDisplayed] = useState(false);

  function normalizeTabs(link_) {
    const profile_tab = document.getElementById("user-tab");
    const tickets_tab = document.getElementById("tickets-tab");
    const user_div = document.getElementById("pill-user");
    const tickets_div = document.getElementById("pill-tickets");
    if (link_ === "profile") {
      profile_tab.className = "nav-link active";
      tickets_tab.className = "nav-link";
      user_div.classList.add("show");
      user_div.classList.add("active");
      tickets_div.classList.remove("show");
      tickets_div.classList.remove("active");
    }
    if (link_ === "tickets") {
      tickets_tab.className = "nav-link active";
      profile_tab.className = "nav-link";
      tickets_div.classList.add("show");
      tickets_div.classList.add("active");
      user_div.classList.remove("show");
      user_div.classList.remove("active");
    }
  }
  useEffect(() => {
    normalizeTabs(link);
  }, []);
  return (
    <Block className="row m-0 w-100 justify-content-center">
      <div className="col-xl-9 col-lg-10 col-md-11 col-sm-11 col-11 ">
        <ul className="nav nav-pills mb-3 w-100" id="pills-tab" role="tablist">
          <li className="nav-item w-50" role="presentation">
            <Link to="/user/profile" onClick={() => normalizeTabs("profile")}>
              <button
                className="nav-link"
                id="user-tab"
                data-bs-toggle="pill"
                data-bs-target="#pill-user"
                type="button"
                role="tab"
                aria-controls="pill-user"
                aria-selected="true"
              >
                Користувач
              </button>
            </Link>
          </li>
          <li className="nav-item w-50" role="presentation">
            <Link to="/user/tickets" onClick={() => normalizeTabs("tickets")}>
              <button
                className="nav-link"
                id="tickets-tab"
                data-bs-toggle="pill"
                data-bs-target="#pill-tickets"
                type="button"
                role="tab"
                aria-controls="pill-tickets"
                aria-selected="false"
              >
                Квитки
              </button>
            </Link>
          </li>
        </ul>
        <div className="w-100 m-0 tab-content" id="pills-tabContent">
          <div
            className="w-100 tab-pane fade show active"
            id="pill-user"
            role="tabpanel"
            aria-labelledby="user-tab"
          >
            <div className="row w-100 m-0 py-3 p-1 pt-5 align-items-center justify-content-around">
              <p className="col-6 m-0" style={{ fontSize: "1.5em" }}>
                Емейл Користувача
              </p>
              <img
                className="col-5"
                style={{ width: "10em" }}
                src={user_img}
                alt="user"
              />
            </div>
            <div className="brief d-flex justify-content-center">
              <img className="quote_1" src={quote_1} alt="quote" />
              <span className="col-xl-8 d-flex align-items-center">
                Зареєструвавшись на сайті, Ви маєте змогу з легкістю переглядати
                придбані Вами квитки. Для цього перейдіть на вкладку “Квитки”
                Вашого кабінету.
              </span>
              <img className="quote_2" src={quote_2} alt="quote" />
            </div>
            <div className="row exit-div w-100 d-flex justify-content-around">
              <span className="col-3">
                Хочете змінити профіль?
                <p>Вихід з профілю</p>
              </span>
              <span className="col-4"></span>
            </div>
          </div>
          <TicketsTab
            className="tab-pane ticket-div fade w-100 m-0 d-flex flex-column justify-content-between"
            id="pill-tickets"
            role="tabpanel"
            aria-labelledby="tickets-tab"
          >
            {/* if user doesnt have tickets */}
            {/* <div
              className="w-100 d-flex flex-column align-items-center justify-content-center"
              style={{ height: "60vh" }}
            >
              <img src={free_icon_bus} alt="icon bus" />
              <p className="m-0 text-center">
                У Вас поки що немає придбаних квитків.
              </p>
            </div> */}
            <div className="w-100 py-4">
              <div className="row w-100 m-0 mb-2 justify-content-center align-items-center">
                <TicketCard status={"Не активований"} />
                <span className="ticket-activator col-xl-4 col-lg-4 col-md-6 col-sm-8 col-8 d-flex flex-column align-items-center">
                  {/* <button
                    className={`my-2 ${
                      status === "Не дійсний" ? "not-valid-btn" : ""
                    }`}
                  >
                    {status === "Не дійсний" ? "Оплачено" : "Оплатити"}
                  </button>
                  {status !== "Не дійсний" ? <p>Залишилося 9:41 хв.</p> : <></>} */}
                  <button className={`my-2`}>Оплатити</button>
                  <p>Залишилося 9:41 хв.</p>
                </span>
              </div>
              <div className="row w-100 m-0 mb-2 justify-content-center align-items-center">
                <TicketCard status={"Не дійсний"} />
                <span className="ticket-activator col-xl-4 col-lg-4 col-md-6 col-sm-8 col-8 d-flex flex-column align-items-center">
                  <button className={`my-2 not-valid-btn`}>Оплачено</button>
                </span>
              </div>
              <div className="row w-100 m-0 mb-2 justify-content-center align-items-center">
                <TicketCard status={"Не дійсний"} />
                <span className="ticket-activator col-xl-4 col-lg-4 col-md-6 col-sm-8 col-8 d-flex flex-column align-items-center">
                  <button className={`my-2 not-valid-btn`}>Оплачено</button>
                </span>
              </div>
            </div>
            <span className="d-flex align-items-center pt-3">
              <i
                className={`fa-solid fa-left-long fa-2xl
                  ${displayed ? "fa-bounce" : ""}`}
                style={{ color: displayed ? `${darkGreen}` : "#000" }}
              ></i>
              <p className="m-0 mx-2">Cторінка</p>
              <Link
                to={"/routes"}
                onMouseEnter={() => setDisplayed(true)}
                onMouseLeave={() => setDisplayed(false)}
              >
                Маршрути
              </Link>
            </span>
          </TicketsTab>
        </div>
      </div>
    </Block>
  );
}

const TicketsTab = styled.div`
  min-height: 60vh;
  a,
  p {
    font-size: 1.1em;
  }
  a {
    color: ${mainGreen};
    text-underline-offset: 2px;
    &:hover {
      color: ${darkGreen};
      text-decoration-thickness: 2px;
    }
  }
  @media (min-width: 992px) {
    img {
      width: 14rem;
    }
  }
  @media (max-width: 991px) {
    img {
      width: 12rem;
    }
    p {
      font-size: 0.9em;
    }
  }
  .ticket-activator {
    button {
      ${MainButton}
    }
    .not-valid-btn {
      ${NotValidBtn}
      cursor: not-allowed;
    }
    p {
      font-size: 1.1em !important;
      color: #ff0000;
    }
  }
`;
const Block = styled.div`
  font-family: "DiaFontLight";
  .nav-link.active {
    border-bottom: 2.5px solid ${mainGreen};
  }
  a {
    text-decoration: none;
  }
  .nav-link {
    border-bottom: 2.5px solid ${lightGreen};
  }
  .nav-link,
  .nav-link.active {
    color: ${darkGrey};
    background-color: transparent;
    border-radius: 0;
    font-size: 1.4em;
    width: 100%;
  }
  .brief {
    width: 100%;
    background: ${lightGreen};
    padding: 2em 0;
    margin: 2em 0;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    span {
      background: transparent;
      margin: 0;
      color: ${darkGrey};
    }
    img {
      position: relative;
      width: 4em;
      height: 4em;
    }
    .quote_1 {
      bottom: 4.5em;
    }
    .quote_2 {
      bottom: -4.8em;
    }
    @media (max-width: 1200px) {
      .quote_1 {
        bottom: 4em;
        left: 1.5em;
      }
      .quote_2 {
        bottom: -4em;
        right: 1.5em;
      }
      img {
        width: 3em;
        height: 3em;
      }
    }
    @media (max-width: 891px) {
      .quote_2 {
        bottom: -5.5em;
        right: 1.5em;
      }
    }
    @media (max-width: 666px) {
      .quote_2 {
        bottom: -7em;
        right: 1.5em;
      }
    }
    @media (max-width: 519px) {
      .quote_2 {
        bottom: -8.5em;
        right: 1.5em;
      }
    }
    @media (max-width: 473px) {
      .quote_2 {
        bottom: -10em;
        right: 1.5em;
      }
    }
  }
  .exit-div {
    span {
      color: ${darkGrey};
      font-size: 0.95em;
      p {
        color: ${mainGreen};
        text-decoration: underline 2px ${mainGreen};
        font-size: 1.12em;
        text-underline-offset: 3px;
        &:hover {
          color: ${darkGreen};
          text-decoration-color: ${darkGreen};
          cursor: pointer;
        }
      }
    }
  }
  .ticket-div {
    p {
      margin: 0;
      font-size: 1.2em;
    }
  }
`;
