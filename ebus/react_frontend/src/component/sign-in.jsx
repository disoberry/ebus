import styled from "styled-components";
import {
  MainButton,
  backgroundGrey,
  darkGreen,
  darkGrey,
  lightGrey,
  mainGreen,
} from "./element/utills";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { validateEmail, validatePassword } from "./element/validation";
import { ErrorText } from "./Sign-up";
import { Toast } from "react-bootstrap";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
  const [show, setShow] = useState(false);
  const [errorToastMessage, setError] = useState("");
  const navigate = useNavigate();

  function sendData() {
    let status = 0;
    if (emailValid === "" && passwordValid === "") {
      fetch("http://127.0.0.1:8000/auth/login/", {
        method: "POST",
        headers: {
          Accept: "\napplication/json",
          Authorization: "YOUR_TOKEN",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      })
        .then((response) => {
          const data = response.json();
          status = response.status;
          return data;          
        })
        .then((data) => {
          if (status === 200) {
            localStorage.setItem("user", JSON.stringify(data));
            document.getElementById("check-user").innerText = "Кабінет";
            navigate("/user");
          } else {
            setShow(true);
            setError("Помилка");
          }
        });
    } else {
      setShow(true);
      setError("Заповніть всі поля правильно або зареєструйтесь.");
    }
  }
  return (
    <>
      <SignBlock className="row">
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
          <h5>Авторизація</h5>
          <input
            type="email"
            ref={emailRef}
            onChange={(e) => setEmailValid(validateEmail(e.target.value))}
            placeholder="Електронна адреса"
          />
          <ErrorText>{emailValid}</ErrorText>
          <span>
            <input
              ref={passwordRef}
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              onChange={(e) =>
                setPasswordValid(validatePassword(e.target.value))
              }
            />
            <i
              className={
                showPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
              }
              onClick={() => setShowPassword((prevState) => !prevState)}
            ></i>
          </span>
          <ErrorText>{passwordValid}</ErrorText>

          <button onClick={() => sendData()}>Увійти</button>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
          <p>Не маєте облікового запису?</p>
          <Link to={"/sign-up"}>Зареєструйтеся!</Link>
        </div>
      </SignBlock>
      <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <p className="m-0 me-auto">Сповіщення</p>
          {/* <small>11 mins ago</small> */}
        </Toast.Header>
        <Toast.Body className="p-2 d-flex align-items-center">
          <i
            className="fa-solid fa-circle-exclamation fa-xl"
            style={{ color: "#e45c4d" }}
          ></i>
          <p
            className="m-0 px-2"
            id={"error-toast-message"}
            style={{ fontSize: "1.15em" }}
          >
            {errorToastMessage}
          </p>
        </Toast.Body>
      </Toast>
    </>
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
      ${MainButton}
      width: 50%;
    }
  }
`;
