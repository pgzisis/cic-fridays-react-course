// Let's create our first Components! We would like to render on the browser a
// hello world message and a small introduction of ourselves!

// Our App component should return 2 Components! One called Hello, and one
// called Intro. Go to the Hello.js file to get started!

// We finished creating our Components, now let's see them in action! First, we
// have to import them. If I wanted to import a Component named Station, I would
// use the name of the Component and then the file it comes from:
// import { Station } from './Station';

// To use a Component named Station inside the App Component, I would do it like
// this:

/*
const App = () => {
  return (
    <div className="container">
      <Station />
    </>
  );
};
*/

// Notice that we are using the keyword className to specify our css class! The
// word class is a reserved JavaScript keyword and don't forget we are writing
// JavaScript with JSX after all!

// Put Hello and Intro inside the div! Congratulations you created your
// first React Components!

const App = () => {
  return <div className="container"></div>;
};

export default App;
