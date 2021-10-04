import {ProjectHeader, ProjectDescription, ProjectImage, ProjectImageWithCaption, ProjectText, ProjectFin, CMProjectLink, ExhibitionLink} from "./projectComponents.js";

//It's Time
export const ProjectOne = () => {
    const skills = ["Mobile Design", "Mobile Development", "UI / UX"];
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
    const skills = ["Application Design", "Prototyping", "Teamwork"];
    const color = "teal";

    return(
        <div className = "container">
            <ProjectHeader
                color={color + " projectThree"}
                title="The Company Helpdesk"
                intro="A solution developed from start to finish."
                skills={skills}
            />
            <ProjectDescription
                color={color}
                text={[
                    "This project was designed and developed as part of the Spring 2021 Digital Information Design Capstone project at Winthrop University. The request was to design a helpdesk for a real-world company that was recieving far too many internal support tickets.",
                    "For this project I served as the front-end designer and developer. Most of my contributions involved the creation of a rough wireframe and an accurate mockup of the design.",
                    "All branding assets related to the client have been removed at their request."
                ]}
            />
            <section className={"panel projectPanel " + color}>
                <ProjectImage
                    src="images/projects/helpdesk/wireframe_landing.png"
                    alt="A rough wireframe of the landing page for the helpdesk, featuring a searchbar and a selection of categories"
                />
                <ProjectImage
                    src="images/projects/helpdesk/wireframe_article.png"
                    alt="A rough wireframe of an article page for the helpdesk"
                />
                <ProjectImage
                    src="images/projects/helpdesk/wireframe_form.png"
                    alt="A rough wireframe of the ticket submission form for the helpdesk"
                />
                <ProjectImage
                    src="images/projects/helpdesk/wireframe_dashboard.png"
                    alt="A rough wireframe of the ticket dashboard for the helpdesk"
                />
                <ProjectText
                    text={[
                        "The project began with a set of wireframes to rough out the idea. After some research, our team quickly decided to build a self-service system. The Helpdesk presents the user with a set of articles containing solutions to problems commonly encountered by the client's employees, thus reducing the number of tickets submitted for trivial issues.",
                        "In case a user found their issue was not present, a ticket submission form and a dashboard for managing tickets was also added."
                    ]}
                />
                <ProjectText
                    text={[
                        "As I worked to design a more accurate mockup of the design, I took heed of the client's feedback and the results of our usability tests on the wireframe.",
                    ]}
                />
                <ProjectImage
                    src="images/projects/helpdesk/mockup_landing.png"
                    alt="A mockup of the landing page for the helpdesk, featuring a searchbar and a selection of categories"
                />
                <ProjectImage
                    src="images/projects/helpdesk/mockup_solution.png"
                    alt="A mockup of an article page for the helpdesk"
                />
                <ProjectImage
                    src="images/projects/helpdesk/mockup_dashboard.png"
                    alt="A mockup of the updated dashboard for the helpdesk"
                />
                <ProjectImage
                    src="images/projects/helpdesk/mockup_ticket.png"
                    alt="A mockup of the ticket communication system for the helpdesk"
                />
                <ProjectText
                    text={[
                        "The mockup mostly stayed true to the wireframe layout, with small adjustments here and there. I established a design language that combined the client's branding guide with examples of helpdesks that the team found during our initial research. The result was a clean and cohesive design across every page of the helpdesk.",
                        "The largest change in the mockup compared to the wireframe was the layout of the ticket dashboard. Based on feedback from the client, the layout was changed from a card format to a list format. A separate ticket information page was added, complete with an SMS-style messaging system to facilitate communication between IT and the user.",
                    ]}
                />
                <ProjectText
                    text={[
                        "The mockup was swiftly approved by the client, and development on the finalized version was started shortly after.",
                    ]}
                />
                <ProjectImage
                    src="images/projects/helpdesk/final_landing.png"
                    alt="The final version of the helpdesk landing page"
                />
                <ProjectImage
                    src="images/projects/helpdesk/final_form.png"
                    alt="The final version of the helpdesk ticket submission form"
                />
                <ProjectImage
                    src="images/projects/helpdesk/final_branding.png"
                    alt="The design language, including colors and icons, developed for the finalized version"
                />
                <ProjectText
                    text={[
                        "The final project was built using React. SASS was used to style the front-end, and Node.js was used as a back-end. I completed the vast majority of the front-end styling, and built many React components for the back-end developers to use.",
                        "As a finishing touch, I designed new icons to use across the site, most notably on the landing page. These icons better fit the client's design language."
                    ]}
                />
            </section>
            <ProjectDescription
                color={color}
                text={[
                    "My contributions to this project earned me recognition for excellence, service, and leadership in Digital Information Design, and also my degree. Not to shabby, if I do say so myself.",
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
                <ProjectImageWithCaption
                    src="images/projects/otherProjects/badbotlogos.png"
                    alt="A set of three logos designed for Bad Bot"
                    caption="Three variations on a logo design. Commissioned by Bad Bot Corp, a VRChat community."
                />
            </section>
            <ProjectDescription
                color={color}
                text={[
                    "Be sure to check back, because I will probably be adding more work soon. I'm always experimenting with something."
                ]}
            />
            <ProjectFin />
        </div>

    )
}
