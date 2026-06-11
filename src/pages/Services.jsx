import Header from "../components/Header"
import Footer from "../components/Footer"
import ServiceCard from "../components/ServiceCard"
import servicesHeroImg from "../assets/services-hero-img.webp"
import personalCareImg from "../assets/personal-care.webp"
import reablementImg from "../assets/reablement.webp"

function Services() {
    return (
        <>
            <Header />
            <section id="hero-section">
                <div className="services-hero">
                    <div className="services-hero-badge">
                        <h1>Our Services</h1>
                    </div>
                </div>
                <div className="services-hero-description">
                    <p>Abdel Healthcare supports individuals who need specialist care and support.
                        <br />
                        We help people with learning disabilities and complex needs to live the life they choose
                        <br />
                        through a person-centered care.
                    </p>
                </div>
            </section>
            <div className="container">
            <ServiceCard
                title="Personal Care"
                titleColor="#008FC3"
                bgColor="#C0EEFF"
                description="Our Personal Care service is designed to support individuals who need assistance with  everyday activities while
                    maintaining their dignity, privacy, and independence. We  understand that receiving personal care is a sensitive matter,
                    which is why our carers deliver support with  compassion, respect, and professionalism."
                listItems={[
                "Assistance with bathing and showering",
                "Help with dressing and undressing",
                "Grooming and personal hygiene support",
                "Oral care and skincare routines",
                "Toileting and continence care",
                "Medication reminders and assistance",
                ]}
                image={personalCareImg}
                imageAlt="Personal care nurse with elderly patient"
                reverse={false}
            />
            <ServiceCard
                title="Re-ablement Care"
                titleColor="#C30000"
                bgColor="#FFDACF"
                description="Recovering after an illness, injury, surgery, or hospital stay can be challenging. Our Re-ablement Care service focuses
                    on helping individuals regain the skills, confidence, and independence needed to return to their normal routines and 
                    continue living safely in their own homes. Rather than doing everything for the individual, we work alongside them to 
                    rebuild their abilities and maximize their independence."
                listItems={[
                "Assistance following hospital discharge",
                "Support after surgery or illness",
                "Encouraging independence with personal care",
                "Rebuilding confidence in daily activities",
                "Mobility and exercise support",
                "Meal preparation and nutritional support",
                ]}
                image={reablementImg}
                imageAlt="Re-ablement care physiotherapy session"
                reverse={true}
            />
            <ServiceCard
                title="Dementia Support"
                titleColor="#9C00C3"
                bgColor="#CFDDFF"
                description="Recovering after an illness, injury, surgery, or hospital stay can be challenging..."
                listItems={[
                "Assistance following hospital discharge",
                "Support after surgery or illness",
                "Encouraging independence with personal care",
                "Rebuilding confidence in daily activities",
                "Mobility and exercise support",
                "Meal preparation and nutritional support",
                ]}
                image={reablementImg}
                imageAlt="Re-ablement care physiotherapy session"
                reverse={true}
            />
            </div>
            <Footer/>
        </>
    );
}

export default Services;