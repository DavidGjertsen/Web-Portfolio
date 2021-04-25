export const AboutMe = () => {
    return(
        <div className="container">
            <section className="panel altColor about">
                <section className="aboutPage">
                    <div className="panelText">
                        <p>Hi, I'm David. I'm a front-end web developer and digital creator currently located in Rock Hill, South Carolina. I'm great at designing and building web applications that look good and work well.</p>
                        <p>I tend towards React and Sass for building websites, but I always enjoy the opportunity to learn something new and exciting.</p>
                        <ul id="achievementsList">
                            <p>Achievements:</p>
                            <li>B.S. in Digital Information Design: Interactive Media from Winthrop University</li>
                            <li>Recognized by Dr. Michael Whitney for excellence, service, and leadership in Digital Information Design: Interactive Media</li>
                            <li>Earned the rank of Eagle in Troop 119</li>
                        </ul>
                    </div>
                    <img src="images/me.jpg" alt="David Gjertsen sitting on some steps"/>
                </section>
            </section>
        </div>
    )
}
