//import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LandingPage} from "./components/landing.js";
import {NavigationMenu} from "./components/navigation.js";
import './css/App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <NavigationMenu />
                <Switch>
                    <Route path = "/" exact component = {LandingPage} />
                    <Route component = {NotFound} />
                </Switch>
            </Router>
            <Copyright />
        </div>
    )
}

const NotFound = () => {
    return(
        <div className = "container">
            <section className = "panel notfound">
                <h1>404</h1>
                <p>This website is still under construction. Check back soon!</p>
                <p><a href="javascript:history.back()">Go back</a></p>
            </section>
        </div>
    )
}

const Copyright = () => {
    return(
        <p id="copyright">&copy; {new Date().getFullYear()} David Gjertsen </p>
    )
}

export default App;
