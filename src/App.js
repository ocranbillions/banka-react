import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/layout/Landing/Navbar'
import Landing from './components/layout/landing/Landing'
import './index.css'


const App = () => (
  <Router>
    <Fragment>
        {/* <Navbar /> */}
        <Switch>
            <Route exact path='/' component={Landing} />
            {/* <Route component={Routes} /> */}
        </Switch>
    </Fragment>
  </Router>
);

export default App;
