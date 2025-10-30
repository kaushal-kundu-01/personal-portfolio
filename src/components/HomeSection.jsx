import { useEffect, useRef } from "react";
import "../styles/HomeSection.css";

function HomeSection() {
    const typingRef = useRef(null);
    const phrases = [
        "Full-Stack Developer",
        "Problem Solver",
        "Creative Thinker"
    ];

    useEffect(() => {
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            const typingText = typingRef.current;

            if (!typingText) return;

            if (isDeleting) {
                typingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
                return;
            }

            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            const typingSpeed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, typingSpeed);
        }

        typeEffect();
    }, []);

    return (
        <section id="home" className="section home-section">
            <div className="home-content">
                <h1 className="glitch" data-text="Hi, I'm Kaushal Kundu">
                    Hi, I'm Kaushal Kundu
                </h1>
                <div className="typing-container">
                    <p className="typing-text" ref={typingRef}></p>
                </div>
                <div className="home-buttons">
                    <a href="#projects" className="btn btn-primary">
                        View My Work
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Get In Touch
                    </a>
                </div>
            </div>
            <div className="scroll-indicator">
                <i className="fas fa-chevron-down"></i>
            </div>
        </section>
    );
}

export default HomeSection;
