// Now that we know how to use map to loop over an array and display a tag, 
// let's try displaying a list of vegetables.

// In the Vegetable Component, we want to pass a prop named "name", which will 
// contain a string value with the vegetable name. Go to the Vegetable Component
// to get started.

// Now that the Vegetable component is expecting a vegetable name, Let's loop 
// through the myVeggies array and render a Vegetable component for each element 
// in the array. Replace the <div> with the loop.

// Let's take this one step further and see how we can update our array. As you 
// can see below we already have an input and a button. For the button there is 
// already a method which is responsible to add whatever the user typed to the 
// input on our new array. As you can see, when we want to update the state for 
// an array of elements in react, we have to pass the current state of the array 
// and return the new state back. What this line is doing 
// [...myVeggies, veggieInput] is copying the myVeggies array with the spread 
// operator and adding the input value on the end.

// **Hint To refresh your memory on how state works in react you can look back 
// on the state branch.

// But We're missing the event handler for our input which should update the 
// veggieInput state value. Let's try to do that.

// **Hint look on event-handlers branch if stuck.

// Congratulations, after putting everything together our list is being 
// updated on the fly.


import { useState } from 'react';

const App = () => {
  const [veggieInput, setVeggieInput] =  useState('');
  const [myVeggies, setMyVeggies] = useState(['potatoes', 'tomatoes']);

  const addRandomVeggie = () => {
      setMyVeggies((myVeggies) => [...myVeggies, veggieInput]);
  }

  return (
    <div className="container">
        <div>I want to display my veggies here</div>
        <input />
        <button onClick={addRandomVeggie}>Add to my Veggies</button>
    </div>
  );
};

export default App;
