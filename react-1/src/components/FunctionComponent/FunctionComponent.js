import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';

import styles from './FunctionComponent.module.scss';

export const FunctionComponent = () => {
  let [counter, setCounter] = useState(0);
  let [open, setOpen] = React.useState(false);

  const onIncrement = () => {
    openWindows(); 
    setCounter(counter + 1);
  };
  
  const onDecrement = () => {
    openWindows(); 
    setCounter(counter - 1);
  };

  const openWindows = () => {
    let open = (counter >= 5 || counter <= -5) ? true : false;
      setOpen(open);
  };

  return (
    <div>
      <div>
        <Button onClickProp={onDecrement}>Decrement</Button>
        <Button onClickProp={onIncrement}>Increment</Button>
      </div>
      <p>{counter}</p>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};
