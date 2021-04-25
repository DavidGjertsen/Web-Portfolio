import {ProjectHeader, ProjectDescription, ProjectImage, ProjectText, ProjectFin} from "./projectComponents.js";

//It's Time
export const ProjectOne = () => {
    const skills = ["Mobile Design & Development", "UX Design", "MySQL"];
    const color = "teal";

    return(
        <div className = "container" id="top">

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

            <section className={"panel projectPanel " + color}>
                <ProjectImage
                    src="/images/projects/itstime/Frame 6.png"
                    alt="Landing page for It's Time, with a clean UI and a prominent Start button"
                />
                <ProjectText
                    text={[
                        "A clean and simple UI ensures that your employees will easily be able to navigate the app. It only takes seconds to start and stop tracking a task, meaning your workers stay focused on what's most important."
                    ]}
                />
                <ProjectImage
                    src="/images/projects/itstime/Frame 4.png"
                    alt="Selecting from a list of preset tasks"
                />
                <ProjectText
                    text={[
                        "Create a list of predefined tasks for your workers to choose from, or allow them to create their own tasks.",
                        "The app keeps track of time even if the app is closed or their phone is turned off."
                    ]}
                />
                <ProjectImage
                    src="/images/projects/itstime/Frame 5.png"
                    alt="The history panel, where workers and employers can see work history"
                />
                <ProjectText
                    text={[
                        "You and your employees can easily keep track of completed work in the history panel.",
                        "Have a forgetful employee? With the task editor, you and your employees can fix mistakes to ensure that their work history is as accurate as possible."
                    ]}
                />
            </section>

            <ProjectDescription
                color={color}
                text={[
                    "This was a partner project. I took care of the design, and my boyfriend and fellow web programmer Mason Spitz and I worked together on development.",
                    "Below are some of the early concepts that I designed."
                ]}
            />

            <section className={"panel projectPanel " + color}>
                <ProjectImage
                    src="/images/projects/itstime/Frame 7.png"
                    alt="Early concept work for Timely, which eventually became It's Time"
                />
                <ProjectImage
                    src="/images/projects/itstime/Kit of Parts.png"
                    alt="A kit of parts for Timely"
                />
            </section>

            <ProjectDescription
                color={color}
                text={[
                    "Many aspects of the original concepts worked their way into the final version, including the neumorphic UI, as well as colors and fonts. However, the final project was simplified to better meet the project requirements and to allow us to meet the deadline.",
                    "It's Time was a unique project that I am proud of."
                ]}
            />

            <ProjectFin />

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
