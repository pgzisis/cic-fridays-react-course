# Conditional Rendering

In React, you can create distinct components that encapsulate behaviour you need. Then, you can render only some of them, depending on the state of your application.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) or the [conditional operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) to create elements representing the current state, and let React update the UI to match them.

Consider these 2 components:

```
const MorningGreeting = () => {
  return <h1>Good Morning!</h1>;
}

const EveningGreeting = () => {
  return <h1>Good Evening!</h1>;
}
```

We'll create a Greeting component that displays either of these components depending on whether it's morning or evening:

```
const Greeting = (props) => {
  if (props.isMorning) {
    return <MorningGreeting />;
  }

  return <EveningGreeting />;
}

const App = () => {
  return <Greeting isMorning={false} />;
}
```

This example renders a different greeting depending on the value of `isMorning` prop.

## Inline If with Logical && Operator

You may [embed expressions in JSX](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) by wrapping them in curly braces. This includes the JavaScript logical `&&` operator. It can be handy for conditionally including an element:

```
const Mailbox = (props) => {
  return (
    <div>
      <h1>Hello!</h1>
      {props.unreadMessages.length > 0 && 
        <h2>
          You have {props.unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}

const App = () => {
  const messages = ['Message1', 'Message2', 'Message3'];

  return <Mailbox unreadMessages={messages}>;
}
```

In this example, if unreadMessages are present, an `h2` element is rendered with some text.

It works because in JavaScript, `true && expression` always evaluates to `expression`, and `false && expression` always evaluates to `false`.

Therefore, if the condition is `true`, the element right after `&&` will appear in the output. If it is `false`, React will ignore and skip it.

## Inline If-Else with Conditional Operator

Another method for conditionally rendering elements inline is to use the JavaScript conditional operator [`condition ? true : false`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

In the example below, we use it to conditionally render a small block of text:

```
const Ball = (props) => {
  return <h1>This ball is {props.isRed ? 'red' : 'white'}</h1>;
}
```

It can also be used for larger expressions:

```
const Ball = (props) => {
  return (
    <div>
      {props.isRed ? <RedBall /> : <WhiteBall />}
    </div>
  )
}
```

Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable. Also remember that whenever conditions become too complex, it might be a good time to [extract a component](https://reactjs.org/docs/components-and-props.html#extracting-components).

Go to the `App.js` file for exercise instructions!

When you are done, don't forget to commit your changes!

You can continue to the next exercise with: `git checkout handling-events`

## Going to exercises

To go to the exercises, you have to switch to the relevant git branch.

For example, If I wanted to visit the components exercises, I would have to: `git checkout components`

Notice that if you have made changes in a branch and you switch to another one, your changes will carry over to the new branch. To avoid this:

Stage your changes: `git add --all`

Commit them: `git commit -m "Replace this example commit message"`

You are ready to checkout another exercise branch!