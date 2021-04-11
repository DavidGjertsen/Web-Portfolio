import {useEffect, useState} from "react";

export const ProjectHeader = (props) => {
    return(
        <section className={"panel projectHeader " + props.color}>
            <div className = "projectHeaderContent">
                <h1>{props.title}</h1>
                <p>{props.intro}</p>
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
