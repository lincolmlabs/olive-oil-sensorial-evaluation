import React from "react";
import logo from "../../assets/logo-lfda.png";
import styled from "styled-components";
import { colorPalette } from "../../theme";

const StyledHeader = styled.header`
  position: relative;

  height: 96px;
  width: 100%;

  padding-left: 80px;
  padding-right: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${colorPalette.morningBlue100};

  @media (max-width: 760px) {
    display: none;
  }
  @media (max-height: 500px) {
    display: none;
  }
`;

const Image = styled.img`
  position: absolute;
  left: 80px;
  height: 80px;
  width: 80px;
`;

const Title = styled.h1`
  color: ${colorPalette.cultured100};
  font-size: 1.4rem;
  font-weight: 500;
`;

function Header() {
  return (
    <StyledHeader>
      <Image src={logo} alt="Logo do LFDA-RS" />
      <Title>Ficha de avaliação sensorial de azeite</Title>
    </StyledHeader>
  );
}

export { Header };
