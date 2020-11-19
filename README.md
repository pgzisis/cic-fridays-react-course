# Props

“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow.  
(one way from parent to child)

React is pretty flexible but it has a single strict rule:

All React components must act like pure functions with respect to their props.

Example of a component passing a prop to another component:
```
const Welcome = () => {
  return <Name name="John Doe" />;
}
```
OR
```
const Name = (props) => {
  return <h1>{props.name}</h1>;
}
```

Go to the `App.js` file for exercise instructions!

When you are done, don't forget to commit your changes!

You can continue to the next exercise with: `git checkout conditional-rendering`

## Going to exercises

To go to the exercises, you have to switch to the relevant git branch.

For example, If I wanted to visit the components exercises, I would have to: `git checkout components`

Notice that if you have made changes in a branch and you switch to another one, your changes will carry over to the new branch. To avoid this:

Stage your changes: `git add --all`

Commit them: `git commit -m "Replace this example commit message"`

You are ready to checkout another exercise branch!

## Exercise branches (ordered)

1. `components`
2. `props`
3. `conditional-rendering`