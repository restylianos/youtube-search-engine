import React from 'react';

class VideoDetail extends React.Component {
  render() {
    if (this.props.video) {
      const dateString = this.props.video.snippet.publishedAt;

      const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };

      const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
      return (
        <div className="box">
          <figure className="image is-16by9">
            <iframe
              className="has-ratio"
              title="VideoPlayer"
              width="640"
              height="360"
              src={videoSrc}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </figure>
          <p className="has-text-centered">
            <b>{this.props.video.snippet.title}</b>
          </p>
          <p className=" has-text-centered">
            By: <b>{this.props.video.snippet.channelTitle}</b>
          </p>
          <p className=" has-text-centered">
            Published: <b>{formatDate(dateString)}</b>
          </p>
          <p className="">{this.props.video.snippet.description}</p>
        </div>
      );
    } else {
      return <div></div>;
      //if video is not loaded show an empty div
      //used to solve undifined problem
    }
  }
}

export default VideoDetail;
