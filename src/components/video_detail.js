import React from 'react';

const VideoDetail = ({video}) => {

//in react the parent components doesnt have details from child components during initialization of
//constructor in index.js so React keeps rendering quickly. To fix that bug we need to have a check
 if(!video) {
   return <div> Loading.....</div>;
 }

  const videoId = video.id.videoId;


  //string intropolate. inject.instead of the following do the trick from line 9
  //const url = 'https://wwww.youtube.com/embed/' + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
      <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item"  src={url}></iframe>
          </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
      </div>

  );

};

export default VideoDetail;
