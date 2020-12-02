// Here is where our Clock lives! When our component mounts the DOM, we want to
// set an interval that will update the component's state with a new Date every
// second. Finally, before the component unmounts the DOM, it should clear the
// interval.

import { useEffect, useState } from "react";

const Clock = () => {
  // Let's initialize the component's state. `useState` should return an array
  // with the value `date` and the update function `setDate`. Initialize it with
  // `new Date()`.


  // We also need a function that will execute on every tick of the interval.
  // Create an arrow function called `tick` which will simply call `setDate` and
  // pass in a new Date.
  

  useEffect(() => {
    // Here is where the magic happens! Create a variable called `timer` which
    // will hold the interval (`setInterval`). `setInterval` should call the 
    // function named `tick` and this should happen every 1000 ms. 


    // Don't forget to clear the interval before the component unmounts the DOM!
    return () => {
      // Call `clearInterval` and pass in the `timer` we created earlier.
    }
    // Do you see the empty dependency array below? This ensures that the code 
    // inside the body of the `useEffect` callback function executes only once, 
    // when the component mounts!
  }, [])

  // Finally, render the `date` on the screen. Use `.toLocaleTimeString()` for
  // formatting!
  return <div>It is **enter date here**</div>;
};

export { Clock };

// You should be able to see a clock which updates automagically!
// Congratulations you learned about components' lifecycle and the `useEffect`
// Hook!
