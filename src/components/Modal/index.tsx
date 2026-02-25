import React, { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Delete';
import classes from './modal.module.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onRemove: () => void;
  children?: ReactNode;
}
const Modal = ({ children, open, onClose, onRemove }: ModalProps) => (
  <Dialog open={open} onClose={onClose} fullScreen>
    <DialogTitle className={classes.dialogTitle}>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <IconButton onClick={onRemove}>
        <RemoveIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent className={classes.content}>{children}</DialogContent>
  </Dialog>
);

export default Modal;
