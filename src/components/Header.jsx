import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-small.svg"
import phoneIcon from "../assets/phone-icon.svg"

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navRef = useRef(null);
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    }

    const handleEscape = (event) => {
        if(event.key === "Escape") {
            setIsMenuOpen(false);
        }
    }

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <header>
            <div className="container">
                <nav ref={navRef}>
                    <Link to="/" className="nav-logo">
                        <img src={logo} alt="brand logo" width={30} height={30} />
                        <span>Abdel Healthcare Limited</span>
                    </Link>

                    <button onClick={toggleMenu} className={`hamburger ${isMenuOpen ? "active" : ""}`} aria-expanded={isMenuOpen.toString()} aria-controls="nav-links"
                        aria-label="Toggle navigation">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                    <div className={`nav-links-container ${isMenuOpen ? "active" : ""}`} id="nav-links">
                        <ul className="nav-links">
                            <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
                            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
                            <li><Link to="/career" onClick={handleLinkClick}>Career</Link></li>
                            <li><Link to="/faq" onClick={handleLinkClick}>FAQ</Link></li>
                        </ul>
                    </div>
                    <button className="pill-shape"><img src={phoneIcon} alt={"phone icon"} width={20} height={20} /> Call Us 07404663380</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;