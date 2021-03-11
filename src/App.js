import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './css/App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Route path = "/" exact component = {LandingPage} />
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
                <p>David Gjertsen is a digital creator and front-end web designer.</p>
                <p>He also likes coffee. A lot.</p>
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

export default App;
