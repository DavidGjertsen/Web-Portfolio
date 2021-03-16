import {useState, useEffect} from "react";
import arrowDown from "../images/icons/arrow-down.png";
import imageProjectOne from "../images/landing/project-one.png";

export const LandingPage = () => {
    return(
        <div className = "container">
            <PageHeader />
            <Project image={imageProjectOne} alt="A phone displaying It's Time" title="It's Time" text="A work tracking app to ensure your workers are doing what needs to be&nbsp;done." href="/its-time"/>
            <Project image={imageProjectOne} alt="A placeholder" title="Placeholder" text="Blah blah blah" href="/placeholder"/>
            <Project image={imageProjectOne} alt="A placeholder" title="Placeholder" text="Blah blah blah" href="/placeholder"/>
            <Project image={imageProjectOne} alt="A placeholder" title="Placeholder" text="Blah blah blah" href="/placeholder"/>
            <Project image={imageProjectOne} alt="A placeholder" title="Placeholder" text="Blah blah blah" href="/placeholder"/>
            <Footer />
        </div>
    )
}

const PageHeader = () => {
    const [active, setActive] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            setActive(false);
        }

        document.getElementsByClassName("container")[0].addEventListener("scroll", onScroll);

        return function cleanup() {
            document.getElementsByClassName("container")[0].removeEventListener("scroll", onScroll);
        }
    });

    return(
        <section className="panel">
            <div className = "pageHeaderContent">
                <h1>David Gjertsen</h1>
                <p>I am a digital creator and front-end web designer.</p>
                <p>Let me show you what I do.</p>
                <img id="scrollPrompt" src={arrowDown} alt="Scroll down for more" className={active ? "visible" : "hidden"}/>
            </div>
        </section>
    )
}

const Project = (props) => {
    return(
        <section className = "panel">
            <div className = "panelContent">
                <img src={props.image} alt={props.alt}/>
                <div className="panelText">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <a href={props.href}>View&nbsp;project</a>
                </div>
            </div>
        </section>
    )
}

const Footer = () => {
    return(
        <section className = "panel">
            <div className = "footerContent">
                <h2>So there you have it</h2>
                <p>Thank's for visiting. I hope you enjoyed my work.</p>
                <nav>
                    <p><a href="sendto:davidgjertsen8635@gmail.com">Send me an email</a></p>
                    <p><a href="https://twitter.com/EspressoTheWolf">Follow me on Twitter</a></p>
                    <p><a href="tel:(704)352-8053">Give me a call</a></p>
                </nav>
            </div>
        </section>
    )
}
