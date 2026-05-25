import { useState } from "react";
import logo from "../assets/logo-small.svg"

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="container">
                <nav>
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