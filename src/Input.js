// Here, we render an input. When it's value changes, we want to show an alert containing the input text
// on the screen.

// It's important to know that some event handlers also have access to the html event object
// Such an event handler is the onChange input handler which has access to
// the event.currentTarget.value field which contains the input.

const Input = () => {
  const handleChange = (event) => {
    alert(event.currentTarget.value);
  };

  // Add the onChange event handler on the input, which will call
  // handleChange upon change!
  return <input placeholder="Change Me" />;
};

export { Input };

// When done, go to Button.js
