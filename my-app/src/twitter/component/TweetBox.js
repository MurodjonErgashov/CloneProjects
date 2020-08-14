import React from "react";
import "../style/TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="t_tweetBox">
      <form>
        <div className="t_tweetBox_input">
          <Avatar src="https://instagram.fhrk1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106273080_3176796079045684_6783161919661559143_n.jpg?_nc_ht=instagram.fhrk1-1.fna.fbcdn.net&_nc_ohc=C_05h6kxxIAAX_0iolT&oh=eb3bb41fb88179b778becaf350fcba1b&oe=5F5ECA3C" />
          <input type="text" placeholder="What's happening" />
        </div>

        <input
          type="text"
          className="t_tweetBox_imageInput"
          placeholder="Enter image URL"
        />
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
