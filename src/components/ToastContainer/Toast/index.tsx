import React, { useCallback, useEffect, useState } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from 'hooks/ToastContext';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

function Toast({ message }: ToastProps) {
  const [willRemoveToast, setWillRemoveToast] = useState(false);
  const { removeToast } = useToast();

  const handleRemoveToast = useCallback(
    (id: string) => {
      setWillRemoveToast(true);
      setTimeout(() => {
        removeToast(id);
      }, 380);
    },
    [removeToast],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      handleRemoveToast(message?.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message?.id, handleRemoveToast]);

  return (
    <Container
      hasDescription={!!message?.description}
      type={message?.type}
      willRemoveToast={willRemoveToast}
    >
      {icons[message?.type || 'info']}

      <div>
        <strong>{message?.title}</strong>
        {!!message?.description && <p>{message?.description}</p>}
      </div>

      <button type="button" onClick={() => handleRemoveToast(message?.id)}>
        <FiXCircle />
      </button>
    </Container>
  );
}

export default Toast;
