import styled from "styled-components";
import background from "../images/bus-table-background.png";
import { mainGreen } from "./utils/utills";
import OnlineTable from "./element/online-table";
import "react-datepicker/dist/react-datepicker.css";

import SearchBlock from "./element/search-block";

export default function BusTable() {
  return (
    <div>
      <TopBlock className="w-100 d-flex align-items-center justify-content-center">
        <SearchBlock />
      </TopBlock>
      <OnlineTable />
    </div>
  );
}

export const TopBlock = styled.div`
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
    height: 75vh;
  }
  @media (max-width: 640px) {
    height: 80vh;
  }
  @media (max-width: 560px) {
    height: 85vh;
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
