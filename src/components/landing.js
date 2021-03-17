import {useState, useEffect} from "react";

export const LandingPage = () => {
    return(
        <div className = "container">
            <PageHeader />
            <Project image="images/landing/project-one.png" alt="A phone displaying It's Time." title="It's&nbsp;Time" text="A work tracking app to ensure your workers are doing what needs to be&nbsp;done." href="/its-time"/>
            <Project image="images/landing/project-two.png" alt="React code written with Caffeine Mono." title="Caffeine Mono" text="An aesthetically pleasing yet functional programming&nbsp;typeface." href="/caffeine-mono"/>
            <Project image="images/landing/project-three.png" alt="Phones showing the Take Back Your Phone app." title="Take&nbsp;Back Your&nbsp;Phone" text="Hate spam callers? Here's a call filtering app with a vengeful&nbsp;twist." href="/take-back-your-phone"/>
            <Project image="images/landing/project-four.png" alt="A screen from the Digital Information Design kiosk." title="Digital Information Design&nbsp;Kiosk" text="Choose your character and follow them on an adventure through Winthrop University's DIFD&nbsp;program." href="/difd-kiosk"/>
            <Project image="images/landing/project-five.png" alt="Four digital illustration pieces." title="Digital Illustration" text="A collection of illustration&nbsp;work." href="/illustration"/>
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
                <img id="scrollPrompt" src="images/icons/arrow-down.png" alt="Scroll down for more" className={active ? "visible" : "hidden"}/>
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
                <p>If you're interested in what I do, please contact me.</p>
                <nav>
                    <p><a href="mailto:davidgjertsen8635@gmail.com">Send me an email</a></p>
                    <p><a href="https://twitter.com/EspressoTheWolf" target="_Blank" rel="noreferrer">Follow me on Twitter</a></p>
                    <p><a href="tel:(704) 352-8053">Give me a call</a></p>
                </nav>
                <p>Thank you for visiting.</p>
            </div>
        </section>
    )
}
