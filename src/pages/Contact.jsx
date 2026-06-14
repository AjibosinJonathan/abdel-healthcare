import { useRef } from "react"
import emailjs from "@emailjs/browser"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CtaBanner from "../components/CtaBanner"
import contactHeroImg from "../assets/contact-hero-img.png"

function Contact() {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault(); // Prevents the page from refreshing
        // Send the form using emailjs
        emailjs.sendForm(
            'service_zidstkf', 
            'template_8gda74w', 
            form.current, {
                publicKey: 'swAB7cZd5HBmHJ5gE',
            }
        ).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                window.alert('Message sent successfully');
                form.current.reset(); // Clear the form after success
            },
            (error) => {
                console.log('FAILED...', error.text);
                window.alert('Failed to send message, please try again.');
            },
        );
    };

    return(
        <>
            <div className="contact-hero-container">
                <Header />
                <div className="contact-hero">
                    <div className="contact-hero-content">
                        <h1>Contact Us</h1>
                        <p>We are eager to connect with you and discuss how we can support you and your loved ones. </p>
                    </div>
                    <div className="contact-hero-img">
                        <img src={contactHeroImg} alt="Older man on phone" />
                    </div>
                </div>
                <div className="hero-wave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                
                        <path fill="var(--color-primary-dark)" d="M0,50 C100,50 150,60 250,60 C350,60 450,40 600,40 C750,40 850,80 1000,80 C1150,80 1300,30 1440,30 L1440,150 L0,150 Z"></path>
                
                        <path fill="var(--bgColor-primary)" d="M0,100 C100,100 150,20 250,20 C350,20 450,100 600,100 C750,100 850,30 1000,30 C1150,30 1300,120 1440,120 L1440,150 L0,150 Z"></path>
                    </svg>
                </div>
            </div>

            <section className="contact-form-section">
                <div className="contact-form-header">
                    <h2>Get in Touch</h2>
                    <div className="title-divider"></div>
                    <p>Fill in the form to contact us</p>

                </div>

                <form ref={form} onSubmit={sendEmail} id="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label for="name" class="sr-only">Name</label>
                            <input type="text" id="name" name="user_name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <label for="phone" class="sr-only">Phone</label>
                            <input type="tel" id="phone" name="user_phone" placeholder="Phone" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email" class="sr-only">Email</label>
                        <input type="email" id="email" name="user_email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <label for="message" class="sr-only">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <input type="hidden" name="website_name" value="Abdel Healthcare" />
                    <input type="hidden" name="website_email" value="info@abdelhealthcare.co.uk" />

                    <button type="submit" name="submit" className="service-block-btn">Send Message</button>
                </form>
            </section>
            <CtaBanner />
            <Footer />
        </>
    );
}

export default Contact;