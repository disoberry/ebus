import styled from "styled-components";
import { darkGrey, lightGreen, mainGreen } from "./element/utills";
import user_img from "../images/user-profile.png";

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
            <div className="row w-100 m-0 p-1 pt-5 align-items-center justify-content-between">
              <p className="col-6" style={{ fontSize: "1.5em" }}>
                Емейл Користувача
              </p>
              <img
                className="col-5"
                style={{ width: "10em" }}
                src={user_img}
                alt="user"
              />
            </div>
            <span className="gradient-span">
              <p>
                Зареєструвавшись на сайті, Ви маєте змогу з легкістю переглядати
                придбані Вами квитки. Для цього перейдіть на вкладку “Квитки”
                Вашого кабінету.
              </p>
            </span>
          </div>
          <div
            className="tab-pane fade"
            id="pill-tickets"
            role="tabpanel"
            aria-labelledby="tickets-tab"
          >
            Ticket's tab.
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
  .gradient-span {
    width: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 5%,
      rgba(212, 236, 208, 1) 30%,
      rgba(212, 236, 208, 1) 70%,
      rgba(255, 255, 255, 1) 95%
    );
   
  }
`;
