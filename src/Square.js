// As you can see the Square component has it's own stateful logic handling it's
// background color. We want it to share this stateful logic with the Circle
// component.

// Firstly remove this import.
import { useState } from 'react';

// To notify the App component of the click, we use props. Add the props
// parameter.
const Square = () => {
  // Also remove this line with the `useState`.
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    // Replace the line below with a call to the onClick function which lives
    // in the props object.
    setIsRed(!isRed);
  };

  // Now isRed will be supplied by props. Replace isRed with props.isRed.
  return <div className={isRed ? 'red' : 'green'} onClick={handleClick}></div>;
};

export { Square };

// When you are finished, go to Circle.js
