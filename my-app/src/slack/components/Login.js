import React from "react";
import "../style/Login.css";
import { Button } from "@material-ui/core";
// import auth provider
import { auth, provider } from "../firebase";
import { useStateValue } from "../containers/StateProvider";
import { actionTypes } from "../containers/reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          payload: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to Murodjon Ergashov</h1>
        <p>murodjon.slack.com</p>
        <Button onClick={signIn} className="button">
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
