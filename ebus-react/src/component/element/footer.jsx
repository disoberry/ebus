import { useState } from "react";
import styled from "styled-components";
import { darkGrey, mainGreen } from "./utills";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

export default function Footer() {
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <FooterBlock>
      <p className="m-0">
        © {currentDate} <span style={{color: mainGreen, fontWeight: 'bold'}}>MaRKIV</span> Company.{" "}
      </p>
    </FooterBlock>
  );
}

const FooterBlock = styled.div`
  background-color: #fff;
  font-family: "DiaFontRegular";
  color: ${darkGrey};
  padding: 1.5em 3em;
`;
