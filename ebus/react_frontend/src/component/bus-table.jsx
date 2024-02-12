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
    
    </div>
  );
}



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
