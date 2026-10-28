import { useEffect, useState } from "react";

function Navbar() {
    const [active, setActive] = useState("home");
    
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "dark"
    );
    
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);
    
    function toggleTheme() {
        setTheme((current) => current === "dark" ? "light" : "dark");
    }
    
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
            
            <div className="navbar-actions">
                <button
                    type="button"
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === "dark" ? "Light" : "dark"} mode`}
                    title={`Switch to ${theme === "dark" ? "Light" : "dark"} mode`}
                >
                    {theme === "dark" ? (
                        <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>
                        </svg>
                    ) : (
                        <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
                        </svg>
                    )}
                </button>
                
                <a href="#contact" className="navbar-cta">
                    Let's Talk
                </a>
            </div>
        </header>
    );
}

export default Navbar;