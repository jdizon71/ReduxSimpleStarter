import React from 'react';

import VideoListItem from './videoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
      return <VideoListItem  key={ video.etag } video={ video } />
  });

// React will recognize `videoItems` is an array and will render each element

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
};

export default VideoList;
