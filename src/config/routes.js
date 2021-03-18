import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home'
import GigList from '../pages/GigList/GigList'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const Routes = (props) => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gigs" component={GigList} />
        <Route exact path="/login" render={() => <Login setEmail={props.setEmail} setPassword={props.setPassword} handleLogin={props.handleLogin}/>} />
        <Route exact path="/register" render={() => <Register handleRegister={props.handleRegister} setEmail={props.setEmail} setPassword={props.setPassword} setUsername={props.setUsername}/> } />
    </Switch>
);

export default Routes;