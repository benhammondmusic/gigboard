import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home'
import GigList from '../pages/GigList/GigList'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gigs" component={GigList} />
    </Switch>
);

export default Routes;