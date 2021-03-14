import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home'
import GigList from '../pages/GigList/GigList'
import Login from '../pages/Login/Login'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gigs" component={GigList} />
        <Route exact path="/login" component={Login} />
    </Switch>
);

export default Routes;