import React from "react";
import "../style/Explore.css";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";

function Explore() {
  return (
    <div className="t_explore">
      <div className="t_explore_header">
        <div className="t_explore_input">
          <SearchIcon />
          <input type="text" placeholder="Search Twitter" />
        </div>
        <SettingsIcon />
      </div>
      <div className="t_explore_headerImg">
        <video src="https://v16m.tiktokcdn.com/b7e109e8abad89daef229316e1e6d56f/5f381931/video/tos/useast2a/tos-useast2a-ve-0068c004/097a42af291b4b7fbf8366deebf6f4af/?a=1233&br=5024&bt=2512&cr=0&cs=0&dr=0&ds=3&er=&l=202008131719440101890660244426DFAC&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2hobmRtZ2hxdTMzODczM0ApNGk7ZTQ7ZmQzN2Y3OTlmN2dfbTJucWo1NmlfLS0tMTZzc15hLTJfLi5gLV5iX2AuMi86Yw%3D%3D&vl=&vr="></video>
      </div>
    </div>
  );
}

export default Explore;
