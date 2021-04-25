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
