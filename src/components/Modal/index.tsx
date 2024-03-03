import React, { ReactNode } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
// TODO: перенести сюда часть функционала из App.tsx

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
};
const Modal = ({ children, open, onClose }: ModalProps) => (
  <Backdrop
    open={open}
    sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  >
    {children}
    <Button onClick={onClose}>Закрыть</Button>
  </Backdrop>
);

export default Modal;
