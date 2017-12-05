import React, { Component } from 'react'; // ES6 import statement
import ReactDOM from 'react-dom'; // Used to render a component to the DOM
import YTSearch from 'youtube-api-search';
import _ from 'lodash'; // It is common to use `_` when importing lodash

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyAMv4EEYImFMpRPIIG6AiEozrWFsWmncU8';

// Create a new component
// This component should generate some HTML

class App extends Component { // ES6 syntax replaces `function` keyword with fat arrow
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
     }

     this.videoSearch('boosted boards');
  }

  videoSearch(term) { // callback for searching videos by `term`
    YTSearch({ key: API_KEY, term: term }, (videos) => { // `video` is arbitrary; you can whatever variable name you want
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); // The fat arrow function will only be called every 300 milliseconds

    return ( // For multiline JSX, it's best, but not required to use () to encapsulate the entire expression
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList
        onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
        videos={ this.state.videos } />
      </div>
    );
  }
};

// After creating this component, we need to insert the component's generated HTML onto the page (DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
