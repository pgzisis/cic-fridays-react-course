# Handling Events

Hanlding events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

* React events are named using camelCase, rather than lowercase.
* With JSX you pass a function as the event handler, rather than a string.

For example, the HTML:

```
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

is slightly different in React:

```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

Another difference is that you cannot return `false` to prevent default behavior in React. You must call `preventDefault` explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:

```
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

in React, this could instead be:

```
const ActionLink = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

```

Here, `event` is a synthetic event. React defines these synthetic events according to the [W3C spec](https://www.w3.org/TR/DOM-Level-3-Events/), so you don’t need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the [SyntheticEvent](https://reactjs.org/docs/events.html) reference guide to learn more.

When you define a component, a common pattern is for an event handler to be a method within the component. For example, this `Alert` component renders a button which whenever is clicked, an alert is shown on the screen:

```
const Alert = () => {
  const handleClick = () => {
    alert('The button was clicked!');
  }

  return (
    <button onClick={handleClick}>
      Show Alert
    </button>
  )
}
```

Go to the `App.js` file for exercise instructions!

When you are done, don't forget to commit your changes!

You can continue to the next exercise with: `git checkout state`

## Going to exercises

To go to the exercises, you have to switch to the relevant git branch.

For example, If I wanted to visit the components exercises, I would have to: `git checkout components`

Notice that if you have made changes in a branch and you switch to another one, your changes will carry over to the new branch. To avoid this:

Stage your changes: `git add --all`

Commit them: `git commit -m "Replace this example commit message"`

You are ready to checkout another exercise branch!