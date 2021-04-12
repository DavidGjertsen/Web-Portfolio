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
