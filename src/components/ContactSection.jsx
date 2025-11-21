import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactSection.css";

function ContactSection() {
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setStatus("");

        try {
            await emailjs.sendForm(
                "service_6xjj1wr",
                "template_w4h41vf",
                formRef.current,
                "0iEz0vhuwEYZIVNuH"
            );

            setMessage("Message sent successfully! I’ll get back to you soon.");
            setStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setMessage("Oops! Something went wrong. Please try again later.");
            setStatus("error");
        } finally {
            setLoading(false);
            setTimeout(() => {
                setMessage("");
                setStatus("");
            }, 5000);
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title reveal">Get In Touch</h2>
                <div className="contact-content reveal">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>I’m always interested in hearing about new projects and opportunities.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>k.kaushalkundu@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>+91 86890 83818</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Haryana, India</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/kaushal-kundu-01" target="_blank" className="social-link"><i className="fab fa-github"></i></a>
                            <a href="#" target="_blank" className="social-link"><i className="fab fa-linkedin"></i></a>
                            <a href="#" target="_blank" className="social-link"><i className="fab fa-twitter"></i></a>
                            <a href="#" target="_blank" className="social-link"><i className="fab fa-codepen"></i></a>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                            <div className="form-group">
                                <input type="text" name="from_name" placeholder="Your Name" required />
                            </div>

                            <div className="form-group">
                                <input type="email" name="from_email" placeholder="Your Email" required />
                            </div>

                            <div className="form-group">
                                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                {!loading ? (
                                    <span className="btn-text">Send Message</span>
                                ) : (
                                    <span className="btn-loading">
                                        <i className="fas fa-spinner fa-spin"></i>
                                    </span>
                                )}
                            </button>

                        </form>

                        {message && (
                            <div className={`form-message ${status}`}>
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
