import React from 'react';
import Nav from './Nav';
import './css/scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';

const App = () => {
    return (
        <div className="main-thesis">
            <Nav />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route exact path="/about-us">
                        <AboutUs />
                    </Route>
                    {/* <Route exact path="/aboutus"></Route>
          <Route exact path="/deepspeech"></Route> */}
                </Switch>
            </Router>
        </div>
    );
};

export default App;
