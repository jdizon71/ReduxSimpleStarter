import React, { Component } from 'react'; // ES6 import statement
import ReactDOM from 'react-dom'; // Used to render a component to the DOM
import YTSearch from 'youtube-api-search';

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

    YTSearch({ key: API_KEY, term: 'boosted board' }, (videos) => { // `video` is arbitrary; you can whatever variable name you want
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return ( // For multiline JSX, it's best, but not required to use () to encapsulate the entire expression
      <div>
        <SearchBar />
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
