import { Link, useNavigate } from "react-router-dom";
import { SignBlock } from "./Sign-in";
import { useRef, useState } from "react";
import { validateEmail, validatePassword } from "./element/validation";
import styled from "styled-components";
import { Toast } from "react-bootstrap";
import "./element/modal-styles.css";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [reShowPassword, setReShowPassword] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState("");
  const [show, setShow] = useState(false);
  const [errorToastMessage, setError] = useState("");

  function sendData() {
    let status = 0;
    if (emailValid == "" && passwordValid == "" && confirmPasswordValid == "") {
      fetch("http://127.0.0.1:8000/auth/register/", {
        method: "POST",
        headers: {
          Accept: "\napplication/json",
          Authorization: "YOUR_TOKEN",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          first_name: "name",
          last_name: "name",
        }),
      })
        .then((response) => {
          const data = response.json();
          status = response.status;
          return data;
        })
        .then((data) => {
          console.log(data);
          if (status === 200) {
            navigate("/sign-in");
          } else if (
            data.email[0] === "custom user m with this email already exists."
          ) {
            emailRef.current = "";
            passwordRef.current = "";
            confirmPasswordRef.current = "";
            setError("Користувач з такою електронною поштою вже існує.");
            setShow(true);
          } else {
            setError("Помилка");
            setShow(true);
          }
        });
    } else {
      setError("Заповніть всі поля правильно.");
      setShow(true);
    }
  }

  return (
    <>
      {" "}
      <SignBlock className="row">
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
          <h5>Реєстрація</h5>
          <input
            type="email"
            ref={emailRef}
            onChange={(e) => setEmailValid(validateEmail(e.target.value))}
            placeholder="Електронна адреса"
          />
          <ErrorText>{emailValid}</ErrorText>
          <span>
            <input
              type={showPassword ? "text" : "password"}
              ref={passwordRef}
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
          <span>
            <input
              type={reShowPassword ? "text" : "password"}
              ref={confirmPasswordRef}
              placeholder="Повторіть пароль"
              onChange={(e) =>
                setConfirmPasswordValid(
                  e.target.value === passwordRef.current.value
                    ? ""
                    : "Паролі не співпадають"
                )
              }
            />
            <i
              className={
                reShowPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
              }
              onClick={() => setReShowPassword((prevState) => !prevState)}
            ></i>
          </span>
          <ErrorText>{confirmPasswordValid}</ErrorText>
          <button type="submit" onClick={() => sendData()}>
            Зареєструватися
          </button>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
          <p>У Вас є обліковий запис?</p>
          <Link to={"/sign-in"}>Увійдіть!</Link>
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

export const ErrorText = styled.p`
  margin: 0;
  width: 85%;
  color: #e45c4d !important;
`;
