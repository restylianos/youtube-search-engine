import React from 'react';

class VideoItem extends React.Component {
  render() {
    return (
      <div
        className="box"
        alt={this.props.video.snippet.title}
        onClick={() => this.props.onVideoSelect(this.props.video)}
      >
        <div className="card">
          <div className="card-image container">
            <div className="columns">
              <div className="column container">
                <figure className="image is-256x256 is-mobile">
                  <img
                    src={this.props.video.snippet.thumbnails.medium.url}
                    alt={this.props.video.snippet.title}
                  ></img>
                </figure>
              </div>
              <div className="column">
                <div className="media-content">
                  <br></br>
                  <p className="title is-5 has-text-centered">{this.props.video.snippet.title}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="media-content">
            <br></br>
            <p className="title is-5 has-text-centered">{this.props.video.snippet.title}</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default VideoItem;
