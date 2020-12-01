# Map over data

As we know so far in React we use jsx in order to write our markups. This lets us use javascript methods inside our tags which is a big advantage.
What does that mean? That we can use all kinds of fancy javascript methods like `map()`.

The `map()`is a method which iterates over an array and creates a new array with the results of calling a function for every array element.

Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it:

```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

```
This code logs [2, 4, 6, 8, 10] to the console.

Now that we know what `map()` is and how to use it let's try to put it into use in order to render a set of `<span />` displaying the numbers of the array with React.

```
const NumberList = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {numbers.map((number) => 
        <span>{number}</span>
      )}
    </div>
  );
};
```

If we run this code, we’ll be given a warning that a key should be provided for list items. 
A `key` is a special string attribute we need to include when creating lists of elements. **IMPORTANT** each `key` in a list should be a unique string value.

If we refactor the code to include the key we see that the warning is now gone.
```
const NumbersList = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {numbers.map((number) => 
        <span key={number.toString()}>
            {number}
        </span>
      )}
    </div>
  );
};
```
Go to the App.js file for exercise instructions!

When you are done, don't forget to commit your changes!
## Going to exercises

To go to the exercises, you have to switch to the relevant git branch.

For example, If I wanted to visit the components exercises, I would have to: `git checkout components`

Notice that if you have made changes in a branch and you switch to another one, your changes will carry over to the new branch. To avoid this:

Stage your changes: `git add --all`

Commit them: `git commit -m "Replace this example commit message"`

You are ready to checkout another exercise branch!