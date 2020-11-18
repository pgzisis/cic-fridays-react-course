// In this component, just like with square, we want it to have a different
// background color according to a boolean prop named isRed. If isRed is true,
// then add a css class called 'red', otherwise, add a css class called 'purple'

// In this case we already have a css class and we want to add another one
// conditionally. One cool way to do it is with JavaScript template literals.
// For example:

/*
  const Table = () => {
    const hasFourLegs = true;

    return (
      <div className={`table ${hasFourLegs ? 'four-legs' : 'three-legs'}`}></div>
    );
  };
*/

const Circle = (props) => {
  return <div className={`circle`}></div>;
};

export { Circle };

// When you are finished go back to the App.js file to continue!
