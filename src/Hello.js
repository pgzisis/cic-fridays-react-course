// Here in this component first we should pass the props object in the required parameters. See the README example.

// After doing so we just have to replace the *Today* with the "currentDay" field of our props object.

// In React You can pass a javascript variable inside a jsx tag simply by wrapping it in {}

import React from 'react';

const Hello = () => {
    return <h1>Hello World! *Today* is a lovely day to learn React</h1>;
};

export default Hello;