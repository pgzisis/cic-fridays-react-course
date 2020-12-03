// To begin we need to import our `useEffect` and `useState` hooks. `useEffect`
// will be used to fetch the remote URL when the component renders for the first
// time. `useState` will be used to store the URL in cour component.
import { useState } from 'react';

const Doggo = () => {
  const [imageURL, setImageURL] = useState('');

  const fetchRandomImageURL = async () => {
    // Here we will fetch the random dog image URL and save it in our
    // component's state. Create a variable called `response` which should
    // `await` JavaScript's `fetch` API to get a response from
    // `https://random.dog/woof.json`.

    // We need to parse our newly received response before using it! Create a
    // variable called `json` which will `await` for our `response` to be parsed
    // into a JSON by using `.json()`

    // Create another variable called `URL` which will use the `url` field
    // within the `json` object we just parsed.
    
    // Finally use the `setImageURL` to set the newly received image URL in our
    // component's state.
  };

  // This is where we are going to use our `useEffect` hook to receive the image
  // URL when the component mounts the DOM. In it's body it should call
  // `fetchRandomImageURL`. Also don't forget to supply an empty dependency
  // array at the end!

  return (
    <div>
      {imageURL ? (
        <img src={imageURL} alt="doggo" height="200px" width="200px" />
      ) : (
        <div>Waiting for an image</div>
      )}
    </div>
  );
};

export { Doggo };

// Congratulations you learned about async operations in React! For bonus points
// add a button, which when clicked will fetch another URL and display a new 
// image on the browser.