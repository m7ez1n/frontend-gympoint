import React from "react";
import { Router } from "react-router-dom";
import history from "./services/history";

import { Signin } from "./pages/Signin";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <GlobalStyle />
        <Signin />
      </Router>
    </>
  );
};

export default App;
