import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
