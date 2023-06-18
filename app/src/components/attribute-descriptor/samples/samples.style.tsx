import styled from "styled-components";
import { colorPalette } from "../../../theme";

const StyledSampleScaleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;

const StyledAttributeLabel = styled.pre`
line-height: 1.4rem;
color: ${colorPalette.independence100};
font-weight: 500;
font-size: 1rem;
`;

const StyledAttributeScale = styled.select`
  &::hover {
    cursor: pointer;
  }
`;

const StyledAttributeWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: left;
  margin-bottom: 56px;
`;

export {
  StyledAttributeLabel,
  StyledAttributeScale,
  StyledAttributeWrapper,
  StyledSampleScaleWrapper,
};
