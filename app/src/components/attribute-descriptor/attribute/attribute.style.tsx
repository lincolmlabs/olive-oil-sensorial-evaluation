import styled from "styled-components";
import { colorPalette } from "../../../theme";

const StyledZeroCheckbox = styled.input`
  appearance: none;
  height: 16px;
  width: 16px;
  border: 1px solid ${colorPalette.independence80};

  &:checked {
    appearance: none;
    background: ${colorPalette.independence100};
    border: 1px solid ${colorPalette.independence100};

    &::after {
      color: ${colorPalette.cultured100};
      font-size: 10px;
      font-weight: 600;
      content: "\\2713";
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const StyledTextArea = styled.textarea`
  appearance: none;
  width: 440px;
  border: 1px solid ${colorPalette.independence80};

  &:checked {
    appearance: none;
    background: ${colorPalette.independence100};
    border: 1px solid ${colorPalette.independence100};

    &::after {
      color: ${colorPalette.cultured100};
      font-size: 10px;
      font-weight: 600;
      content: "\\2713";
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const StyledZeroLabel = styled.label`
  font-weight: 400;
  font-size: 0.8rem;
  color: ${colorPalette.independence80};
  margin-bottom: 8px;
  font-variant-numeric: slashed-zero;
`;

const StyledZeroScaleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledZeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  margin-right: 8px;
`;

const StyledAttributeLabel = styled.pre`
  width: fit-content;
  line-height: 1.4rem;
  color: ${colorPalette.independence100};
  font-weight: 500;
  font-size: 1rem;
`;

const StyledAttributeScale = styled.input`
  align-self: flex-end;

  width: ${props => props.size + "pt"};

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
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-bottom: 0.2px solid ${colorPalette.independence80};
  }

  &::hover {
    cursor: pointer;
  }
`;

const StyledAttributeWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
`;

const StyledSampleScale = styled.select`
  width: 440px;
  &::hover {
    cursor: pointer;
  }
`;

export {
  StyledAttributeLabel,
  StyledAttributeScale,
  StyledAttributeWrapper,
  StyledZeroCheckbox,
  StyledZeroLabel,
  StyledZeroScaleWrapper,
  StyledZeroWrapper,
  StyledSampleScale,
  StyledTextArea,
};
