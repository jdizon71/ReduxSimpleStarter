import React from 'react'; // ES6 import statement
import ReactDOM from 'react-dom'; // Used to render a component to the DOM

const API_KEY = '';

// Create a new component
// This component should generate some HTML

const App = () => { // ES6 syntax replaces `function` keyword with fat arrow
  return <div>Hi!</div>;
}

// After creating this component, we need to insert the component's generated HTML onto the page (DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
