import heroimg from '../assets/heroImage.webp'

function Hero() {
    return (
        <section className="container">
            <div className="hero-flex">
                <div className="hero-text">
                    <h1>Trusted dignified care
                        for your loved ones</h1>
                    <p>Compassionate healthcare support tailored to provide comfort, safety,
                        and peace of mind for every stage of life.</p>
                    <div className="hero-cta">
                        <p>I'm looking for <br/> <span className="bold-text">Adult Care</span> 
                        <br/> <strong>Services</strong></p>
                        <button className="hero-btn">Read more</button>
                    </div>
                </div>
                <img src={heroimg} alt="healthcare professional caring for a patient" className='hero-img' width={500} height={500}/>
            </div>
        </section>
    );
}

export default Hero;