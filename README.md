# Lifting State Up

Often, several components need to reflect the same changing data. The recommended approach is to lift the state up to their closest common ancestor.

In other words, to collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

To demonstrate this we will create a `Display` component. It will contain a `Textarea` component where the user can type in, and a `Paragraph` component where the value of the `Textarea` will be shown.

To start, we will begin with the `Display` component:

```
const Display = () => {
  return (
    <div>
      <Textarea />
      <Paragraph />
    </div>
  );
};
```

Next the `Textarea` component:

```
const Textarea = () => {
  return <textarea />;
};
```

And the `Paragraph` component:

```
const Paragraph = () => {
  return <p></p>;
};
```

In the `Display` component, we will add the shared state, which the `Textarea` and `Paragraph` will sync upon:

```
const Display = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <Textarea />
      <Paragraph />
    </div>
  );
};
```

When a user types in the `Textarea` we want to detect the change, and send the new value to the `Display` component for saving. This can be achieved with props:

```
const Textarea = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return <textarea onChange={handleChange} />;
};
```

Now the `Display` component has to accept the changes from `Textarea` and save them in it's local state:

```
onst Display = () => {
  const [text, setText] = useState('');

  const handleChange = (newTextareaValue) => {
    setText(newTextareaValue);
  };

  return (
    <div>
      <Textarea onChange={handleChange} />
      <Paragraph />
    </div>
  );
};
```

Finally we pass the state of the `Display` component down to the `Paragraph` component with props:

```
onst Display = () => {
  const [text, setText] = useState('');

  const handleChange = (newTextareaValue) => {
    setText(newTextareaValue);
  };

  return (
    <div>
      <Textarea onChange={handleChange} />
      <Paragraph text={text} />
    </div>
  );
};
```

And the `Paragraph` component displays the text coming from props:

```
const Paragraph = (props) => {
  return <p>{props.text}</p>;
};
```

There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.

Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.

Go to the `App.js` file for exercise instructions!

When you are done, don't forget to commit your changes!

You can continue to the next exercise with: `git checkout loop-over-data`

## Going to exercises

To go to the exercises, you have to switch to the relevant git branch.

For example, If I wanted to visit the components exercises, I would have to: `git checkout components`

Notice that if you have made changes in a branch and you switch to another one, your changes will carry over to the new branch. To avoid this:

Stage your changes: `git add --all`

Commit them: `git commit -m "Replace this example commit message"`

You are ready to checkout another exercise branch!