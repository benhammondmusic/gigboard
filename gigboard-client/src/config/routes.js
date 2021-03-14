import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home'
import GigList from '../pages/GigList/GigList'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gigs" component={GigList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </Switch>
);

export default Routes;