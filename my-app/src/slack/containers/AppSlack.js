import React, { use } from "react";
import "../style/AppSlack.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Login from "../components/Login";
// look
import { useStateValue, StateProvider } from "../containers/StateProvider";
import reducer, { initialState } from "./reducer";
// ....
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppSlack() {
  const [{ user }, dispatch] = useStateValue(null);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="app">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <>
              <Header />
              <div className="app_body">
                <Sidebar />
                {/* React-Router => Chat screen*/}
                <Switch>
                  <Route path="/room/:roomId" component={Chat} />
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>
                </Switch>
              </div>
            </>
          )}
        </Router>
      </div>
    </StateProvider>
  );
}

export default AppSlack;
