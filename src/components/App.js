import React from 'react';
import Bulma from '../../node_modules/bulma/css/bulma.css';
import SearchBar from './Searchbar';
import Navbar from './Navbar';
import youtube from '../api/youtubeAPI';
import VideoList from './VideoList';
import VideoDetail from './VideoPlayer';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  //API call
  onTermSubmit = (searchterm) => {
    youtube
      .get('/search', {
        params: {
          q: searchterm,
        },
      })
      .then((res) => {
        // console.log(res.data.items);
        this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1 className="has-text-centered title">Youtube Search Engine</h1>
          <SearchBar onFormSubmit={this.onTermSubmit} />
        </div>
        <br></br>
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="column is-half">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
