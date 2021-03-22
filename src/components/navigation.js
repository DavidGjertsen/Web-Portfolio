import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

export const NavigationMenu = () => {
    const [active, setActive] = useState(false);

    function toggleActive() {
        setActive(!active);
    }

    useEffect(() => {
        document.getElementById("menuButton").addEventListener("click", toggleActive);

        return function cleanup() {
            document.getElementById("menuButton").removeEventListener("click", toggleActive);
        }
    });

    const openMenu = "images/icons/menu-open.svg";
    const closeMenu = "images/icons/menu-close.svg";

    return (
        <div className = "navigation">
            <img id="menuButton" src={active ? closeMenu : openMenu} alt={active ? "Close navigation" : "Open navigation"} />
            <ul className={active ? "mainNav visible" : "mainNav hidden"}>
                <li><NavLink exact to="/" activeClassName="selected">Overview</NavLink></li>
                <ul className="subNav">
                    <li><NavLink to="/its-time" activeClassName="selected">It's Time</NavLink></li>
                    <li><NavLink to="/caffeine-mono" activeClassName="selected">Caffeine Mono</NavLink></li>
                    <li><NavLink to="/take-back-your-phone" activeClassName="selected">Take Back Your Phone</NavLink></li>
                    <li><NavLink to="/difd-kiosk" activeClassName="selected">DIFD Kiosk</NavLink></li>
                    <li><NavLink to="/illustration" activeClassName="selected">Digital Illustration</NavLink></li>
                </ul>
                <li><NavLink to="/about-me" activeClassName="selected">About Me</NavLink></li>
                <li><NavLink to="/blog" activeClassName="selected">Blog</NavLink></li>
            </ul>
        </div>
    )
}
