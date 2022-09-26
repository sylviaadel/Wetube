import React from 'react';
import './video.scss';

function VideoComp(props) {
  return (
      <a id={props.id} href={props.videoId} target='_blank' className='Video'>
        <img src={`images/videos/${props.videoThumbnail}`} alt={props.channelThumbnail}/>
        <p>{props.videoName}</p>
        <label>{props.channelName}</label>
        <div className='tool-tip'>
          <p>Keep hovering to play</p>
        </div>
      </a>
    );
  }

export default VideoComp;
