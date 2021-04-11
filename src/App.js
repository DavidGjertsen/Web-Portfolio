//import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {LandingPage} from "./components/landing.js";
import {NavigationMenu} from "./components/navigation.js";
import {Contacts} from "./components/contact.js";
import {AboutMe} from "./components/aboutme.js";
import * as projects from "./components/projectpages.js";
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
                    <Route path="/its-time" exact component={projects.ItsTime} />
                    <Route path="/caffeine-mono" exact component={projects.CaffeineMono} />
                    <Route path="/take-back-your-phone" exact component={projects.TakeBackYourPhone} />
                    <Route path="/difd-kiosk" exact component={projects.DIFDKiosk} />
                    <Route path="/senior-exhibition" exact component={projects.SeniorExhibition} />

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
