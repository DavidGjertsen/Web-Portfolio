import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export const LandingPage = () => {
    useEffect(() => {
        const elements = [...document.querySelectorAll(".fadeIn")];
        console.log(elements);

        const options = {
            rootMargin: "0px",
            threshold: 0.25
        }

        const callback = (elements, observer) => {
            elements.forEach((element) => {
                const {target} = element;

                if(element.intersectionRatio >= 0.25) {
                    target.classList.add("visible");
                } else {
                    target.classList.remove("visible");
                }
            });
        }

        const observer = new IntersectionObserver(callback, options);

        elements.forEach((element, index) => {
            observer.observe(element);
        });

    });

    return(
        <div className = "container">
            <PageHeader />
            <Project image="images/landing/project-one.png" alt="A phone displaying It's Time." title="It's&nbsp;Time" text="A work tracking app to ensure your workers are doing what needs to be&nbsp;done." href="/its-time"/>
            <Project image="images/landing/project-two.png" alt="React code written with Caffeine Mono." title="Caffeine Mono" text="An aesthetically pleasing yet functional programming typeface." href="/caffeine-mono"/>
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
                <p>I'm good at making things pretty. Have a look.</p>
                <img id="scrollPrompt" src="images/icons/arrow-down.svg" alt="Scroll down for more" className={active ? "visible" : "hidden"}/>
            </div>
        </section>
    )
}

const Project = (props) => {
    return(
        <section className = "panel">
            <div className = "panelContent">
                <img src={props.image} alt={props.alt}/>
                <div className="panelText fadeIn">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <Link to={props.href}>View&nbsp;project</Link>
                </div>
            </div>
        </section>
    )
}

const Footer = () => {
    return(
        <section className = "panel">
            <div className = "footerContent">
                <h2>Thank you</h2>
                <div className="fadeIn">
                    <p>Of course, there's always more to see.</p>
                    <nav>
                        <Link to="/about-me">About me</Link>
                        <Link to="/contact-me">Get in touch</Link>
                        <Link to="/blog">Read my blog</Link>
                    </nav>
                </div>
            </div>
        </section>
    )
}
