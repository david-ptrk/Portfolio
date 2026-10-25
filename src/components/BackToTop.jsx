import { useEffect, useState } from "react";

function BackToTop() {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        function handleScroll() {
            setVisible(window.scrollY > 300);
        }
        
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    if (!visible) return null;
    
    return (
        <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            title="Back to top"
        >{"\u2191"}</button>
    );
}

export default BackToTop;