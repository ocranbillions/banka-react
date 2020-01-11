import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/layout/Landing/Navbar'
import Landing from './components/layout/landing/Landing'
import Register from './components/auth/Register'


const App = () => (
  <Router>
    <Fragment>
        {/* <Navbar /> */}
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={Register} />
        </Switch>
    </Fragment>
  </Router>
);

export default App;
