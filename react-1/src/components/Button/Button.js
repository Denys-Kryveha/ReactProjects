
import React from 'react';

import styles from './Button.module.scss';

export const Button = ({ children, onClickProp }) => (
  <button className={styles.button} onClick={onClickProp}>
    {children}
  </button>
);