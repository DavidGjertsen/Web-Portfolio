import {ProjectHeader} from "./project.js";

//It's Time
export const ItsTime = () => {
    const skills = ["Mobile Design & Development", "UX Design", "MySQL"];

    return(
        <div className = "container">
            <ProjectHeader
                color="teal projectOne"
                title="It's Time"
                intro="A work tracking app to ensure workers are doing what needs to be done."
                skills={skills}
            />
        </div>
    )
}

//Caffeine Mono
export const CaffeineMono = () => {
    const skills = ["Typography", "Ligature Design", "Creative Direction"];

    return(
        <div className = "container">
            <ProjectHeader
                color="coffee projectTwo"
                title="Caffeine Mono"
                intro="An aesthetically pleasing and fully functional programming typeface."
                skills={skills}
            />
        </div>
    )
}

//Take Back Your Phone
export const TakeBackYourPhone = () => {
    const skills = ["Mobile Design", "Marketing", "Conceptualization"];

    return(
        <div className = "container">
            <ProjectHeader
                color="teal projectThree"
                title="Take Back Your Phone"
                intro="Hate spam callers? Here's a call filtering app with a vengeful twist."
                skills={skills}
            />
        </div>
    )
}

//DIFD Kiosk
export const DIFDKiosk = () => {
    const skills = ["Information Design", "User Interaction", "Creative Direction"];

    return(
        <div className = "container">
            <ProjectHeader
                color="coffee projectFour"
                title="DIFD Kiosk"
                intro="Choose your character and follow them on an adventure through Winthrop University's Digital Information Design program."
                skills={skills}
            />
        </div>
    )
}

//Senior Show Countdown
export const SeniorExhibition = () => {
    const skills = ["Web Development", "Creative Direction", "Animation"];

    return(
        <div className = "container">
            <ProjectHeader
                color="teal projectFive"
                title="2021 Senior Design Exhibition"
                intro="A countdown to the most epic Senior Design Exhibition in Winthrop University history."
                skills={skills}
            />
        </div>
    )
}
