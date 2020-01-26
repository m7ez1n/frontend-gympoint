import styled from 'styled-components';
import { darken } from 'polished';

export const SigninWrapper = styled.section`
  width: 470px;
  height: 250px;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-top: -150px;
    margin-bottom: 70px;
  }

  div {
    margin-bottom: 15px;
  }

  input {
    width: 400px;
  }

  button {
    background-color: #EE4D64;
    color: #FFF;
    width: 430px;

    &:hover {
      background-color: ${darken(0.03, '#EE4D64')};
    }
  }
`;