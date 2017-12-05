import React from 'react';

const VideoDetail = ({ video }) => {
  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${ videoId }` // ES6 syntax for string interpolation

  return(
    <div className="video-detail col-md-8">
      <div className="embed-response embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={ url }></iframe>
      </div>

      <div className="details">
        <div>{ video.snippet.title }</div>
        <div>{ video.snippet.description }</div>
      </div>
    </div>
  )

};

export default VideoDetail;
