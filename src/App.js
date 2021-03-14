import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import arrowDown from "./images/icons/arrow-down.png";
import './css/App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path = "/" exact component = {LandingPage} />
                    <Route component = {NotFound} />
                </Switch>
            </Router>
        </div>
    );
}

const LandingPage = () => {
    return(
        <div className = "container">
            <PageHeader />
            <Panel />
            <Panel />
            <Panel />
        </div>
    );
}

const PageHeader = () => {
    return(
        <section className="panel">
            <div className = "pageHeaderContent">
                <h1>David Gjertsen</h1>
                <p>I am a digital creator and front-end web designer.</p>
                <p>Let me show you what I can do.</p>
                <img id="scrollPrompt" src={arrowDown} alt="Scroll down for more" className="hidden"/>
            </div>
        </section>
    )
}

const Panel = () => {
    return(
        <section className = "panel">
            <div className = "panelContent">
                <h1>Test</h1>
                <h2>Test</h2>
                <h3>Test</h3>
                <h4>Test</h4>
                <h5>Test</h5>
                <h6>Test</h6>
            </div>
        </section>
    );
}

const NotFound = () => {
    return(
        <div className = "container">
            <section className = "panel notfound">
                <h1>404</h1>
                <p>You find an error screen.</p>
                <p><a href="/">Go back?</a></p>
            </section>
        </div>
    )
}

export default App;
