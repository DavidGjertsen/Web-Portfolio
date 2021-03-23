import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

export const NavigationMenu = () => {
    const [active, setActive] = useState(false);

    function toggleActive() {
        setActive(!active);
    }

    function toggleActiveOnClick() {
        setTimeout(toggleActive, 300);
    }

    useEffect(() => {
        document.getElementById("menuButton").addEventListener("click", toggleActive);
        document.querySelector(".navfade").addEventListener("click", toggleActive);
        const navElements = document.querySelectorAll(".navLink:not(.selected)");

        navElements.forEach(element => {
            element.addEventListener("click", toggleActiveOnClick);
        });

        return function cleanup() {
            document.getElementById("menuButton").removeEventListener("click", toggleActive);
            document.querySelector(".navfade").removeEventListener("click", toggleActive);
            navElements.forEach(element => {
                element.removeEventListener("click", toggleActiveOnClick);
            });
        }
    });

    const openMenu = "images/icons/menu-open.svg";
    const closeMenu = "images/icons/menu-close.svg";

    return (
        <div className = "navigation">
            <img id="menuButton" src={active ? closeMenu : openMenu} alt={active ? "Close navigation" : "Open navigation"} />
            <div className={"navfade " + (active ? "visible" : "hidden")}></div>
            <ul className={"mainNav " + (active ? "visible" : "hidden")}>
                <li><NavLink className="navLink" exact to="/" activeClassName="selected">Overview</NavLink></li>
                <ul className="subNav">
                    <li><NavLink className="navLink" to="/its-time" activeClassName="selected">It's Time</NavLink></li>
                    <li><NavLink className="navLink" to="/caffeine-mono" activeClassName="selected">Caffeine Mono</NavLink></li>
                    <li><NavLink className="navLink" to="/take-back-your-phone" activeClassName="selected">Take Back Your Phone</NavLink></li>
                    <li><NavLink className="navLink" to="/difd-kiosk" activeClassName="selected">DIFD Kiosk</NavLink></li>
                    <li><NavLink className="navLink" to="/illustration" activeClassName="selected">Digital Illustration</NavLink></li>
                </ul>
                <li><NavLink className="navLink" to="/about-me" activeClassName="selected">About Me</NavLink></li>
                <li><NavLink className="navLink" to="/blog" activeClassName="selected">Blog</NavLink></li>
            </ul>
        </div>
    )
}
