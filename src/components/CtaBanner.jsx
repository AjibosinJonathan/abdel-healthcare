import ctaImg from "../assets/cta-img.webp"

function CtaBanner() {
    return(
        <section className="cta-banner">
            <div className="cta-banner-card">
                <div className="cta-banner-content">
                    <h2>Giving the best care your loved ones deserve</h2>
                    <p>We are here for you.</p>
                    <button className="cta-banner-btn">Schedule a Call</button>
                </div>
                <div className="cta-banner-img">
                    <img src={ctaImg} alt="Happy elderly couple embracing" width={875} height={802}/>
                </div>
            </div>
        </section>
    );
}

export default CtaBanner;