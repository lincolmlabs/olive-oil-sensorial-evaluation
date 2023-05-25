import styled from "styled-components";
import { colorPalette } from "../../theme";

export const StyledMain = styled.main`
  margin: 24px 48px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 760px) {
    display: none;
  }
  @media (max-height: 500px) {
    display: none;
  }
`;

export const SessionInfoSection = styled.section`
  width: 100%;
  height: 48px;
  padding: 0 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colorPalette.morningBlue80};
`;

export const SessionInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${colorPalette.cultured100};

  & > p {
    font-weight: 400;
    font-size: 1rem;
  }

  & > p:first-child {
    font-weight: 500;
    font-size: 1rem;
    margin-right: 16px;
  }
`;

export const StyledSection = styled.section`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1366px) {
    width: 64%;
  }

  @media (min-width: 1600px) {
    width: 48%;
  }
`;

export const SectionTitle = styled.h2`
  color: ${colorPalette.independence100};
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 32px;
`;

export const AttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;

export const AttributeOutterWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;

  &:first-of-type {
    margin-bottom: 128px;
  }
`;

export const CheckboxesSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 8%;
  row-gap: 24px;
  margin-bottom: 64px;
`;

export const FruityCheckboxesSection = styled.section`
  width: 32%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16%;
  row-gap: 24px;
  margin-left: 256px;

  @media (min-width: 1366px) {
    width: 24%;
  }
  @media (min-width: 1600px) {
    width: 12%;
  }
`;

export const ButtonsSection = styled.section`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1366px) {
    width: 64%;
  }
  @media (min-width: 1600px) {
    width: 48%;
  }
`;

export const PrimaryButton = styled.button`
  height: 40px;
  padding: 8px 40px;
  margin-right: 40px;
  color: ${colorPalette.cultured100};
  background-color: ${colorPalette.morningBlue100};
  border: 1px solid ${colorPalette.morningBlue100};
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background-color: ${colorPalette.morningBlue60};
    border: 1px solid ${colorPalette.morningBlue60};
    cursor: pointer;
  }
`;
export const SecondaryButton = styled.button`
  height: 40px;
  padding: 8px 32px;
  color: ${colorPalette.independence100};
  background-color: ${colorPalette.cultured100};
  border: 1px solid ${colorPalette.independence100};
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background-color: ${colorPalette.independence60};
    border: 1px solid ${colorPalette.independence60};
    color: ${colorPalette.cultured100};
    cursor: pointer;
  }
`;

export const Shadow = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background-color: ${colorPalette.independence100};
  opacity: 0.6;

  &.show {
    display: block;
    @media (max-width: 760px) {
      display: none;
    }
    @media (max-height: 500px) {
      display: none;
    }
  }
`;

export const MobileScreen = styled.div`
  @media (min-width: 760px) {
    display: none;
  }
  @media (max-width: 760px), (max-height: 500px) {
    display: block;
    padding: 100px 100px;
    text-align: center;
  }
`;

export const CalibrationModal = styled.div`
  display: none;

  &.show {
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 6% 2%;

    overflow-y: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 80%;
    width: 80%;

    background-color: white;

    @media (max-width: 760px) {
      display: none;
    }
    @media (max-height: 500px) {
      display: none;
    }
  }

  & label {
    width: 100%;
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${colorPalette.independence100};
    font-weight: 500;
    font-size: 0.8rem;
  }
`;

export const CalibrationScale = styled.input`
  width: ${props => `${props.size}pt`};

  -webkit-appearance: none;

  background: white;
  background-image: linear-gradient(
    ${colorPalette.independence80},
    ${colorPalette.independence80}
  );
  background-size: 0% 100%;
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0.1px;
    height: 100%;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    width: 100%;
    height: 8.4px;
    background: transparent;
    border-bottom: 2px solid ${colorPalette.independence80};
  }
`;

export const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;

  & > label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: ${colorPalette.independence100};
    font-weight: 400;
  }
`;

export const ScaleValueInput = styled.input.attrs({ type: "number" })`
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

export const CalibrationMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 80px;

  & p {
    color: ${colorPalette.independence100};
    font-size: 1.4rem;
  }

  & > p:last-child {
    margin-top: 40px;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
