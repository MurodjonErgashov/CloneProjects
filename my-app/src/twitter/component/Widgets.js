import React from "react";
import "../style/Widgets.css";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="t_widgets">
      <div className="t_widgets_input">
        <SearchIcon className="t_widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="t_widgets_widgetContainer">
        <h4>What's happening</h4>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 800 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#react is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
