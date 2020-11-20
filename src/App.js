// Let's play with event handling! In this exercise we will render an input and
// a button on the screen. When the button is clicked, or when the input's value
// has changed, an alert will be shown on the screen!

// To start, go to Input.js

import { Input } from './Input';
import { Button } from './Button';

const App = () => {
  return (
    <div>
      <Input />
      <Button />
    </div>
  );
};

export default App;
