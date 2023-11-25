import { css } from "styled-components";

export const darkGrey = "#494949";
export const lightGrey = "#848484";
export const backgroundGrey = "#EDEDED";
export const mainGreen = "#27C55D";
export const lightGreen = "#D4ECD0";
export const darkGreen = "#169F46";

export const MainButton = css`
  width: 70%;
  padding: 0.5em;
  border-radius: 1.2em;
  border: 2px solid ${mainGreen};
  background-color: ${lightGreen};
  &:hover {
    background-color: #000;
    color: #fff;
    border-color: #000;
  }
`;
export const NotValidBtn = css`
  width: 70%;
  padding: 0.5em;
  border-radius: 1.2em;
  border: 2px solid ${lightGrey};
  background-color: #b7b7b7;
  color: #fff;
  &:hover {
    background-color: ${lightGrey};
    border-color: ${lightGrey};
  }
`;
