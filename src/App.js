import React from 'react';
import Nav from './Nav';
import './css/scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import AboutVDP from './components/AboutVDP';

const App = () => {
    return (
        <div className="main-thesis">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route exact path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route exact path="/about-vdp">
                        <AboutVDP />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
