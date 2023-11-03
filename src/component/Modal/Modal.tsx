import React, { useEffect } from 'react';
import { AiOutlineClose} from "react-icons/ai";

import {
  ModalBackground,
  ModalWrapper,
  ModalContent,
  ModalOverflow,
  ModalCloseButton,
  ModalSizeVariant,
} from './styles';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  size?: ModalSizeVariant;
  height?: number;
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  size,
  children,
  height,
}) => {
  useEffect(() => {
    if (show) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  return (
    <>
      {show && (
        <ModalWrapper>
          <ModalContent size={size || 'md'} height={height}>
            <ModalOverflow>{children}</ModalOverflow>
            <ModalCloseButton onClick={() => onClose()}>
              <AiOutlineClose />
            </ModalCloseButton>
          </ModalContent>
          <ModalBackground onClick={() => onClose()} />
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
