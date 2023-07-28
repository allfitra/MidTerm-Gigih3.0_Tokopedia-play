import React from "react";
import useApi from "../hooks/useApi.js";

export default VideoList = () => {
  const { data: videos, loading } = useApi("/api/videos");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Video List</h2>
      {videos.map((video) => (
        <div key={video.videoId}>
          <img src={video.thumbnailUrl} alt={video.title} />
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};
