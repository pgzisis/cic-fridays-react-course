// Let's see the power of Lifting State Up! In this exercise we have two shapes:
// a square and a circle. When we click on the square, it's background color
// toggles between red and green. When we click on the circle, it's background
// color toggles between red and and blue. Our goal is, whenever we click on
// either shape, they both change colors, and either both of them are red, or
// they have separate colors (green and blue).

// To start go to Square.js

// Now both components are talking to the App component through their respective
// onClick props.

import { Square } from './Square';
import { Circle } from './Circle';
// Firstly import the `useState` hook from 'react'.

const App = () => {
  // Use the useState hook below. The name of the state should be `isRed`, the
  // name of the function that updates the state should be `setIsRed` and the
  // initial value of `useState` should be false.

  // Under this line create a `handleClick` arrow function. It should not have
  // any parameters and in it's body it should call the `setIsRed` function,
  // supplying it with the opposite value of the current state, `isRed`.

  return (
    <div>
      {/* Add to both components the `isRed` and `onClick` props. `isRed` should
      provide the value of the local state, and `onClick` should call the 
      // `handleClick` function*/}
      <Circle />
      <Square />
    </div>
  );
};

export default App;

// Now you should be able to see both shapes change colors simultaneously when
// you click them. Congratulations you learned Lifting State Up!
