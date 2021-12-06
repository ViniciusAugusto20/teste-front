import React, { useCallback, useEffect, useState } from 'react';
import {
  IoAddCircleOutline,
  IoClose,
  IoCheckmarkCircleOutline,
  IoAlertCircleOutline,
} from 'react-icons/io5';

import {waitTime}  from '../../../utils/waitTime';

import { Container, Content, CloseButton } from './style';
import { ToastProps, MessageType } from './types';

type IconsType = {
  [K in MessageType]: JSX.Element;
};

const icons: IconsType = {
  success: <IoCheckmarkCircleOutline size={28} />,
  error: (
    <IoAddCircleOutline size={28} style={{ transform: 'rotateZ(45deg)' }} />
  ),
  warning: <IoAlertCircleOutline size={28} />,
  default: <IoAlertCircleOutline size={28} />,
};

const Toast: React.FC<ToastProps> = ({ message, removeToast }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const messageType = message.type || 'warning';

  const handleCloseToast = useCallback(async () => {
    setFadeOut(true);
    await waitTime(300);
    removeToast(message.key);
  }, [message.key, removeToast]);

  useEffect(() => {
    const time = setTimeout(handleCloseToast, 5000);

    return () => {
      clearTimeout(time);
    };
  }, [handleCloseToast]);

  return (
    <>
      <Container fadeOut={fadeOut} type={messageType}>
        <Content>
          {icons[messageType]}
          <span>{message.content}</span>
        </Content>
        <CloseButton onClick={handleCloseToast}>
          <IoClose size={20} color="#FFFFFF" />
        </CloseButton>
      </Container>
    </>
  );
};

export default Toast;
