import "../styles/Navbar.css";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">Portfolio</div>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <a href="#home" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;