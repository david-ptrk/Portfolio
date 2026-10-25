function Footer() {
    return (
        <footer className="footer">
            <a href="#home" className="footer-logo">
                David<span>.</span>
            </a>
            
            <p>Designed and built by Daud Anjum.</p>
            
            <a
                href="https://github.com/david-ptrk"
                target="_blank"
                rel="noreferrer"
                className="footer-github"
            >
                GitHub <span aria-hidden="true">{"\u2197"}</span>
            </a>
            
            <p className="footer-copyright">
                © {new Date().getFullYear()} Daud Anjum. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;