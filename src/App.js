//import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {LandingPage} from "./components/landing.js";
import {NavigationMenu} from "./components/navigation.js";
import {Contacts} from "./components/contact.js";
import {AboutMe} from "./components/aboutme.js";
import './css/App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <NavigationMenu />
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/get-in-touch" exact component={Contacts} />
                    <Route path="/about-me" exact component={AboutMe} />
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
                {/* eslint-disable-next-line */}
                <p><Link to="/">Go back</Link></p>
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
