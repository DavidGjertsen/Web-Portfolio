import {ProjectHeader, ProjectDescription, ProjectImage, ProjectImageWithCaption, ProjectText, ProjectFin, CMProjectLink, ExhibitionLink} from "./projectComponents.js";

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
                    "This was a partner project. I took care of the majority of the design, and my boyfriend and fellow web programmer Mason Spitz and I worked together to develop the app.",
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
                    "At the end of the day, not every programming font is great. Some are functional but ugly. Some are pretty but hard to use. It's a mess.",
                    "Meet Caffeine Mono, a typeface combines the functionality of modern programming fonts with a playful and aesthetically pleasing design. It is carefully designed to avoid pitfalls common among other programming fonts, and features over 30 useful ligatures to beautify your code."
                ]}
            />
            <section className={"panel projectPanel " + color}>
                <ProjectImage
                    src="images/projects/caffeinemono/font.png"
                    alt="Caffeine Mono: Aesthetic for programmers"
                />
                <ProjectImage
                    src="images/projects/caffeinemono/special.png"
                    alt="A comparison of similar glyphs and an experimental ligature for multiline comments"
                />
                <ProjectImage
                    src="images/projects/caffeinemono/code_example.png"
                    alt="Caffeine mono being used to display React JSX."
                />
            </section>
            <CMProjectLink color={color}/>
            <ProjectFin />
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
            <section className={"panel projectPanel " + color}>
                <ProjectImage
                    src="images/projects/tbyp/callers.png"
                    alt="A phone with a regular caller and a phone with a spam caller"
                />
                <ProjectText
                    text={[
                        "Take Back Your Phone takes over when you recieve a call, does some magical checking in the background, and gives you a heads up if it thinks a call might be spam, which is where the fun begins.",
                        "When a spam call is detected, all you have to do is press the big red \"Vengeance\" button, and listen to the fireworks while the spam caller is rerouted to another spammer elsewhere.",
                    ]}
                />
                <ProjectImage
                    src="images/projects/tbyp/slam.png"
                    alt="A spammer getting slammed on the left, and the app settings on the right."
                />
            </section>
            <ProjectDescription
                color={color}
                text={[
                    "Revenge is sweet.",
                    "This is by far my most popular project, and everyone I've ever talked to about it wishes it were real (though no one more than I!). Perhaps someday..."
                ]}
            />
            <ProjectFin />
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
            <section className={"panel projectPanel " + color}>
                <ProjectImage
                    src="images/projects/kiosk/page_one.jpg"
                    alt="Prepare to start your adventure"
                />
                <ProjectImage
                    src="images/projects/kiosk/page_two.jpg"
                    alt="Choose from one of four character classes"
                />
                <ProjectImage
                    src="images/projects/kiosk/page_three.jpg"
                    alt="For example, the Interactive Media class, with high level in Design"
                />
                <ProjectImage
                    src="images/projects/kiosk/page_four.jpg"
                    alt="Take on the Final Boss: Capstone"
                />
                <ProjectImage
                    src="images/projects/kiosk/page_five.jpg"
                    alt="Your journey is complete, but there are more adventures to be had with Digital Information Design"
                />
            </section>
            <ProjectDescription
                color={color}
                text={[
                    "This project is one of my favorites. It's the perfect combination of my skill as a designer, my abilities as an artist, and my experience as a programmer."
                ]}
            />
            <ProjectFin />
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
                intro="The most epic Senior Design Exhibition in Winthrop University history."
                skills={skills}
            />
            <ProjectDescription
                color={color}
                text={[
                    "The 2020-2021 school year was challenging for obvious reasons. But is a once-in-a-century global pandemic going to stop the Winthrop University senior design class from putting on an absolutely epic exhibition?",
                    "Not in a million years."
                ]}
            />
            <section className={"panel projectPanel " + color}>
                <ProjectImage
                    src="images/projects/exhibition/exhibition.gif"
                    alt="The famed countdown to May 3rd"
                />
            </section>
            <ExhibitionLink
                color={color}
            />
            <ProjectFin />
        </div>

    )
}

export const ProjectSix = () => {
    const skills = ["Design", "Creative Direction", "Experimentation"];
    const color = "coffee";

    return(
        <div className = "container">
            <ProjectHeader
                color={color + " projectSix"}
                title="Other Projects"
                intro="A collection of smaller projects and experiments."
                skills={skills}
            />
            <ProjectDescription
                color={color}
                text={[
                    "I'm a very creative person, so I've created a lot of projects and experiments ranging from digital and physical design work to illustration and artwork. Most of these aren't large enough to justify their own page, so I've collected some of them here in this gallery."
                ]}
            />
            <section className={"panel projectPanel " + color}>
                <ProjectImageWithCaption
                    src="images/projects/otherProjects/Google.jpg"
                    alt="A neumorphic redesign of the Google homepage"
                    caption="The Google homepage is classic. For this experimental redesign, I kept the layout similar while incorporating neumorphic design elements."
                />
                <ProjectImageWithCaption
                    src="images/projects/otherProjects/cooling_towers.jpg"
                    alt="A painting of a nighttime scene. Some sci-fi cooling towers are visible in the distance."
                    caption="A digital painting inspired by the works of Simon Stålenhag. Something about atmospheric landscapes with futuristic megastructures in the distance is just lovely."
                />
                <ProjectImageWithCaption
                    src="images/projects/otherProjects/blobOS.jpg"
                    alt="A fake computer desktop"
                    caption="An early concept I came up with for the 2021 Winthrop Senior Design Exhibition. The idea of a fake desktop quickly got scrapped, but some elements made their way into later versions of the design."
                />
                <ProjectImageWithCaption
                    src="images/projects/otherProjects/stickers.jpg"
                    alt="Some funny programming stickers on the back of a laptop, featuring such jokes as 'error: coffee not found'"
                    caption="These are some programming-related stickers I designed and mocked up. The font is Caffeine Mono."
                />
                <ProjectImageWithCaption
                    src="images/projects/otherProjects/bumblebee.jpg"
                    alt="A code editor with pastel yellow and black coloration"
                    caption="I created the design for Bumblebee while experimenting with Electron. It's heavily inspired by Atom, my go-to code editor, but with some nice new features and a cheerfully pastel color scheme."
                />
                <ProjectImageWithCaption
                    src="images/projects/otherProjects/Posters.png"
                    alt="Travel posters for Canada and Argentina"
                    caption="One thing I love to do while travelling is trying new and unique foods. I channelled that into this pair of travel posters, featuring Canadian lobster rolls and Argentinian provoleta."
                />
            </section>
            <ProjectDescription
                color={color}
                text={[
                    "Be sure to check back, because I will probably be adding more work soon. I'm always experimenting with something or other."
                ]}
            />
            <ProjectFin />
        </div>

    )
}
