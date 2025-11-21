import "../styles/AboutSection.css";

function AboutSection() {
    return (<>
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title reveal">About Me</h2>
                <div className="about-content reveal">
                    <div className="about-text">
                        <p>I'm a passionate developer with a love for creating beautiful, functional websites and
                            applications. With expertise in modern web technologies, I bring ideas to life through clean
                            code and thoughtful design.</p>
                        <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source
                            projects, or sharing knowledge with the developer community.</p>
                    </div>
                    <div className="skills-container">
                        <h3>My Skills</h3>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <i className="fab fa-html5"></i>
                                <span>HTML5</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-css3-alt"></i>
                                <span>CSS3</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-js"></i>
                                <span>JavaScript</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-react"></i>
                                <span>React</span>
                            </div>
                            <div className="skill-item">
                                <i className="fa-brands fa-java"></i>
                                <span>Java</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-git-alt"></i>
                                <span>Git</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-database"></i>
                                <span>SQL</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-node-js"></i>
                                <span>Node.js</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default AboutSection;