import styled from "styled-components";
import background from "../images/bus-table-background.png";
import {
  darkGreen,
  darkGrey,
  lightGreen,
  lightGrey,
  mainGreen,
} from "./element/utills";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import OnlineTable from "./element/online-table";

const animatedComponents = makeAnimated();

const dropdownValues = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
];

const days = [
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п’ятниця",
  "субота",
  "неділя",
];

export default function BusesTable() {
  function handleFocus(e) {
    e.target.parentElement.style.boxShadow = `0 0 2px 4px ${mainGreen}`;
  }
  function handleBlur(e) {
    e.target.parentElement.style.boxShadow = `none`;
  }
  return (
    <div>
      <TopBlock className="w-100 d-flex align-items-center justify-content-center">
        <div className="w-75 row d-flex align-items-center justify-content-center">
          <InputSpan className="col-xl-3 col-lg-3 col-md-5 col-sm-9 col-9 d-flex align-items-center justify-content-between">
            <i className="fa-solid fa-location-dot"></i>
            <input
              placeholder="Звідки"
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
            />
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </InputSpan>
          <InputSpan className="col-xl-3 col-lg-3 col-md-5 col-sm-9 col-9 d-flex align-items-center justify-content-between">
            <i className="fa-solid fa-location-dot"></i>
            <input
              placeholder="Куди"
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
            />
            <i className="fa-solid fa-square" style={{ color: "#ffffff" }}></i>
          </InputSpan>
          <DropdownSpan className="col-xl-2 col-lg-2 col-md-5 col-sm-9 col-9 d-flex">
            <span
              id="dropdown"
              className="d-flex align-items-center justify-content-between"
            >
              <i className="fa-regular fa-user"></i>
              <Select
                onFocus={() => {
                  document.getElementById(
                    "dropdown"
                  ).style.boxShadow = `0 0 2px 4px ${mainGreen}`;
                }}
                onBlur={() => {
                  document.getElementById("dropdown").style.boxShadow = `none`;
                }}
                closeMenuOnSelect={true}
                components={animatedComponents}
                defaultValue={1}
                options={dropdownValues}
                placeholder={"1"}
                styles={{
                  control: (base) => ({
                    ...base,
                    border: 0,
                    // This line disable the blue border
                    boxShadow: "none",
                  }),
                }}
                theme={(theme) => ({
                  ...theme,

                  colors: {
                    ...theme.colors,
                    primary25: lightGreen,
                    primary: "transparent",
                  },
                })}
              />
            </span>
          </DropdownSpan>
          <SearchBtn className="col-xl-2 col-lg-2 col-md-5 col-sm-9 col-9">
            Знайти
          </SearchBtn>
        </div>
      </TopBlock>
      <OnlineTable />
      <LocationBlock className="w-100 d-flex flex-column align-items-center">
        <Line> </Line>
        <h4>Розташування</h4>
        <Line> </Line>
        <div className="row justify-content-center h-75 w-100 mt-2">
          <div className="col-xl-4 col-lg-4 col-md-7 col-9">
            <InfoSpan className="d-flex justify-content-between align-items-start">
              <i className="fa-solid fa-location-dot"></i>
              <span>
                <h3>Адреса:</h3>
                <p>вул. Київська, 40, Рівне, Рівненська обл., 33004</p>
              </span>
            </InfoSpan>
            <InfoSpan className="d-flex justify-content-between align-items-start">
              <i className="fa-regular fa-clock"></i>
              <span>
                <h3>Графік роботи:</h3>
                <span>
                  {days.map((item) => (
                    <p key={item} className="row w-100 justify-content-between">
                      <span className="col m-0 p-0">{item}</span>
                      <span className="col m-0 p-0">05:30 - 23:00</span>
                    </p>
                  ))}
                  <p style={{fontSize: '0.75em', width: '80%'}}>
                    <span style={{color: darkGreen, fontWeight: "bold"}}>Комендантська година</span> у місті Рівне станом на 19.09.2023
                    триває з 00:00 до 05:00
                  </p>
                </span>
              </span>
            </InfoSpan>
            <InfoSpan className="d-flex justify-content-between align-items-start">
              <i className="fa-solid fa-phone"></i>
              <span>
                <h3>Телефони для довідки:</h3>
                <p>+ 38 (036) 263 69 14</p>
              </span>
            </InfoSpan>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-7 col-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.1441886196797!2d26.281215256907597!3d50.61494926930282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f132956986b91%3A0xd7533fea51251354!2z0JDQstGC0L7QstC-0LrQt9Cw0Lsg0KDRltCy0L3QtSAo0YbQtdC90YLRgNCw0LvRjNC90LjQuSk!5e0!3m2!1suk!2sua!4v1697799492509!5m2!1suk!2sua"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </LocationBlock>
    </div>
  );
}

const InfoSpan = styled.span`
  padding: 1em;
  i {
    color: ${mainGreen};
    margin-right: 1em;
    font-size: 1.5em;
    width: 1em;
    margin-top: 2px;
  }
  h3,
  p {
    font-size: 0.95em;
    margin: 0;
    padding-top: 5px;
  }
  h3 {
    color: #1e1e1e;
    font-weight: bold;
  }
  p {
    color: #5e5e5e;
  }
  span {
    width: 85%;
  }
`;

const Line = styled.span`
  display: block;
  height: 1.7px;
  width: 95%;
  background-color: #000;
  margin: 0.4em;
`;

const LocationBlock = styled.div`
  padding: 2em 1em;
  font-family: "DiaFontLight";
  background: #d6d6d643;
  /* height: 50vh; */
  h4 {
    margin: 0.3em;
  }
  iframe {
    padding: 0.2em;
    border: 2px solid ${darkGreen};
  }
`;

const SearchBtn = styled.button`
  border-radius: 0.8em;
  padding: 0.75em 1.2em;
  border: none;
  margin: 0.5em;
  color: #fff;
  background-color: ${mainGreen};
  &:hover {
    background-color: ${darkGreen};
  }
`;

const DropdownSpan = styled.span`
  span {
    background-color: #fff;
    padding: 0.3em;
    padding-left: 0.7em;
    border-radius: 0.8em;
    /* width: 7em; */
    width: 100%;
  }
  padding: 0;
  margin: 0.5em;
`;

const InputSpan = styled.span`
  background-color: #fff;
  padding: 0.3em 1em;
  margin: 0.5em;
  border-radius: 0.8em;
  /* width: 7em; */
  input {
    outline: none;
    border: none;
    margin: 0.5em;
    color: ${lightGrey};
    font-size: 0.9em;
    width: 80%;
  }
`;

const TopBlock = styled.div`
  font-family: "DiaFontLight";
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top top;
  height: 75vh;
  @media (max-width: 1110px) {
    height: 65vh;
  }
  @media (max-width: 850px) {
    height: 60vh;
  }
  @media (max-width: 740px) {
    height: 55vh;
  }
  @media (max-width: 640px) {
    height: 50vh;
  }
  @media (max-width: 560px) {
    height: 40vh;
  }
  i {
    font-size: 1.4em;
  }
  .fa-location-dot,
  .fa-user {
    color: ${mainGreen};
  }
  .css-b62m3t-container {
    /* width: 4.8em; */
    width: 100%;
    .css-1u9des2-indicatorSeparator {
      display: none;
    }
  }
`;
