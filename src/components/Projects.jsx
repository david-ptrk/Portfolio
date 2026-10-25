import { FaGithub } from "react-icons/fa";

const projects = [
    {
        number: "01",
        title: "Pulse",
        category: "Programming Language",
        description: "An AI-native programming language designed to make machine learning workflows more accessible.",
        technologies: ["Python", "C", "React"],
        liveUrl: "",
        git: "https://github.com/david-ptrk/Pulse",
    },
    {
        number: "02",
        title: "Project Two",
        category: "Web Development",
        description: "A web application built to solve a practical problem through a clean and functional interface.",
        technologies: ["React", "CSS", "JavaScript"],
        liveUrl: "",
        git: "",
    },
    {
        number: "03",
        title: "Project Three",
        category: "Software Development",
        description: "A software project focused on useful features, thoughtful design, and practical problem-solving.",
        technologies: ["JavaScript", "Python"],
        liveUrl: "",
        git: "",
    },
];

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-heading">
                <div>
                    <p className="section-label">MY WORK</p>
                    <h2>Selected Projects<span>.</span></h2>
                </div>
                
                <p className="projects-intro">
                    A selection of things I've built and explored.
                </p>
            </div>
            
            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.number}>
                        <div className="project-card-top">
                            <span className="project-number">{project.number}</span>
                            <div className="project-actions">
                                <a 
                                    href={project.liveUrl || undefined}
                                    className={`project-link ${!project.liveUrl ? "project-link-disabled" : ""}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Live website for ${project.title}`}
                                    aria-disabled={!project.liveUrl}
                                    onClick={(event) => {
                                        if (!project.liveUrl) event.preventDefault();
                                    }}
                                >
                                    <span aria-hidden="true">{"\u2197"}</span>
                                </a>
                                <a 
                                    href={project.git || undefined}
                                    className={`project-link ${!project.git ? "project-link-disabled" : ""}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`GitHub repository for ${project.title}`}
                                    aria-disabled={!project.git}
                                    onClick={(event) => {
                                        if (!project.git) event.preventDefault();
                                    }}
                                >
                                    <FaGithub aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                        
                        <p className="project-category">{project.category}</p>
                        <h3>{project.title}</h3>
                        <p className="project-description">
                            {project.description}
                        </p>
                        
                        <div className="project-technologies">
                            {project.technologies.map((technology) => (
                                <span key={technology}>{technology}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;