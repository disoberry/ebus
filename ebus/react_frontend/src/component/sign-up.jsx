import { Link } from "react-router-dom";
import { SignBlock } from "./sign-in";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [reShowPassword, setReShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  function sendData() {
    // const response = fetch("http://127.0.0.1:8000/auth/register/", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: "test@gmail.com",
    //     password: "Qwerty1!",
    //   }),

    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Headers": "",
    //     // other possible headers
    //   },
    // });
    // console.log(response);
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "\napplication/json",
          Authorization: "YOUR_TOKEN",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@gmail.com",
          password: "Qwerty1!",
        }),
      };
    fetch("http://127.0.0.1:8000/auth/login/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <SignBlock className="row">
      <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
        <h5>Реєстрація</h5>
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
        <span>
          <input
            type={reShowPassword ? "text" : "password"}
            placeholder="Повторіть пароль"
          />
          <i
            className={
              reShowPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
            }
            onClick={() => setReShowPassword((prevState) => !prevState)}
          ></i>
        </span>
        <button type="submit" onClick={() => sendData()}>
          Зареєструватися
        </button>
      </div>
      <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
        <p>У Вас є обліковий запис?</p>
        <Link to={"/sign-up"}>Увійдіть!</Link>
      </div>
    </SignBlock>
  );
}
