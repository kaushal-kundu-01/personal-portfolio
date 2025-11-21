import "../styles/ProjectSection.css";

function ProjectSection() {
    return (<>
        < section id="projects" className="section projects-section" >
            <div className="container">
                <h2 className="section-title reveal">My Projects</h2>
                <div className="projects-grid">
                    <div className="project-card reveal">
                        <div className="project-image">
                            <img src="" alt=""></img>
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i></a>
                                    <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>Coming Soon</h3>
                            <p>Coming Soon</p>
                            <div className="project-tags">
                                <span className="tag">#</span>
                                <span className="tag">#</span>
                                <span className="tag">#</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card reveal">
                        <div className="project-image">
                            <img src="" alt=""></img>
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i></a>
                                    <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>Coming Soon</h3>
                            <p>Coming Soon</p>
                            <div className="project-tags">
                                <span className="tag">#</span>
                                <span className="tag">#</span>
                                <span className="tag">#</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card reveal">
                        <div className="project-image">
                            <img src="" alt=""></img>
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i></a>
                                    <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>Coming Soon</h3>
                            <p>Coming Soon</p>
                            <div className="project-tags">
                                <span className="tag">#</span>
                                <span className="tag">#</span>
                                <span className="tag">#</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </>)
}

export default ProjectSection;