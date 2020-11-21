// In this component, go through the exact same steps as in the Square
// component!
import { useState } from 'react';

const Circle = () => {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div
      className={`circle ${isRed ? 'red' : 'blue'}`}
      onClick={handleClick}
    ></div>
  );
};

export { Circle };

// When you are finished, go to App.js
