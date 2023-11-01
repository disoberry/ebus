import { useState } from "react";
import styled from "styled-components";
import { darkGreen, darkGrey, lightGreen, mainGreen } from "./utills";
import { useLocation } from "react-router-dom";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

export default function Footer() {
  const [currentDate, setCurrentDate] = useState(getDate());
  const router = useLocation();
  return (
    <FooterBlock>
      {router.pathname.includes("buses-table") ? (
        <>
          <div className="row w-100 m-0 mainBlock justify-content-center">
            <div className="col-xl-4 col-lg-4 col-12 my-2">
              <h5>Про компанію</h5>
              <p>Про нас</p>
              <p>Контакти</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-12 my-2">
              <h5>Користувачам</h5>
              <p>Питання і відповіді</p>
              <p>Розташування</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-12 my-2">
              <h5>Наші партнери</h5>
              <p>MaRKIV</p>
              <p>НУВГП</p>
            </div>
          </div>

          <div
            className="bottomBlock"
          >
            © <b>{currentDate}</b>, єАвтобус — онлайн сервіс з продажу квитків.
            Всі права захищені.
          </div>
        </>
      ) : (
        <></>
      )}
    </FooterBlock>
  );
}

const FooterBlock = styled.div`
  font-family: "DiaFontRegular";
  color: ${darkGrey};
  .mainBlock {
    padding: 1.5em 3em;
    div {
      p:hover,
      h5:hover {
        cursor: pointer;
        color: #0e8136;
      }
      color: ${darkGreen};
      p {
        font-size: 1em;
        margin: 0.5em 0;
      }
      h5 {
        font-size: 1.2em;
        font-weight: 600;
      }
    }
  }
  div {
    background-color: ${lightGreen};
  }
  .bottomBlock {
    padding: 1.5em 3em;
    background-color: #aadda0;
    color: #fff;
  }
`;
