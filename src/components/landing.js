import arrowDown from "../images/icons/arrow-down.png";

export const LandingPage = () => {
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
