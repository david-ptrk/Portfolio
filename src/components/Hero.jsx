function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-particles" aria-hidden="true">
                {Array.from({ length: 14 }, (_, index) => (
                    <span key={index} className="hero-particle" />
                ))}
            </div>
            <p className="hero-label">WEB DEVELOPER</p>
            
            <h1>
                Building digital
                <br />
                experiences that
                <br />
                <span>make a difference.</span>
            </h1>
            
            <p className="hero-description">
                I'm Daud, an IT graduate and web developer interested
                in building useful software and solving real-world problems.
            </p>
            
            <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                    View My Work <span aria-hidden="true">{"\u2197"}</span>
                </a>
                
                <a href="#contact" className="button button-secondary">
                    Get in Touch
                </a>
            </div>
        </section>
    );
}

export default Hero;