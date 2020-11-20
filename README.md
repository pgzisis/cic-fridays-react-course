# State

State is similar to props, but it is private and fully controlled by the component.

State was not always available for function components. It was added with [Hooks](https://reactjs.org/docs/hooks-intro.html).

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

## State Hook

```
import { useState } from 'react';

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Here, `useState` is a Hook. We call it inside a function component to add some local state to it. React will preserve this state between re-renders. `useState` returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else.

The only argument to `useState` is the initial state. In the example above, it is `0` because our counter starts from zero.

When state changes, a re-render of the component and its children occurs, just like props!

## Declaring multiple state variables

You can use the State Hook more than once in a single component:

```
const ExampleWithManyStates = () => {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

Go to the `App.js` file for exercise instructions!

When you are done, don't forget to commit your changes!

You can continue to the next exercise with: `git checkout lifting-state-up`

## Going to exercises

To go to the exercises, you have to switch to the relevant git branch.

For example, If I wanted to visit the components exercises, I would have to: `git checkout components`

Notice that if you have made changes in a branch and you switch to another one, your changes will carry over to the new branch. To avoid this:

Stage your changes: `git add --all`

Commit them: `git commit -m "Replace this example commit message"`

You are ready to checkout another exercise branch!