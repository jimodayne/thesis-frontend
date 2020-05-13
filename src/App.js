import React from 'react';
import Nav from './Nav';
import './css/scss/main.scss';
import mic_icon from './assets/mic_icon.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

const App = () => {
    return (
        <div className="main-thesis">
            <Nav />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage></Homepage>
                    </Route>
                    {/* <Route exact path="/aboutus"></Route>
          <Route exact path="/deepspeech"></Route> */}
                </Switch>
            </Router>
        </div>
    );
};

export default App;
