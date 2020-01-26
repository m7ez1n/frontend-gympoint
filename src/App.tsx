import React from 'react';

import { Signin } from './pages/Signin';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Signin />
    </>
  );
}

export default App;
