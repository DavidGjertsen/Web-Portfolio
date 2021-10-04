import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

export const NavigationMenu = () => {
    const [active, setActive] = useState(false);

    function toggleActive() {
        setActive(!active);
    }

    useEffect(() => {
        document.getElementById("menuButton").addEventListener("click", toggleActive);
        document.querySelector(".navfade").addEventListener("click", toggleActive);
        const navElements = document.querySelectorAll(".navLink:not(.selected)");

        navElements.forEach(element => {
            element.addEventListener("click", toggleActive);
        });

        return function cleanup() {
            document.getElementById("menuButton").removeEventListener("click", toggleActive);
            document.querySelector(".navfade").removeEventListener("click", toggleActive);
            navElements.forEach(element => {
                element.removeEventListener("click", toggleActive);
            });
        }
    });

    const openMenu = "images/icons/menu-open.svg";
    const closeMenu = "images/icons/menu-close.svg";

    return (
        <div className = "navigation">
            <img id="shadow" src="images/icons/Shadow.png" alt=""/>
            <img id="menuButton" src={active ? closeMenu : openMenu} alt={active ? "Close navigation" : "Open navigation"} />
            <div className={"navfade " + (active ? "visible" : "hidden")}></div>
            <ul className={"mainNav " + (active ? "visible" : "hidden")}>
                <li><NavLink className="navLink" exact to="/" activeClassName="selected">Overview</NavLink></li>
                <ul className="subNav">
                    <li><NavLink className="navLink" to="/its-time" activeClassName="selected">It's Time</NavLink></li>
                    <li><NavLink className="navLink" to="/caffeine-mono" activeClassName="selected">Caffeine Mono</NavLink></li>
                    <li><NavLink className="navLink" to="/the-company-helpdesk" activeClassName="selected">The Company Helpdesk</NavLink></li>
                    <li><NavLink className="navLink" to="/difd-kiosk" activeClassName="selected">DIFD Kiosk</NavLink></li>
                    <li><NavLink className="navLink" to="/senior-exhibition" activeClassName="selected">2021 Senior Design&nbsp;Exhibition</NavLink></li>
                    <li><NavLink className="navLink" to="/other-projects" activeClassName="selected">Other Projects</NavLink></li>
                </ul>
                <li><NavLink className="navLink" to="/about-me" activeClassName="selected">About Me</NavLink></li>
                <li><NavLink className="navLink" to="/get-in-touch" activeClassName="selected">Get in touch</NavLink></li>
                {/*<li><NavLink className="navLink" to="/blog" activeClassName="selected">Blog</NavLink></li>*/}
            </ul>
        </div>
    )
}
