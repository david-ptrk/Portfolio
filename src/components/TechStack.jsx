import { useEffect, useRef } from 'react';
import './TechStack.css';

const technologies = [
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'Django', icon: 'devicon-django-plain' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'Linux', icon: 'devicon-linux-plain' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
];

function TechStack() {
    const gridRef = useRef(null);
    
    useEffect(() => {
        const cards = gridRef.current?.querySelectorAll('.tech-card');
        if (!cards) return;
        
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );
        
        cards.forEach((card) => observer.observe(card));
        
        return () => observer.disconnect();
    }, []);
    
    return (
        <section className="tech-stack" id='technologies'>
            <div className="tech-stack-container">
                <div className="tech-stack-heading">
                    <span className="tech-stack-eyebrow">MY TOOLKIT</span>
                    <h2>Technologies &amp; Tools</h2>
                    <p>Technologies and tools I use to build, develop, and manage projects.</p>
                </div>
                
                <div className="tech-grid" ref={gridRef}>
                    {technologies.map((tech) => (
                        <div className="tech-card" key={tech.name}>
                            <i
                                className={`tech-icon ${tech.icon}`}
                                aria-hidden="true"
                            />
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;