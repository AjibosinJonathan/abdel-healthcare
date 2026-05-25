import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo-small.svg"

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
        const navLinks = document.querySelectorAll(".nav-links a");
        navLinks.forEach(link => {
            link.addEventListener("click", handleLinkClick);
        });

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <header>
            <div className="container">
                <nav ref={navRef}>
                    <a href="#" className="nav-logo">
                        <img src={logo} alt="brand logo" width={30} height={30} />
                        <span>Abdel Healthcare Limited</span>
                    </a>

                    <button onClick={toggleMenu} className={`hamburger ${isMenuOpen ? "active" : ""}`} aria-expanded={isMenuOpen.toString()} aria-controls="nav-links"
                        aria-label="Toggle navigation">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                    <div className={`nav-links-container ${isMenuOpen ? "active" : ""}`} id="nav-links">
                        <ul className="nav-links">
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <button className="pill-shape">Call Us 03045678399</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;