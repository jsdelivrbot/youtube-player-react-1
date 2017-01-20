import _ from 'lodash';
import React, {Component} from 'react'; // Create and manages components
import ReactDOM from 'react-dom'; // Interacts with actual DOM
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyBps4C-89dBw1_itUins9yxC2MIFaYkxwI';

// Create a new component. This component should produce some HTML

// we want the App function to keep track of the videos, so we need state and a class component

class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };
     this.videoSearch('climbing');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term : term}, (videos) =>{
      this.setState({ // we set an initial video
        videos:videos, // we pass list of videos onto this.state.videos
        selectedVideo: videos[0]
      });
      // same as (this.setState({videos:videos}))
    });
  }
  render (){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); //we pass function through debounce and returns a new function
                                                                            //that can only be called every 300 milliseconds
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

///// code with functional component, CANNOT manage state

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// Take this component's generated HTML and put it on the page (in the DOM)

// ReactDOM.render(App); // this is a class, not an instance. It will return an error.

// ReactDOM.render(<App />) this is an instance of the component App because it is wrapped in JSX tags
                            // but won't work because we haven't specified where to render

ReactDOM.render(<App />, document.querySelector('.container')); // tells it to render component into container.
