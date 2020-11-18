// Let's do some conditional rendering! In this exercise we will render either a
// square or a circle depending on a variable called `shape`. To start, head to
// Square.js file!

// Now that we are done with the shapes, let's wrap this up! Replace the return
// statement with a regular if statement. If `shape` is equal to 'square' then
// we should return the Square component, otherwise, we should return the Circle
// component.

// Don't forget the isGreen and isRed boolean props on the Square and Circle
// components respectively!

import { Square } from './Square';
import { Circle } from './Circle';

const App = () => {
  const shape = 'square';

  return <div></div>;
};

export default App;

// When you are done adding the components, try flipping the values on the
// components` props, as well as on the `shape` variable. You should see changes
// in colors and shapes! Congratulations on learning Conditional Rendering!
