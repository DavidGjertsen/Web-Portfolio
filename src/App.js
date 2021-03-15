import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LandingPage} from "./components/landing.js"
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
    )
}

const NotFound = () => {
    return(
        <div className = "container">
            <section className = "panel notfound">
                <h1>404</h1>
                <p>You found an error screen.</p>
                <p><a href="/">Go back?</a></p>
            </section>
        </div>
    )
}

export default App;
