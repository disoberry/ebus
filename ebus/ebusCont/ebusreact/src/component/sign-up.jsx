import { Link } from "react-router-dom";
import { SignBlock } from "./sign-in";
import { useState } from "react";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [reShowPassword, setReShowPassword] = useState(false);
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
          <button>Зареєструватися</button>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
          <p>У Вас є обліковий запис?</p>
          <Link to={"/sign-up"}>Увійдіть!</Link>
        </div>
      </SignBlock>
    );
}