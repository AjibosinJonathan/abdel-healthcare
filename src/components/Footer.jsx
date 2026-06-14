import { Link } from "react-router-dom"
import footerLogo from "../assets/footer-logo.png"
import facebookIcon from "../assets/facebook-icon.svg"
import instagramIcon from "../assets/instagram-icon.svg"
import youtubeIcon from "../assets/youtube-icon.svg"
import xTwitterIcon from "../assets/x-twitter-icon.svg"

function Footer() {
    return(
        <footer className="footer container">
            <div className="footer-logo">
                <Link to="/">
                    <img src={footerLogo} alt="brand logo" height={367} width={1150} />
                </Link>
            </div>
            <div className="footer-grid">
                <div className="footer-col">
                    <p className="footer-brand">Abdel Healthcare Ltd</p>
                </div>
                <div className="footer-col">
                    <h3 className="footer-heading">Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/career">Career</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3 className="footer-heading">Services</h3>
                    <ul className="footer-links">
                        <li><Link to="/services">Personal Care</Link></li>
                        <li><Link to="/services">Dementia Support</Link></li>
                        <li><Link to="/services">Live-In Care</Link></li>
                        <li><Link to="/services">Reablement Care</Link></li>
                        <li><Link to="/services">Supported Living</Link></li>
                        <li><Link to="/services">Specialist Care</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3 className="footer-heading">Contact</h3>
                    <ul className="footer-contact">
                        <li>Phone: 07404663380</li>
                        <li><a href="mailto:info@abdelhealthcare.co.uk">Email: info@abdelhealthcare.co.uk</a></li>
                        <li>Address: Apt 90, 2 Navigation Street, The Horizon Leicester</li>
                    </ul>
                    <div className="footer-socials">
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="facebook icon" />
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="instagram icon" />
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                            <img src={youtubeIcon} alt="youtube icon" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src={xTwitterIcon} alt="x-twitter icon" />
                        </a>
                    </div>

                </div>
            </div>
            <hr className="footer-divider"/>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Abdel Healthcare Ltd. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;