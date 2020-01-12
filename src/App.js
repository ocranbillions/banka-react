import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/layout/Landing/Navbar'
import Landing from './components/layout/landing/Landing'
import Register from './components/auth/Register'
import SignIn from './components/auth/SignIn';


const App = () => (
  <Router>
    <Fragment>
        {/* <Navbar /> */}
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/signin' component={SignIn} />
        </Switch>
    </Fragment>
  </Router>
);

export default App;