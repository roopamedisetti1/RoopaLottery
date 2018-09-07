import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

//built in map iterator. just like for loop where video is an array passed.
  const videoItems = props.videos.map( (video) => {
    //we provided a key for indexing for list
       return (
         <VideoListItem
          onVideoSelect={props.onVideoSelect}
          key={video.etag}
           video={video} />

       );
  });


   return (
     <ul className="col-md-4 list-group">
       {videoItems}
     </ul>
   );

}

export default VideoList;
