import styled from "styled-components";
import { darkGreen, darkGrey, lightGreen, mainGreen } from "./element/utills";
import user_img from "../images/user-profile.png";
import quote_1 from "../images/quote 1.png";
import quote_2 from "../images/quote 2.png";
import free_icon_bus from "../images/free-icon-bus.png";
import { Link } from "react-router-dom";

export default function UserProfile() {
  return (
    <Block className="row w-100 justify-content-center">
      <div className="col-xl-9 col-lg-10 col-md-11 col-sm-11 col-11 ">
        <ul className="nav nav-pills mb-3 w-100" id="pills-tab" role="tablist">
          <li className="nav-item w-50" role="presentation">
            <button
              className="nav-link active"
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
          </li>
          <li className="nav-item w-50" role="presentation">
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
          </li>
        </ul>
        <div className="w-100 tab-content" id="pills-tabContent">
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
              <img src={quote_1} alt="quote" style={{ bottom: "4em" }} />
              <span className="col-xl-8 d-flex align-items-center">
                Зареєструвавшись на сайті, Ви маєте змогу з легкістю переглядати
                придбані Вами квитки. Для цього перейдіть на вкладку “Квитки”
                Вашого кабінету.
              </span>
              <img src={quote_2} alt="quote" style={{ bottom: "-4em" }} />
            </div>
            <div className="row exit-div w-100 d-flex justify-content-around">
              <span className="col-3">
                Хочете змінити профіль?
                <p>Вихід з профілю</p>
              </span>
              <span className="col-4"></span>
            </div>
          </div>
          <div
            className="tab-pane ticket-div fade w-100"
            id="pill-tickets"
            role="tabpanel"
            aria-labelledby="tickets-tab"
          >
            <div className="w-100 d-flex flex-column align-items-center">
              <img src={free_icon_bus} alt="icon bus" />
              <p className="m-0">У Вас поки що немає придбаних квитків.</p>
            </div>
          </div>
        </div>
      </div>
    </Block>
  );
}

const Block = styled.div`
  font-family: "DiaFontLight";
  .nav-link.active {
    border-bottom: 2.5px solid ${mainGreen};
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
