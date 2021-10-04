
import {useState, useEffect} from "react";

export const ProjectHeader = (props) => {
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
        <section className={"panel projectHeader " + props.color}>
            <div className = "projectHeaderContent">
                <h1>{props.title}</h1>
                <ul>
                    {props.skills.map((value, key) => {
                        return(
                            <li key={key}>{value}</li>
                        );
                    })}
                </ul>
            </div>
            <img
                id="scrollPrompt"
                src="images/icons/arrow-down-dark.svg"
                alt="Scroll down for more"
                className={active ? "visible" : "hidden"}
            />
        </section>
    )
}

export const ProjectDescription = (props) => {
    return(
        <section className={"panel projectDescription " + props.color}>
            <div className="projectDescriptionContent">
                {props.text.map((text, key) => {
                    return (<p key={key}>{text}</p>);
                })}
            </div>
        </section>
    )
}

export const CMProjectLink = (props) => {
    return(
        <section className={"panel projectDescription " + props.color}>
            <div className="projectDescriptionContent">
                <p>Caffeine Mono is free to use and is <a href="https://github.com/DavidGjertsen/Caffeine_Mono" target="_blank" rel="noreferrer">available for download on my GitHub</a>.</p>
            </div>
        </section>
    )
}

export const ExhibitionLink = (props) => {
    return(
        <section className={"panel projectDescription " + props.color}>
            <div className="projectDescriptionContent">
                <p>The 2021 senior exhibition can be found <a href="https://winthropseniorshow.com/" target="_blank" rel="noreferrer">here</a>. I think it speaks for itself.</p>
                <p>The website was designed and built by myself, <a href="https://www.danimalphrus.com/" target="_blank" rel="noreferrer">Danielle Malphrus</a>, and <a href="https://www.jaiquezwork.com/" target="_blank" rel="noreferrer">Jaiquez Hagood</a>.</p>
            </div>
        </section>
    )
}

export const ProjectImage = (props) => {
    return(
        <div className="projectInfo">
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export const ProjectImageWithCaption = (props) => {
    return(
        <div className="projectInfo">
            <figure>
                <img src={props.src} alt={props.alt} />
                <figcaption>{props.caption}</figcaption>
            </figure>
        </div>
    )
}

export const ProjectText = (props) => {
    return(
        <div className="projectInfo">
            {props.text.map((text, key) => {
                return (<p key={key}>{text}</p>);
            })}
        </div>
    )
}

export const ProjectFin = () => {
    return(
        <section className="panel footer">
            <div className="footerContent">
                <h2>fin</h2>
            </div>
        </section>
    )
}

export const LiveDemo = (props) => {
    return(
        <div className="projectInfo">
            <iframe title="Kiosk demo" src="difd_kiosk/index.html" />
        </div>
    )
}
