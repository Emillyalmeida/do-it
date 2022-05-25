import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Teste</h1>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="dashboard"></Route>
    </Switch>
  );
};

export default Routers;
