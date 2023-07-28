// components/VideoDetail.js
import React from "react";
import useApi from "../hooks/useApi";

export default VideoDetail = ({ match }) => {
  const { videoId } = match.params;
  const { data: comments, loading } = useApi(`/api/comments/${videoId}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Video Playing</h2>
    </div>
  );
};
