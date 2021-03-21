import { Switch, Route } from "react-router-dom";

import Home from '../pages/Home/Home';
import GigList from '../pages/GigList/GigList';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import GigAdder from '../pages/GigAdder/GigAdder';
import GigEditor from '../pages/GigEditor/GigEditor'

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/gigs" component={GigList} />
    <Route
      exact
      path="/login"
      render={() => (
        <Login
          setFormEmail={props.setFormEmail}
          setFormPassword={props.setFormPassword}
          handleLogin={props.handleLogin}
        />
      )}
    />
    <Route
      exact
      path="/register"
      render={() => (
        <Register
          handleRegister={props.handleRegister}
          setFormPassword={props.setFormPassword}
          setFormEmail={props.setFormEmail}
        />
      )}
    />
    <Route exact path="/newgig" component={GigAdder} />
    <Route exact path="/gigs/editgig/:id" component={GigEditor} props={props} />
  </Switch>
);

export default Routes;
