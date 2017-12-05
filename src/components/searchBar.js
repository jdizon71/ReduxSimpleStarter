import React, { Component } from 'react';

class SearchBar extends Component { // extends React.Component gives SearchBar functionality from React.Component class
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() { // syntax for defining methods on a class
    return (
      <div className="search-bar">
        <input
          value = { this.state.term }
          onChange = { event => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

// const SearchBar = () => { // functional component syntax
//   return <input />;
// };

export default SearchBar;
