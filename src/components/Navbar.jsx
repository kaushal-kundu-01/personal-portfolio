import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
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
                        <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
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
