import React from "react";
import "../style/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="t_feed">
      {/* Home */}
      <div className="t_feed_header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
