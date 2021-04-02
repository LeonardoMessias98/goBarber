import React from 'react';
import {
 FiArrowLeft, FiMail, FiUser, FiLock,
} from 'react-icons/fi';

import Input from 'components/Input';
import Button from 'components/Button';
import logoImg from 'assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="logo" />
      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
        <Input name="email" icon={FiMail} type="text" placeholder="Email" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar
      </a>
    </Content>
  </Container>
);

export default SignUp;
