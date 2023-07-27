import styled from "styled-components";
import { colorPalette } from "../../theme";

export const LoginContainer = styled.div`
    width: 30%;
    height: 20%;
    position: relative;
    top: 35%;
    left: 35%;
    display: flex;
    align-items: center;
`;

export const LoginLeftInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    line-height: 32pt;
`;

export const LoginRightInnerContainer = styled.div`
    display: flex;
    flex: 1;
    margin-left: 1vw;
    flex-direction: column;
`;

export const LoginButtonsContainer = styled.div`
    position: relative;
    top: 31%;
    left: 55%;
    display: flex;
`;

export const LoginUsernameInput = styled.input.attrs({ type: "string" })`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
  }

  margin-left: 4%;
  height: 32px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: ${colorPalette.independence100};
  text-align: center;
  font-size: 1rem;
  color: ${colorPalette.independence100};

  &:focus {
    outline-color: ${colorPalette.apricot100};
  }
`;