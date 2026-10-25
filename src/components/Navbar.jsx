import { useEffect, useState } from "react";

function Navbar() {
    const [active, setActive] = useState("home");
    
    useEffect(() => {
        const sections = document.querySelectorAll(
            "#home, #projects, #about, #contact"
        );
        
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                
                if (visibleSections.length > 0) {
                    setActive(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -70% 0px",
                threshold: 0,
            }
        );
        
        sections.forEach((section) => observer.observe(section));
        
        return () => observer.disconnect();
    }, []);
    
    return (
        <header className="navbar">
            <a href="#home" className="navbar-logo">
                Daud<span>.</span>
            </a>
            
            <nav className="navbar-links" aria-label="Main navigation">
                {["home", "projects", "about", "contact"].map((section) => (
                    <a
                        key={section}
                        href={`#${section}`}
                        className={active === section ? "active" : ""}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                ))}
            </nav>
            
            <a href="#contact" className="navbar-cta">
                Let's Talk
            </a>
        </header>
    );
}

export default Navbar;