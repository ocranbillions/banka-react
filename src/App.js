import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Landing from './components/layout/landing/Landing'
import Register from './components/auth/Register'
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard'
import store from './redux/store';


const App = () => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/signin' component={SignIn} />
                    <Route exact path='/dashboard' component={Dashboard} />
                </Switch>
            </Fragment>
        </Router>
    </Provider>
);

export default App;
