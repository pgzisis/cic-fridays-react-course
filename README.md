# Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Components come in two flavors, function and class components. In this course we will only cover function components. They are more powerful and as a result the popular choice.

The simplest way to define a component is to write a JavaScript function:

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
OR
```
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
}
```

To use them in another component:

```
const App = () => {
  return <Welcome name="Panos" />
}
```

Go to the `App.js` file for exercise instructions!

When you are done, don't forget to commit your changes!

You can continue to the next exercise with: `git checkout props`

## Going to exercises

To go to the exercises, you have to switch to the relevant git branch.

For example, If I wanted to visit the components exercises, I would have to: `git checkout components`

Notice that if you have made changes in a branch and you switch to another one, your changes will carry over to the new branch. To avoid this:

Stage your changes: `git add --all`

Commit them: `git commit -m "Replace this example commit message"`

You are ready to checkout another exercise branch!