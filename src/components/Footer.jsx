import footerLogo from "../assets/footer-logo.png"
import facebookIcon from "../assets/facebook-icon.svg"
import instagramIcon from "../assets/instagram-icon.svg"
import youtubeIcon from "../assets/youtube-icon.svg"
import xTwitterIcon from "../assets/x-twitter-icon.svg"

function Footer() {
    return(
        <section className="container">
            <footer className="footer">
                <div className="footer-logo">
                    <img src={footerLogo} alt="brand logo" height={367} weight={1150} />
                </div>
                <div className="footer-grid">
                    <div className="footer-col">
                        <p className="footer-brand">Abdel Healthcare Ltd</p>
                    </div>
                    <div className="footer-col">
                        <h3 className="footer-heading">Links</h3>
                        <ul className="footer-links">
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="footer-heading">Services</h3>
                        <ul className="footer-links">
                            <li><a href="#">Personal Care</a></li>
                            <li><a href="#">Dementia Support</a></li>
                            <li><a href="#">Live-In Care</a></li>
                            <li><a href="#">Reablement Care</a></li>
                            <li><a href="#">Supported Living</a></li>
                            <li><a href="#">Specialist Care</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="footer-heading">Contact</h3>
                        <ul className="footer-contact">
                            <li>Phone: +234 70 3076 9220</li>
                            <li>Email: info@abdelhealthcare.co.uk</li>
                            <li>Address: Plot 56, United Kingdom</li>
                        </ul>
                        <div className="footer-socials">
                            <img src={facebookIcon} alt="facebook icon" />
                            <img src={instagramIcon} alt="instagram icon" />
                            <img src={youtubeIcon} alt="youtube icon" />
                            <img src={xTwitterIcon} alt="x-twitter icon" />
                        </div>
                    </div>
                </div>
                <hr className="footer-divider"/>
                <p className="footer-copyright">&copy; 2026 Abdel Healthcare Ltd. All Rights Reserved.</p>
            </footer>
        </section>
    );
}

export default Footer;