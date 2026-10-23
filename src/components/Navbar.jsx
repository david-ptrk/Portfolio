function Navbar() {
    return (
        <header className="navbar">
            <a href="#home" className="navbar-logo">
                Daud<span>.</span>
            </a>
            
            <nav className="navbar-links" aria-label="Main navigation">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
            
            <a href="#contact" className="navbar-cta">
                Let's Talk
            </a>
        </header>
    );
}

export default Navbar;