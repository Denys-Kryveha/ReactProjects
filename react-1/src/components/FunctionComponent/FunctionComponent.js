import React, { useState } from 'react';
import { Button } from '../Button/Button';


import styles from './FunctionComponent.module.scss';

export const FunctionComponent = ({setOpen}) => {
  let [counter, setCounter] = useState(0);


  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    setCounter(counter - 1);
  };

  if (counter >= 6 || counter <= -6) {
    setOpen(true);
  };

  return (
    <div>
        <Button onClickProp={onDecrement}>Decrement</Button>
        <Button onClickProp={onIncrement}>Increment</Button>
      <p>{counter}</p>
    </div>
  );
};
