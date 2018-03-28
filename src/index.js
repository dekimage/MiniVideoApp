import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
//if file we create we must provide full path, if npm we dont need to
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCJT4j0xnhSfS7KhMNg9NI60QxhwuIhh8w';


//Step 1 create a new component.(HTML) JSX - looks like html
class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      videos:[],
      selectedVideo:null
    };

    this.videoSearch('Top 5 anime of 2016');
  }

  videoSearch(term) {
    YTsearch({key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo:videos[0]
      });
    });

  }

  render() {
    //we call this function with 300 so we can call it only every 300 miliseconds( just to slow it down)
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
     </div>
   );
 }
}


//Step 2 Show it in the DOM



//(app) is a 'class'that defines what should instance look like
// so we need to put it like this
//to make it an instance ( like a creation)
//1st argument is app -> what instance, 2nd arg = target destination
ReactDOM.render(<App />, document.querySelector('.container'));
