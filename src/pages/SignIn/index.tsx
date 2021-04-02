import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from 'assets/logo.svg';

import { Background, Content, Container } from './styles';

const SignIn = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logoImg" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Email" />
          <input placeholder="Senha" type="password" />

          <button type="submit">Entrar</button>

          <a href="/forgot">Esqueci minha senha</a>
        </form>

        <a href="/register">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
