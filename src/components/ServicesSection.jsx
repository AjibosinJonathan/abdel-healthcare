import ServiceBlock from "./ServiceBlock"
import serviceImg1 from "../assets/service-img1.webp"
import serviceImg2 from "../assets/service-img2.webp"
import serviceImg3 from "../assets/service-img3.webp"
import serviceImg4 from "../assets/service-img4.webp"
import serviceImg5 from "../assets/service-img5.webp"
import serviceImg6 from "../assets/service-img6.webp"

function ServicesSection() {
    return(
        <section className="container">
            <div className="heading">
                <h2>Our Services</h2>
                <p>Explore our range of services tailored for your specific need</p>

            </div>
            <div className="services">
                <ServiceBlock 
                    img={serviceImg1}
                    altText={"Caregiver helping elderly patient"}
                    title={"Personal Care"}
                    text={"Professional assistance with daily living activities such as bathing, grooming, dressing, mobility, and hygiene — delivered with dignity, compassion, and respect for individual independence."}
                    link="/services#personal-care"
                />
                <ServiceBlock 
                    img={serviceImg2}
                    altText={"Therapist supporting patient recovery"}
                    title={"Reablement Care"}
                    text={"Short-term, goal-focused support designed to help individuals regain confidence, independence, and daily living skills after illness, injury, or hospital discharge."}
                    link="/services#re-ablement-care"
                    reverse
                />
                <ServiceBlock 
                    img={serviceImg3}
                    altText={"Caregiver assisting an elderly woman with colorful building blocks"}
                    title={"Dementia Support"}
                    text={"Specialized, compassionate care tailored to individuals living with dementia, focusing on safety, routine, emotional well-being, and maintaining dignity at every stage."}
                    link="/services#dementia-support"
                />
                <ServiceBlock 
                    img={serviceImg4}
                    altText={"Caregiver helping an elderly woman use a walker"}
                    title={"Supported Living"}
                    text={"Assisted living support that promotes independence while providing the right level of help with daily tasks, enabling clients to live comfortably in their own homes or shared settings."}
                    link="/services#supported-living"
                    reverse
                />
                <ServiceBlock 
                    img={serviceImg5}
                    altText={"Caregiver supporting an elderly man holding a walking cane"}
                    title={"Specialist Care"}
                    text={"Personalized, high-level care for individuals with complex or long-term health conditions, delivered by trained professionals to ensure safety, comfort, and quality of life."}
                    link="/services#specialist-care"
                />
                <ServiceBlock 
                    img={serviceImg6}
                    altText={"Home care worker helping an older woman use a walker"}
                    title={"Live-In Care"}
                    text={"Continuous, 24-hour support provided in the comfort of your home, ensuring safety, companionship, and personalized assistance with daily needs while allowing clients to remain in familiar surroundings."}
                    link="/services#live-in-care"
                    reverse
                />
                

            </div>
        </section>
    );
}

export default ServicesSection;