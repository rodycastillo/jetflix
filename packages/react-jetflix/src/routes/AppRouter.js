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
import { Watch } from "@material-ui/icons";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home typeFormat={""} /> : <Redirect to="/register" />}
          </Route>
          <Route exact path="/add-movie">
            {user ? <Home typeFormat={"movie"} /> : <Redirect to="/register" />}
          </Route>
          <Route exact path="/edit-movie">
            {user ? <Home typeFormat={'edit'} /> : <Redirect to="/register" />}
          </Route>
          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path="/login">
            {!user ? (
              <Login />
            ) : user.isAdmin ? (
              <Redirect to="/add-movie" />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          {user && (
            <>
              <Route path="/watch/:id">
                <Watch />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </>
  );
};