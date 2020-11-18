// Now that we have made our components let's say that we want to pass some data to each one and render them

// In the Intro Component we want to pass a prop named "name" which will contain a string value with our name
// Go to the Intro Component to get started

// In the Hello Component we want to pass a prop named "currentTime" which will contain a string value with the current time
// Go to the Hello Component to get started

// Now both of our new components are expecting a prop to be passed to each and after doing so they will be rendered in each view.

// First let's try to pass our name to the Intro Component. In order to do so we just have to go to our jsx component
// and define the attribute of the prop we want to pass in our case "name" and assign the value to it.
// After doing so and saving our files we can see that the name is correctly displayed.

// Now We want to pass the current day in the Hello component. We can follow the previous steps but for actually getting the current day
// We will have to use our javascript knowledge. We can create a new variable which calculates the current time and pass that to the Hello component
// Or we can pass directly the implementation of the calculation of the current day. *Hint: Use new Date().toDateString()

import Hello from './Hello';
import Intro from './Intro';
import React from 'react';

const App = () => {
  return <div className="container">
        <Hello />
        <Intro />
  </div>;
};

export default App;
