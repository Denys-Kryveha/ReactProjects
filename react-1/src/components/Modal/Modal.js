import React from "react";

import { Button } from '../Button/Button';

import styles from './Modal.module.scss';

export const Modal = ({ open, setOpen }) => {
  return open ? (
    <div className={styles.modal}>
      <Button onClickProp={() => setOpen(false)}>Close</Button>
    </div>
  ) : null;
};