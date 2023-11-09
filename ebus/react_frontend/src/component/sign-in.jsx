import styled from "styled-components";
import {
  backgroundGrey,
  darkGreen,
  darkGrey,
  lightGreen,
  lightGrey,
  mainGreen,
} from "./element/utills";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SignBlock className="row">
      <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
        <h5>Авторизація</h5>
        <input type="email" placeholder="Електронна адреса" />
        <span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Пароль"
          />
          <i
            className={
              showPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
            }
            onClick={() => setShowPassword((prevState) => !prevState)}
          ></i>
        </span>
        <button>Увійти</button>
      </div>
      <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
        <p>Не маєте облікового запису?</p>
        <Link to={"/sign-up"}>Зареєструйтеся!</Link>
      </div>
    </SignBlock>
  );
}

export const SignBlock = styled.div`
  width: 100%;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    margin: 1em 2em;
    border-radius: 2.5em;
    background-color: ${backgroundGrey};
    font-family: "DiaFontRegular";
    h5 {
      font-size: 1.7em;
      margin: 0.7em;
    }
    p {
      color: ${darkGrey};
      margin: 0;
    }
    a {
      color: ${mainGreen};
      text-underline-offset: 0.2em;
      &:hover {
        color: ${darkGreen};
        text-shadow: 0px 0px 1px green;
      }
    }
    input[type="email"] {
      width: 90%;
      border-radius: 2.5em;
      margin: 0.7em;
      padding: 1em;
      border: 1px solid ${lightGrey};
      font-size: 0.9em;
      outline: none;
      color: ${darkGrey};
      &::placeholder {
        font-family: "DiaFontLight";
        font-weight: 400;
      }
    }
    span {
      width: 90%;
      border-radius: 2.5em;
      margin: 0.7em;
      padding: 1em;
      border: 1px solid ${lightGrey};
      font-size: 0.9em;
      color: ${darkGrey};
      background-color: #fff;
      input {
        width: 95%;
        outline: none;
        border: none;
        &::placeholder {
          font-family: "DiaFontLight";
          font-weight: 400;
        }
      }
      i {
        width: 5%;
      }
    }
    button {
      width: 50%;
      margin: 0.7em;
      border-radius: 2.5em;
      padding: 0.6em;
      background-color: ${mainGreen};
      color: #fff;
      border: 1px solid ${mainGreen};
      &:hover {
        background-color: ${lightGreen};
        /* border: 1px solid ${darkGreen}; */
        color: #000;
      }
      width: 50%;
    }
  }
`;
