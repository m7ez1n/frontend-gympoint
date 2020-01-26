import React from 'react';
import { TextField, Button } from '@material-ui/core';

import logo from '../../assets/logo.png';
import Layout from '../../components/Layout';
import * as S from './styles';

export const Signin: React.FC = () => {
  return (
    <Layout>
      <S.SigninWrapper>
        <img src={logo} alt="Gympoint-logo" />
        <TextField label="Email" variant="outlined" type="email" color="secondary" />
        <TextField label="Senha" variant="outlined" type="password" color="secondary" />
        <Button variant="contained" size="large">Entrar no sistema</Button>
      </S.SigninWrapper>
    </Layout>
  );
};
