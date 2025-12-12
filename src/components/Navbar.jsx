import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);

            const sections = document.querySelectorAll(".section");
            let current = "home";

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.clientHeight;

                if (window.scrollY >= top - 200) {
                    current = section.getAttribute("id");
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-container">
                <div className="nav-logo">Portfolio</div>

                <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                    <li className="nav-item">
                        <a
                            href="#home"
                            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="#about"
                            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="#projects"
                            className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Projects
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="#contact"
                            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
