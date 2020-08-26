import React from 'react';
import Nav from './Nav';
import './css/scss/main.scss';
// import { HashRouter, Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Demo from './components/Demo';
import AboutUs from './components/AboutUs';
import AboutVDP from './components/AboutVDP';

const App = () => {
    return (
        <div className="main-thesis">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Nav />
                <Switch>
                    <Route exact path="/" component={AboutVDP} />
                    <Route path="/about-us" component={AboutUs} />
                    {/* <Route path="/demo" component={Demo} /> */}
                    <Route component={() => <div>404 Not found </div>} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
