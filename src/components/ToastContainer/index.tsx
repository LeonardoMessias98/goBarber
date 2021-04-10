import React from 'react';

import { ToastMessage } from 'hooks/ToastContext';
import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  messages,
}: ToastContainerProps) => {
  return (
    <Container>
      {messages.map((message: ToastMessage) => (
        <Toast message={message} key={message.id} />
      ))}
    </Container>
  );
};

export default ToastContainer;
