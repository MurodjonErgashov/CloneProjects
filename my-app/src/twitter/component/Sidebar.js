import React from "react";
import "../style/Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Link } from "react-router-dom";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreOutlinedIcon from "@material-ui/icons/MoreOutlined";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="t_sidebar">
      <Link to="/">
        <TwitterIcon className="t_sidebar_twitterIcon" />
      </Link>
      <Link to="/">
        <SidebarOption active text="Home" Icon={HomeOutlinedIcon} />
      </Link>
      <Link to="/explore">
        <SidebarOption text="Explore" Icon={SearchIcon} />
      </Link>
      <Link to="/notification">
        <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      </Link>
      <Link to="/">
        <SidebarOption text="Messages" Icon={MailOutlineOutlinedIcon} />
      </Link>
      <Link to="/bookmarks">
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      </Link>
      <Link to="/lists">
        <SidebarOption text="Lists" Icon={ListAltIcon} />
      </Link>
      <Link to="/profile">
        <SidebarOption text="Profile" Icon={PersonOutlineIcon} />
      </Link>
      <SidebarOption text="More" Icon={MoreOutlinedIcon} />

      <Button variant="outlined" className="t_sidebar_tweetButton" fullWidth>
        Tweet
      </Button>
      <div className="t_sidebar_smallButton">
        <img
          src="https://i1.wp.com/credomobblog.wpengine.com/wp-content/uploads/2018/04/1060_icons_compose-tweet.png?ssl=1"
          alt="tweet"
        />
      </div>
    </div>
  );
}

export default Sidebar;
