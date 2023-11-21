import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import background from "../images/green-line.png";
import down_arrow_green from "../images/down-arrow-green.png";
import { darkGreen, lightGreen, mainGreen } from "./element/utills";
export default function RoutesPage() {
  return (
    <MainBlock className="d-flex flex-column align-items-center">
      <Title className="w-100 d-flex align-items-center">
        <i className="fa-solid fa-route"></i>
        <p>Маршрути</p>
      </Title>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <div className="row d-flex align-items-center justify-content-lg-between justify-content-center">
              <DaysBlock className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 d-flex justify-content-lg-start justify-content-md-start justify-content-sm-start justify-content-center">
                <button>Пн</button>
                <button>Вт</button>
                <button>Ср</button>
                <button>Чт</button>
                <button>Пт</button>
              </DaysBlock>
              <CostBlock className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 d-flex justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-center">
                Вартість: <p>75 UAH</p>
              </CostBlock>
            </div>
            <div className="row d-flex align-items-center justify-content-lg-between justify-content-center">
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-10 d-flex align-items-center">
                <div className="row d-flex align-items-center justify-content-lg-between justify-content-center">
                  <p className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 mb-0">
                    2 Рейс: 15:00 - 21:15
                  </p>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 ">
                    <button>Замовити</button>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-10 d-flex align-items-center">
                <div className="row d-flex align-items-center justify-content-lg-between justify-content-center">
                  <p className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 mb-0">
                    2 Рейс: 15:00 - 21:15
                  </p>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 ">
                    <button>Замовити</button>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </MainBlock>
  );
}

const CostBlock = styled.span`
  padding-right: 1.5em;
  @media (max-width: 575px) {
    padding: 0;
  }
  p {
    margin: 0;
    padding-left: 10px;
    font-family: "DiaFontBold";
    color: ${darkGreen};
    text-decoration: underline 2px solid ${darkGreen};
    &:hover {
      cursor: pointer;
      color: ${mainGreen};
      text-decoration-color: ${mainGreen};
    }
  }
`;

const DaysBlock = styled.span`
  button {
    border: none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    margin-right: 0.4em;
    font-family: "DiaFontBold";
    color: ${darkGreen};
    &:hover {
      color: ${mainGreen};
    }
  }
`;

const MainBlock = styled.div`
  font-family: "DiaFontLight";
  .accordion {
    width: 85%;
    .accordion-item {
      margin: 0.25em;
      border-radius: 10px;
      box-shadow: none;
      border-color: transparent;
    }
    .accordion-header {
      border-radius: 7px;
      border: 1px solid rgba(94, 94, 94, 0.3);
    }
    .accordion-header:not(.collapsed) {
      border-radius: 7px;
    }
    .accordion-button:not(.collapsed) {
      background-color: transparent;
      border-color: transparent;
      border: none !important;
      border-radius: 7px !important;
      box-shadow: none;
      color: #000;
      &::after {
        background-image: url(${down_arrow_green});
      }
    }
    .accordion-button {
      border-radius: 7px !important;
      border-color: transparent !important;
    }
    .accordion-button:focus {
      box-shadow: none;
      background-color: transparent;
      box-shadow: none;
      border-radius: 7px;
      border-color: transparent;
    }
    .accordion-collapse {
      box-shadow: none;
      border: 1px solid rgba(94, 94, 94, 0.3);
      border-radius: 7px;
      background-color: ${lightGreen};
    }
  }
`;

const Title = styled.div`
  padding: 0.5em;
  height: 50px;
  background: url(${background});
  background-repeat: repeat-x;
  background-position: center;
  padding-left: 6em;
  padding-bottom: 0.5em;
  margin-bottom: 1.5em;
  p {
    font-size: 1.8em;
    margin: 0;
    padding: 0 0.5em;
  }
  i {
    font-size: 1.9em;
  }
  p,
  i {
    background-color: #fff;
  }
  @media (max-width: 912px) {
    padding-left: 4em;
  }
  @media (max-width: 567px) {
    padding-left: 3em;
    p {
      font-size: 1.6em;
    }
  }
`;
