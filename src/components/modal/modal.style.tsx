import styled from "styled-components";
import { colorPalette } from "../../theme";

export const StyledModal = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  height: 88%;
  width: 80%;

  overflow-y: auto;

  margin: auto;

  display: none;

  padding: 0 64px;

  background-color: white;

  box-shadow: 4px 4px 2px rgba(85, 91, 110, 0.64);

  & > section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  &.show {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  & > p {
    display: flex;
    font-size: 1.2rem;
    color: ${colorPalette.independence100};
    font-weight: 500;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  & > .resultsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  & > .resultsContainer > .resultWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 8px 8px;

    width: 100%;

    &.odd {
      background-color: ${colorPalette.independence60};
      color: white;
    }

    & > p {
      margin-right: 24px;
      font-weight: 400;
      font-size: 1rem;
    }

    & > p:last-child {
      text-align: end;
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;
