import React from 'react';
import Nav from './Nav';
import './css/scss/main.scss';
import { HashRouter, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import AboutVDP from './components/AboutVDP';

const App = () => {
    return (
        <div className="main-thesis">
            <HashRouter basename="/">
                <Nav />
                <Route exact path="/" component={AboutVDP} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/demo" component={Homepage} />
            </HashRouter>
        </div>
    );
};

export default App;
