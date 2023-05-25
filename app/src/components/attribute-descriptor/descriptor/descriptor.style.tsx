import styled from "styled-components";
import { colorPalette } from "../../../theme";

export const CheckboxWrapper = styled.div`
  justify-self: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &#green {
    grid-column: 3;
  }
  &#ripe {
    grid-column: 4;
  }
`;

export const CheckboxLabel = styled.label`
  color: ${colorPalette.independence100};
  font-weight: 400;
  font-size: 0.8rem;
`;

export const StyledCheckbox = styled.input`
  min-width: 32px;
  min-height: 32px;

  &:checked {
    appearance: none;
    background: ${colorPalette.independence100};
    border: 1px solid ${colorPalette.independence100};

    &::after {
      color: ${colorPalette.cultured100};
      font-size: 20px;
      font-weight: 600;
      content: "\\2713";
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
