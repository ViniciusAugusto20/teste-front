import React from 'react';
import { Toast } from '../../index';

import { Container } from './style';
import { ToastContainerProps } from './types';

const ToastContainer: React.FC<ToastContainerProps> = ({
  messages,
  removeToast,
}) => {
  return (
    <>
      {messages.length > 0 && (
        <Container>
          {messages.map((message) => (
            <Toast
              key={message.key}
              message={message}
              removeToast={removeToast}
            />
          ))}
        </Container>
      )}
    </>
  );
};

export default ToastContainer;
