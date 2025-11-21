import { useEffect, useState } from "react";
import "../styles/BackToTop.css";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`back-to-top ${visible ? "visible" : ""}`}
            onClick={scrollToTop}
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
}

export default BackToTop;
