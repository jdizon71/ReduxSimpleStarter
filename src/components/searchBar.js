import React, { Component } from 'react';

class SearchBar extends Component { // extends React.Component gives SearchBar functionality from React.Component class
  render() { // syntax for defining methods on a class
    return <input onChange = { event => console.log(event.target.value) } />; // accesses what the user types within the <input /> and logs it to the console
  }

}

// const SearchBar = () => { // functional component syntax
//   return <input />;
// };

export default SearchBar;
