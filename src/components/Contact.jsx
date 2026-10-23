function Contact() {
    return (
        <section className="contact" id="contact">
            <p className="section-label">GET IN TOUCH</p>
            
            <h2>
                Have a project in mind?
                <br />
                <span>Let's talk.</span>
            </h2>
            
            <p className="contact-description">
                I'm always interested in discussing software, new ideas,
                and opportunities to build something useful.
            </p>
            
            <a
                href="mailto:davidptrk7@gmail.com"
                className="button button-primary"
            >Send Me an Email <span aria-hidden="true">{"\u2197"}</span></a>
            
            <div className="contact-links">
                <a 
                    href="https://github.com/david-ptrk"
                    target="_blank"
                    rel="noreferrer"
                >Github <span aria-hidden="true">{"\u2197"}</span></a>
            </div>
        </section>
    );
}

export default Contact;