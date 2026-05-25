import heroimg1 from '../assets/hero-img1.png'
import heroimg2 from '../assets/hero-img2.png'

function Hero() {
    return (
        <section className="container">
            <div className="hero-flex">
                <div className="hero-text">
                    <h1>Trusted dignified care
                        for your loved ones</h1>
                    <p>Compassionate healthcare support tailored to provide comfort, safety,
                        and peace of mind for every stage of life.</p>
                    <button className="pill-shape">Explore Our Services</button>
                </div>
                <div className="hero-images">
                    <img src={heroimg1} alt="healthcare professional caring for a patient" className='hero-img1' height={260} width={345}/>
                    <img src={heroimg2} alt="healthcare professional" className='hero-img2' height={233} width={350}/>
                </div>
            </div>
        </section>
    );
}

export default Hero;