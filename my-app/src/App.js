import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppSlack from "./slack/containers/AppSlack";
import AppTwitter from "./twitter/containers/AppTwitter";
import AppCovid from "./covid-tracker/containers/AppCovid";

function App() {
  return (
    <div>
      {/* <AppSlack /> */}
      {/* <AppTwitter /> */}
      <AppCovid />
    </div>
  );
}

export default App;
