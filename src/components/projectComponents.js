import {Link} from "react-router-dom";

export const ProjectHeader = (props) => {
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
                <p>The countdown is currently live and can be found <a href="https://winthropseniorshow.com/" target="_blank" rel="noreferrer">here</a>.</p>
                <p>The 2021 Winthrop Senior Design Exhibition launches on May 3rd, 2021. You should check it out, it's gonna be epic.</p>
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
            <iframe src="difd_kiosk/index.html" />
        </div>
    )
}
