import { useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-lfda.png";
import { colorPalette } from "../../theme";

const StyledHeader = styled.header`
  position: fixed;

  height: 96px;
  width: 100%;
  top: 0px;

  padding-left: 80px;
  padding-right: 80px;
  padding-top: 0px;

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
  position: fixed;
  left: 80px;
  height: 80px;
  width: 80px;
`;

const Title = styled.h1`
  color: ${colorPalette.cultured100};
  font-size: 1.4rem;
  font-weight: 500;
`;

const SubTitle = styled.h2`
  color: ${colorPalette.cultured100};
  font-size: 1.4rem;
  font-weight: 500;
`;

function Header() {
  const query = new URLSearchParams(useLocation().search);
  return (
    <StyledHeader>
      <Image src={logo} alt="Logo do LFDA-RS" />
      <Title>Ficha de avaliação sensorial de azeite.</Title>
      <SubTitle>Painel: {query.get("ps")}</SubTitle>
    </StyledHeader>
  );
}

export { Header };

