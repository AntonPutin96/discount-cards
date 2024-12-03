import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import classes from './modal.module.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}
const Modal = ({ children, open, onClose }: ModalProps) => (
  <Dialog
    open={open}
    onClose={onClose}
    fullScreen
    classes={{ paper: classes.paper }}
  >
    <div className={classes.content}>
      {children}
      <Button onClick={onClose} variant='outlined'>
        Закрыть
      </Button>
    </div>
  </Dialog>
);

export default Modal;
