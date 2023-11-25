import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import background from "../images/green-line.png";
import down_arrow_green from "../images/down-arrow-green.png";
import { darkGreen, darkGrey, lightGreen, lightGrey, mainGreen } from "./element/utills";
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
            <div className="row d-flex align-items-center justify-content-lg-between justify-content-center pb-2">
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
            <div className="row d-flex align-items-center justify-content-lg-between justify-content-md-between justify-content-sm-center justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-9 pt-1 d-flex align-items-center justify-content-sm-center justify-content-center">
                <div className="w-100 row d-flex align-items-center justify-content-lg-between justify-content-sm-center justify-content-center">
                  <span className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 m-0 p-0">
                    <span className="d-flex  justify-content-xl-between justify-content-lg-between justify-content-sm-center m-0 text-xl-start text-lg-start text-md-start text-sm-center text-center">
                      2 Рейс:
                      <p
                        className="m-0 pb-0"
                        style={{
                          fontFamily: "DiaFontBold",
                          paddingLeft: "15px",
                        }}
                      >
                        15:00 - 21:15
                      </p>
                    </span>
                  </span>
                  <span className="col-xl-4 col-lg-5 col-md-5 col-sm-7 col-7 d-flex m-0 p-0 justify-content-sm-center">
                    <OrderBtn
                      className="w-100 mx-lg-2 mx-md-2" 
                    >
                      Замовити
                    </OrderBtn>
                  </span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-9 pt-1 d-flex align-items-center justify-content-sm-center justify-content-center">
                <div className="w-100 row d-flex align-items-center justify-content-lg-between justify-content-sm-center justify-content-center">
                  <span className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 m-0 p-0">
                    <span className="d-flex  justify-content-xl-between justify-content-lg-between justify-content-sm-center m-0 text-xl-start text-lg-start text-md-start text-sm-center text-center">
                      2 Рейс:
                      <p
                        className="m-0 pb-0"
                        style={{
                          fontFamily: "DiaFontBold",
                          paddingLeft: "15px",
                        }}
                      >
                        15:00 - 21:15
                      </p>
                    </span>
                  </span>
                  <span className="col-xl-4 col-lg-5 col-md-5 col-sm-7 col-7 d-flex m-0 p-0 justify-content-sm-center">
                    <OrderBtn
                      className="w-100 mx-lg-2 mx-md-2" 
                    >
                      Замовити
                    </OrderBtn>
                  </span>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            <div className="row d-flex align-items-center justify-content-lg-between justify-content-center pb-2">
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
            <div className="row d-flex align-items-center justify-content-lg-between justify-content-md-between justify-content-sm-center justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-9 pt-1 d-flex align-items-center justify-content-sm-center justify-content-center">
                <div className="w-100 row d-flex align-items-center justify-content-lg-between justify-content-sm-center justify-content-center">
                  <span className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 m-0 p-0">
                    <span className="d-flex  justify-content-xl-between justify-content-lg-between justify-content-sm-center m-0 text-xl-start text-lg-start text-md-start text-sm-center text-center">
                      2 Рейс:
                      <p
                        className="m-0 pb-0"
                        style={{
                          fontFamily: "DiaFontBold",
                          paddingLeft: "15px",
                        }}
                      >
                        15:00 - 21:15
                      </p>
                    </span>
                  </span>
                  <span className="col-xl-4 col-lg-5 col-md-5 col-sm-7 col-7 d-flex m-0 p-0 justify-content-sm-center">
                    <OrderBtn
                      className="w-100 mx-lg-2 mx-md-2" 
                    >
                      Замовити
                    </OrderBtn>
                  </span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-9 pt-1 d-flex align-items-center justify-content-sm-center justify-content-center">
                <div className="w-100 row d-flex align-items-center justify-content-lg-between justify-content-sm-center justify-content-center">
                  <span className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 m-0 p-0">
                    <span className="d-flex  justify-content-xl-between justify-content-lg-between justify-content-sm-center m-0 text-xl-start text-lg-start text-md-start text-sm-center text-center">
                      2 Рейс:
                      <p
                        className="m-0 pb-0"
                        style={{
                          fontFamily: "DiaFontBold",
                          paddingLeft: "15px",
                        }}
                      >
                        15:00 - 21:15
                      </p>
                    </span>
                  </span>
                  <span className="col-xl-4 col-lg-5 col-md-5 col-sm-7 col-7 d-flex m-0 p-0 justify-content-sm-center">
                    <OrderBtn
                      className="w-100 mx-lg-2 mx-md-2" 
                    >
                      Замовити
                    </OrderBtn>
                  </span>
                </div>
              </div>
            </div>
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
  min-height: 54.2vh;
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

const OrderBtn = styled.button`
   background-color: ${mainGreen};
   color: #fff;
   border-radius: 1em;
   padding: 0.2em 1.2em;
   border: 1px solid ${darkGrey};
   &:hover {
    background-color: ${darkGrey};
   } 
`