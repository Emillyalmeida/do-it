import { Switch, Route, Redirect } from "react-router-dom";

import { UserAuth } from "../providers/userAuth";

import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Register from "../pages/Register";

const Routers = () => {
  const { accessToken } = UserAuth();
  return (
    <Switch>
      <Route exact path="/">
        {accessToken ? <Redirect to="/dashboard" /> : <LandingPage />}
      </Route>
      <Route path="/login">
        {accessToken ? <Redirect to="/dashboard" /> : <Login />}
      </Route>
      <Route path="/register">
        {accessToken ? <Redirect to="/dashboard" /> : <Register />}
      </Route>
      <Route path="/dashboard">
        {accessToken ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Routers;
