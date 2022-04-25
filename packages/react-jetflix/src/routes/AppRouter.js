import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import { AuthContext } from "../auth/AuthContext";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home typeFormat={''} /> : <Redirect to="/register" />}
          </Route>
          <Route exact path="/add-movie">
            {user ? <Home typeFormat={'movie'} /> : <Redirect to="/register" />}
          </Route>
          <Route exact path="/add-serie">
            {user ? <Home typeFormat={'serie'} /> : <Redirect to="/register" />}
          </Route>
          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path="/login">{!user ? <Login /> : user.isAdmin ? <Redirect to="/add-movie" /> : <Redirect to="/" /> }</Route>
        </Switch>
      </Router>
    </>
  );
};
