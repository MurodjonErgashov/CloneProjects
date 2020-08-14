import React from "react";
import "../style/AppTwitter.css";
import Sidebar from "../component/Sidebar";
import Feed from "../component/Feed";
import Widgets from "../component/Widgets";
import Explore from "../component/Explore";
import Notification from "../component/Notification";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Bookmarks from "../component/Bookmarks";
import { List } from "@material-ui/core";
import Profile from "../component/Profile";

function AppTwitter() {
  return (
    <Router>
      <div className="t_app">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/notification" exact component={Notification} />
          <Route path="/bookmarks" exact component={Bookmarks} />
          <Route path="/lists" exact component={List} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
        <Widgets />
      </div>
    </Router>
  );
}

export default AppTwitter;
