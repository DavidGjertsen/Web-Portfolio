//import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {LandingPage} from "./components/landing.js";
import {NavigationMenu} from "./components/navigation.js";
import {Contacts} from "./components/contact.js";
import {AboutMe} from "./components/aboutme.js";
import * as projects from "./components/projectHandler.js";


import './css/App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <NavigationMenu />
                <Switch>
                    {/*Main pages*/}
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/get-in-touch" exact component={Contacts} />
                    <Route path="/about-me" exact component={AboutMe} />

                    {/*Project Pages*/}
                    <Route path="/its-time" exact component={projects.ProjectOne} />
                    <Route path="/caffeine-mono" exact component={projects.ProjectTwo} />
                    <Route path="/take-back-your-phone" exact component={projects.ProjectThree} />
                    <Route path="/difd-kiosk" exact component={projects.ProjectFour} />
                    <Route path="/senior-exhibition" exact component={projects.ProjectFive} />
                    <Route path="/other-projects" exact component={projects.ProjectSix} />

                    {/*Not Found*/}
                    <Route component = {NotFound} />
                </Switch>
            </Router>
            <Copyright />
        </div>
    )
}

const NotFound = () => {
    return(
        <div className = "container 404">
            <section className = "panel notfound">
                <h1>404</h1>
                <p>Looks like you're a little lost, but that's ok.</p>
                {/* eslint-disable-next-line */}
                <p><Link to="/">Let's go back</Link></p>
            </section>
        </div>
    )
}

const Copyright = () => {
    const currentYear = new Date().getFullYear();
    if(currentYear === 2021) {
        return(
            <p id="copyright">&copy; 2021 David Gjertsen </p>
        )
    }
    return(
        <p id="copyright">&copy; 2021 - {currentYear} David Gjertsen </p>
    )

}

export default App;
