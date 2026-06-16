import Card from './Card';
import shieldIcon from '../assets/shield.svg';
import personIcon from '../assets/person.svg';

function Intro() {
    return (
        <section className="container">
            <div className="intro">
                <h2>Why Choose Us?</h2>
                <div className="intro-grid">
                    <Card
                        img={shieldIcon}
                        title={"Trusted and Insured"}
                        text={"Insured healthcare services you can rely on with confidence and peace of mind."}
                        altText={"Shield icon"}
                    />
                    <Card
                        img={personIcon}
                        title={"Personalized Care Plans"}
                        text={"We work with medical and non-medical professionals to create care solutions tailored to every individual’s needs."}
                        altText={"Person Icon"}
                    />
                    <Card 
                        img={shieldIcon}
                        title={"Wide Range of Services"}
                        text={"From Home care and elderly care to dementia, Live-In, and specialized support, we provide compassionate care for every stage of life."}
                        altText={"Shield Icon"}
                    />
                    <Card 
                        img={personIcon}
                        title={"Compassionate Support"}
                        text={"Our focus is improving quality of life while providing comfort, dignity, and reassurance for both clients and their families"}
                        altText={"Person Icon"}
                    />
                    <div className="img-card">
                        <button className="intro-btn">Get a Call Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;