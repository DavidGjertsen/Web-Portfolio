import {ProjectHeader, ProjectDescription} from "./projectComponents.js";

//It's Time
export const ProjectOne = () => {
    const skills = ["Mobile Design & Development", "UX Design", "MySQL"];
    const color = "teal";

    return(
        <div className = "container">
            <ProjectHeader
                color={color + " projectOne"}
                title="It's Time"
                intro="A work tracking app to ensure workers are doing what needs to be done."
                skills={skills}
            />
            <ProjectDescription
                color={color}
                text={[
                    "Making sure your employees are focused on the work that's best for your business is important.",
                    "With an easy-to-use interface and task editing to help forgetful employees keep their time sheets accurate, It's Time makes it easy for your employees to report exactly what they are working on, and for how long."
                ]}
            />
        </div>
    )
}

//Caffeine Mono
export const ProjectTwo = () => {
    const skills = ["Typography", "Functionality", "Creative Direction"];
    const color = "coffee";

    return(
        <div className = "container">
            <ProjectHeader
                color={color + " projectTwo"}
                title="Caffeine Mono"
                intro="An aesthetically pleasing and fully functional programming typeface."
                skills={skills}
            />
            <ProjectDescription
                color={color}
                text={[
                    "As a programmer, sometimes coding fonts just don't look all that nice.",
                    "Meet Caffeine Mono, a typeface combines the functionality of modern programming fonts with a playful and aesthetically pleasing design. It features over 30 useful ligatures to beautify your code."
                ]}
            />
        </div>
    )
}

//Take Back Your Phone
export const ProjectThree = () => {
    const skills = ["Mobile Design", "Marketing", "Concepting"];
    const color = "teal";

    return(
        <div className = "container">
            <ProjectHeader
                color={color + " projectThree"}
                title="Take Back Your&nbsp;Phone"
                intro="Hate spam callers? Here's a call filtering app with a vengeful twist."
                skills={skills}
            />
            <ProjectDescription
                color={color}
                text={[
                    "I hate spam calls. ",
                    "Did you know that in 2018 there were 47.8 billion spam calls in the United States? That's 90 irritating and pointless spam calls every minute!",
                    "Take Back Your Phone is a call filtering app concept that would allow the average Joe to get revenge on spam callers. How? By rerouting spam calls to other spammers and giving them a taste of their own medicine. It's about time we took back our phones."
                ]}
            />
        </div>
    )
}

//DIFD Kiosk
export const ProjectFour = () => {
    const skills = ["Information Design", "User Interaction", "Creative Direction"];
    const color = "coffee";

    return(
        <div className = "container">
            <ProjectHeader
                color={color + " projectFour"}
                title="DIFD Kiosk"
                intro="Choose your character and follow them on an adventure through Winthrop University's Digital Information Design program."
                skills={skills}
            />
            <ProjectDescription
                color={color}
                text={[
                    "The Digital Information Design program at Winthrop University features four concentrations: Digital Commerce, Interactive Media, Web Application Development, and Digital Mass Media.",
                    "What was my first thought when I was asked to design an informational kiosk for the program? \"Character classes.\""
                ]}
            />
        </div>
    )
}

//Senior Show Countdown
export const ProjectFive = () => {
    const skills = ["Web Development", "Creative Direction", "Animation"];
    const color = "teal";

    return(
        <div className = "container">
            <ProjectHeader
                color={color + " projectFive"}
                title="2021 Senior Design&nbsp;Exhibition"
                intro="A countdown to the most epic Senior Design Exhibition in Winthrop University history."
                skills={skills}
            />
            <ProjectDescription
                color={color}
                text={[
                    "The 2020-2021 school year was... let's just say \"interesting.\" But is that going to stop us from putting on an absolutely epic senior exhibition?",
                    "I don't think so."
                ]}
            />
        </div>

    )
}
