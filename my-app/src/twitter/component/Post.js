import React from "react";
import "../style/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
  comment,
  tweet,
  like,
  share,
}) {
  return (
    <div className="t_post">
      <div className="t_post_avatar">
        <Avatar src="https://instagram.fhrk1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106273080_3176796079045684_6783161919661559143_n.jpg?_nc_ht=instagram.fhrk1-1.fna.fbcdn.net&_nc_ohc=C_05h6kxxIAAX_0iolT&oh=eb3bb41fb88179b778becaf350fcba1b&oe=5F5ECA3C" />
      </div>
      <div className="t_post_body">
        <div className="t_post_header">
          <div className="t_post_headerText">
            <h6>
              Murodjon Ergashov{" "}
              <span className="t_post_headerSpecial">
                <VerifiedUserIcon className="t_post_badge" /> @murodjonergashov
              </span>
            </h6>
          </div>
          <div className="t_post_headerDescription">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              fugit esse consequuntur cupiditate aspernatur ullam itaque harum
              vel tempore obcaecati!
            </p>
          </div>
        </div>

        <img
          src="https://media.tenor.com/images/e64bbee5c5a11e5754dc2e0dc320e42b/tenor.gif"
          alt=""
        />
        <div className="t_post_footer">
          <div className="t_foooterComment">
            <ChatBubbleOutlineIcon /> 3.6K
          </div>
          <div className="t_footerRepeat">
            <RepeatIcon /> 17.4K
          </div>
          <div className="t_footerLike">
            <FavoriteBorderIcon />
            346K
          </div>
          <div className="t_footerShare">
            <PublishIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
