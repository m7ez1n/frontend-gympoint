import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";
import logoHeader from "../../assets/logo-header.png";

const Header: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <nav>
          <img src={logoHeader} alt="Logo Gympoint" />
        </nav>
        <Link to="/alunos">Alunos</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/matriculas">Matrículas</Link>
        <Link to="/pedidos">Pedidos de auxílio</Link>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};

export default Header;
