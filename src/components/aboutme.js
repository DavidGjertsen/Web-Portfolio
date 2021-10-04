import {Link} from "react-router-dom";

export const AboutMe = () => {
    return(
        <div className="container">
            <section className="panel altColor about">
                <section className="aboutPage">
                    <div className="panelText">
                        <p>Hi, I'm David. I'm a front-end designer and digital artist currently located in Ballantyne, NC. I enjoy designing projects that look good and work well.</p>
                        <p>I'm a person with a wide palette of creative experiences. Yeah, I design websites, but I've also dabbled in graphic design, typography, 2D and 3D animation, digital and traditional illustration, music and video production, sound design, and game development, just to name a few.</p>
                        <p>I'm currently looking for work. If you're hiring and like what you see, please <Link className="navLink" to="/get-in-touch">get in touch</Link>!</p>
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
