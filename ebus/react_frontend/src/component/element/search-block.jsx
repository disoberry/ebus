import { darkGreen, lightGreen, lightGrey, mainGreen } from "../utils/utills";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import { uk } from "date-fns/locale/uk";
import { dropdownValues } from "../utils/data";
registerLocale("uk", uk);

const animatedComponents = makeAnimated();

export default function SearchBlock() {
  const [date, setDate] = useState(new Date());

  function handleFocus(e) {
    e.preventDefault();
    console.log(e);
    e.target.parentElement.style.boxShadow = `0 0 2px 4px ${mainGreen}`;
  }
  function handleBlur(e) {
    e.target.parentElement.style.boxShadow = `none`;
  }

  return (
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
      <InputSpan
        onFocus={(e) => {
          e.target.parentElement.parentElement.parentElement.style.boxShadow = `0 0 2px 4px ${mainGreen}`;
        }}
        onBlur={(e) => {
          e.target.parentElement.parentElement.parentElement.style.boxShadow = `none`;
        }}
        className="col-xl-3 col-lg-3 col-md-5 col-sm-9 col-9 d-flex align-items-center justify-content-start"
      > 
        <i
          className="fa-regular fa-calendar-days"
          style={{ color: `${mainGreen}` }}
        ></i>

        <DatePicker
          selected={date}
          onChange={(date) => {
            setDate(date);
            console.log(date);
          }}
          dateFormat="eeee, dd MMMM"
          locale="uk"
        />
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
  .react-datepicker__day--selected {
    background-color: ${mainGreen};
  }
  .react-datepicker__day--outside-month {
    color: lightgray;
  }
  .react-datepicker__day--weekend {
    color: ${darkGreen};
  }
  .react-datepicker__month {
    font-family: "DiaFontMedium";
  }
`;
