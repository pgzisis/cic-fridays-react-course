# Async

When creating a website a lot of times we have to perform asynchronous operations mostly for calling API endpoints or adding a timer in our functionalities and many other reasons.

In React we can very easily update the views of our components by using plain javascript and the `useEffect` life cycle hook.

React doesn't provide any pre built solution for working asynchronous operations but lets the developer pick his prefered solution (Promises, rxjs .etc).

Below we have an example of a component calling an api to receive a random fact about a cat
```
import React, { useState, useEffect } from 'react';

const Example = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    getCatFact();
  }, []);

  const getCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const jsonResponse = await response.json();

    setFact(jsonResponse.fact);
  }

  return (
      <div>
        <p>Your random cat fact of the day</p>
        <p>{fact}</p>
      </div>
  );
}
```

In the example above, we perform an API call to get a random cat fact. Inside our `useEffect` lifecycle hook which is performed once when our component is mounted.

Once the api call response is fetched and transformed into a json format we get the `fact` and use it to update our state making our component rerender.

Go to the App.js file for exercise instructions!

When you are done, don't forget to commit your changes!
## Going to exercises

To go to the exercises, you have to switch to the relevant git branch.

For example, If I wanted to visit the components exercises, I would have to: `git checkout components`

Notice that if you have made changes in a branch and you switch to another one, your changes will carry over to the new branch. To avoid this:

Stage your changes: `git add --all`

Commit them: `git commit -m "Replace this example commit message"`

You are ready to checkout another exercise branch!