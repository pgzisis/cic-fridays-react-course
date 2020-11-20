// To start using state, import the useState hook.

const Circle = () => {
  // Here we should call it. We should initialize it to false, and it should
  // return isRed and setIsRed.

  const handleClick = () => {
    // Here we should update the state to the opposite of it's current value.
  };

  // In `className` we want to add next to 'circle' either a 'red', or a 'blue'
  // css class. In conditional rendering we saw how with template literals and
  // the ternary expression we can achieve this, for example:
  // `${condition ? true : false}`.
  return <div className={`circle`} onClick={handleClick}></div>;
};

export { Circle };

// When you finish you should be a able to see a blue circle. When you click it,
// it should turn to red!. Congratulations you learned State!
