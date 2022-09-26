import React from 'react';
import './videosContainer.scss';
import VideoComp from '../video/video.tsx';
import videosArray from '../../models/data.json'

function VideosContainer() {
  return (
    <div className='VideosContainer'>
      {videosArray.map(function(video, i){
          return <VideoComp 
          key={video.id}
          channelThumbnail={video.channelThumbnail} 
          videoThumbnail={video.videoThumbnail} 
          channelName={video.channelName} 
          videoName={video.videoName}
          videoId={video.videoId} />;
      })}
    </div>
  );
}

export default VideosContainer;
