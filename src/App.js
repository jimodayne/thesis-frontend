import React from 'react';
import Nav from './Nav';
import './css/scss/main.scss';
// import { HashRouter, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import AboutVDP from './components/AboutVDP';

const App = () => {
    return (
        <div className="main-thesis">
            <Router basename={process.env.PUBLIC_URL}>
                <Nav />
                <Switch>
                    <Route exact path="/" component={AboutVDP} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/demo" component={Homepage} />
                    <Route component={() => <div>404 Not found </div>} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
