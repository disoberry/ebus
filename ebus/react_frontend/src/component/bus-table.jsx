import styled from "styled-components";
import background from "../images/bus-table-background.png";
import { mainGreen } from "./utils/utills";
import OnlineTable from "./element/online-table";
import "react-datepicker/dist/react-datepicker.css";
import logo from '../images/e-avtobus-logo.png'

import SearchBlock from "./element/search-block";

export default function BusTable() {
  return (
    <div>
      <TopBlock className="w-100 d-flex flex-column align-items-center justify-content-center">
        <img src={logo} alt="logo big" />
        <SearchBlock />
      </TopBlock>
      <OnlineTable />
    </div>
  );
}

export const TopBlock = styled.div`
img {
  background-color: #fff;
  width: 25%;
  border-radius: 32px;
  padding-right: 1.2em;
  margin-bottom: 1.5em;
}
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
    img {
      width: 40%;
    }
  }
  @media (max-width: 740px) {
    height: 75vh;
    img {
      width: 40%;
    }
  }
  @media (max-width: 640px) {
    height: 80vh;
    img {
      width: 40%;
    }
  }
  @media (max-width: 560px) {
    height: 80vh;
    img {
      width: 40%;
    }

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
