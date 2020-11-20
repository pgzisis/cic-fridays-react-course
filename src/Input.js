// Here, we render an input. When it's value changes, we want to show an alert
// on the screen.

const Input = () => {
  const handleChange = () => {
    alert("Input's value changed!");
  };

  // Add the onChange event handler on the input, which will call
  // handleChange upon change!
  return <input placeholder="Change Me" />;
};

export { Input };

// When done, go to Button.js
