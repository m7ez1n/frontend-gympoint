import React, { ReactElement } from 'react';

import * as S from './styles';

interface ILayout {
  children: ReactElement;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <S.LayoutMain>
        {children}
      </S.LayoutMain>
    </S.LayoutWrapper>
  )
}

export default Layout;
