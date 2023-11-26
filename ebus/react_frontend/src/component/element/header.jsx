import { Link } from "react-router-dom";
import logo from "../../images/e-avtobus-logo.png";
import styled, { css } from "styled-components";
import { Container, Nav, Navbar } from "react-bootstrap";
import { darkGrey, lightGreen, mainGreen } from "./utills";

export default function Header() {
  return (
    <Block collapseOnSelect expand="lg">
      <div className="d-flex align-items-center justify-content-between">
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
      </div>
      <Navbar.Collapse className="" id="responsive-navbar-nav">
        <Nav className="me-auto items-bar">
          <Link className="item-link" to={"/buses-table"}>Табло Автобусів</Link>
          <Link className="item-link" to={"/routes"}>Маршрути</Link>
          <Link className="item-link" to={"/"}>Розташування</Link>
          <Link className="item-link" to={"/"}>Про нас</Link>
          <Link to={"/sign-in"}>
            <Btn>Увійти</Btn>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Block>
  );
}

export const MainButton = css`
  border-radius: 1.5em;
  border: 1px solid #000;
  padding: 0.4em 1.2em;
  margin: 0 1em;
  height: 2.7em;
  color: #fff;
  background-color: #000;
  font-family: "DiaFontRegular";

  &:hover,
  &:focus {
    border: 1px solid ${lightGreen};
    background-color: ${lightGreen};
    color: #000;
  }
`;

const Btn = styled.button`
  ${MainButton};
  width: 10em;
`;

const Block = styled(Navbar)`
  font-family: "DiaFontLight";
  div {
    @media (max-width: 993px) {
      width: 100%;
    }
    @media (min-width: 993px) {
      width: 20%;
    }
    img {
      height: 2.9em;
      background-color: #fff;
      padding: 0.5em;
    }
    .navbar-toggler {
      width: 3em;
      margin: 1em;
      padding: 0.45em;
      border: 1px solid ${darkGrey};
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:focus,
      &:hover {
        box-shadow: 0 0 3px 0.5px ${mainGreen};
        span {
          background-color: ${mainGreen} !important;
        }
      }
      border-radius: 0.5em;
      span {
        display: block;
        width: 90%;
        height: 4px;
        margin: 2px 0;
        background-color: ${darkGrey};
        border-radius: 2px;
      }

      @media (min-width: 991px) {
        visibility: hidden;
      }
    }
  }
  .items-bar {
    .item-link {
      text-decoration: none;
      padding: 0.5em 0;
      margin: 0 1em;
      color: ${darkGrey};
      background: linear-gradient(${mainGreen}, ${mainGreen}) bottom / 0 0.15em
        no-repeat;
      transition: 0.75s background-size;
      background-position: left bottom;
      display: flex;
      align-items: end;
      &:hover {
        background-size: 100% 0.15em;
      }
    }
    @media (min-width: 993px) {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: end;
      .item-link {
        width: calc(25%-1em);
        margin: 0 1.5em;
      }
    }
    @media (max-width: 991px) {
      /* width: 90vw; */
      box-shadow: 0 2px 2px -1px lightgray;
      padding-bottom: 1em;
      .item-link {
        width: calc(25% - 1em);
        margin-bottom: 0.5em;
      }
    }
  }
`;

// const HeaderLink = styled(Link)``;
