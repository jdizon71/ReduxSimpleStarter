import React, { Component } from 'react';

class SearchBar extends Component { // extends React.Component gives SearchBar functionality from React.Component class
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() { // syntax for defining methods on a class
    return (
      <div>
        <input
          value = { this.state.term }
          onChange = { event => this.setState({ term: event.target.value }) } />
        Value of the input: { this.state.term }
      </div>
    );
  }

};

// const SearchBar = () => { // functional component syntax
//   return <input />;
// };

export default SearchBar;
