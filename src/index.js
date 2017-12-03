import React from 'react'; // ES6 import statement
import ReactDOM from 'react-dom'; // Used to render a component to the DOM

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyAMv4EEYImFMpRPIIG6AiEozrWFsWmncU8';

// Create a new component
// This component should generate some HTML

const App = () => { // ES6 syntax replaces `function` keyword with fat arrow
  return ( // For multiline JSX, it's best, but not required to use () to encapsulate the entire expression
    <div>
      <SearchBar />
    </div>
  );
};

// After creating this component, we need to insert the component's generated HTML onto the page (DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
