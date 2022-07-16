import React from 'react';
import { FunctionComponent } from './components/FunctionComponent/FunctionComponent';
import { Modal } from './components/Modal/Modal';

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <FunctionComponent setOpen = {setOpen} />
      <Modal open = {open} setOpen={setOpen} />
    </div>
  );
}

export default App;
