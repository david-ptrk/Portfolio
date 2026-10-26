const skills = [
    "HTML & CSS",
    "Bootstrap",
    "JavaScript",
    "Python",
    "Django",
    "React JS",
    "C/C++",
    "PHP & Laravel",
    "MySQL",
];

function About() {
    return (
        <section className="about" id="about">
            <div className="about-layout">
                <div className="about-heading">
                    <p className="section-label">A LITTLE ABOUT ME</p>
                    <h2>
                        Developer by profession.
                        <br />
                        <span>Learner by nature.</span>
                    </h2>
                </div>
                
                <div className="about-content">
                    <p>
                        I'm an Information Technology graduate and computer science instructor
                        with an interest in web developement, software development, and
                        problem-solving.
                    </p>
                    <p>
                        I enjoy understanding how things work, exploring new technologies, and
                        building software that serves a practical purpose. I'm always looking for
                        opportunities to improve my skills and learn something new.
                    </p>
                    <h3>Technologies I work with</h3>
                    <div className="about-skills">
                        {skills.map((skill) => (
                            <span key={skill}>{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;