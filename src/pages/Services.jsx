import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"
import ServiceCard from "../components/ServiceCard"
import CtaBanner from "../components/CtaBanner"
import personalCareImg from "../assets/personal-care.webp"
import reablementImg from "../assets/reablement.webp"
import dementiaImg from "../assets/service-img3.webp"
import supportedLivingImg from "../assets/service-img4.webp"
import liveInCareImg from "../assets/service-img6.webp"
import collageTopImg from "../assets/service-img5.webp"
import collageBottomLeftImg from "../assets/services-hero-img.webp"
import collageBottomRightImg from "../assets/autism-patient.webp"
import logoSmall from "../assets/logo-small.svg"



function Services() {

    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100); 
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" }); 
        }
    }, [location]);

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
                id="personal-care"
                title="Personal Care"
                titleColor="#008FC3"
                bgColor="#C0EEFF"
                description="Our Personal Care service is designed to support individuals who need assistance with  everyday activities while
                    maintaining their dignity, privacy, and independence. We  understand that receiving personal care is a sensitive matter,
                    which is why our carers deliver support with  compassion, respect, and professionalism."
                listText="Our Personal Care services include:"
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
                id="re-ablement-care"
                title="Re-ablement Care"
                titleColor="#C30000"
                bgColor="#FFDACF"
                description="Recovering after an illness, injury, surgery, or hospital stay can be challenging. Our Re-ablement Care service focuses
                    on helping individuals regain the skills, confidence, and independence needed to return to their normal routines and 
                    continue living safely in their own homes. Rather than doing everything for the individual, we work alongside them to 
                    rebuild their abilities and maximize their independence."
                listText="Our re-ablement support may include:"
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
                id="dementia-support"
                title="Dementia Support"
                titleColor="#9C00C3"
                bgColor="#CFDDFF"
                description="Living with dementia can affect memory, communication, behaviour, and daily functioning. At Abdel Healthcare, we 
                    provide specialist dementia care that is compassionate, patient, and tailored to each individual's experiences and 
                    preferences. We recognise that every person's journey with dementia is unique. Our carers focus on preserving identity,
                    maintaining dignity, and creating a reassuring environment that promotes comfort and wellbeing.
                    "
                listText="Our dementia support may include:"
                listItems={[
                "Memory stimulation and meaningful activities",
                "Companionship and emotional reassurance",
                "Medication support",
                "Behavioural understanding and management",
                "Promoting familiar routines and environments",
                "Fall prevention and safety monitoring",
                "Family support and regular communication",
                ]}
                image={dementiaImg}
                imageAlt="Caregiver assisting an elderly woman with colorful building blocks"
                reverse={false}
            />
            <ServiceCard
                id="supported-living"
                title="Supported Living"
                titleColor="#9C00C3"
                bgColor="#F1D9FF"
                description="Our Supported Living service enables individuals to live in their own homes or shared accommodation while receiving the 
                    support they need to thrive. We believe that everyone should have the opportunity to make choices about their own lives, 
                    develop independence, and participate actively in their communities."
                listText="Our Supported Living services include:"
                listItems={[
                "Support with daily living activities",
                "Developing independent living skills",
                "Assistance with budgeting and finances",
                "Meal planning and cooking support",
                "Household management",
                "Medication support",
                "Help attending appointments",
                "Support with education and employment goals",
                "Community access and social inclusion",
                "Building confidence and decision-making skills",
                "Encouraging hobbies and recreational activities",
                ]}
                image={supportedLivingImg}
                imageAlt="Re-ablement care physiotherapy session"
                reverse={true}
            />
            <ServiceCard
                id="live-in-care"
                title="Live-In Care"
                titleColor="#0065C3"
                bgColor="#9EE5FF"
                description="Our Live-in Care service allows individuals to receive dedicated one-to-one support in the comfort and familiarity of their
                    own homes. A carefully matched caregiver lives with the individual, providing continuous support while encouraging
                    independence and preserving established routines.
                    Live-in care is an excellent alternative to residential care for those who wish to remain in the place they know and love.
                    "
                listText="Our Live-in Care services include:"
                listItems={[
                " Round-the-clock support and supervision",
                "Personal care assistance",
                "Companionship and emotional support",
                "Medication management and reminders",
                "Meal preparation and nutritional support",
                "Mobility assistance",
                "Help with household tasks",
                "Support attending appointments and social activities",
                "Overnight reassurance when required",
                "Specialist support for complex conditions",
                "Respite support for family caregivers",
                ]}
                image={liveInCareImg}
                imageAlt="Re-ablement care physiotherapy session"
                reverse={false}
            />
            <ServiceCard
                id="specialist-care"
                title="Specialist Care"
                titleColor="#000"
                bgColor="#FFFFFF"
                description="Abdel Healthcare provides specialist support for adults with complex needs requiring experienced, skilled, and 
                    compassionate care professionals. We understand that complex conditions often require highly individualized 
                    approaches, and we tailor our services accordingly."
            >
                
                <ul className="service-card-specialist-list">
                    <p><strong>Our Specialist Care services support individuals living with:</strong></p>
                    <li>
                        <strong><i>Learning Disabilities</i></strong>
                        <p>We support people with learning disabilities to develop life skills, build confidence, increase independence, and participate 
                            fully in their communities.
                        </p>
                    </li>
                    <li>
                        <strong><i>Physical Disabilities</i></strong>
                        <p>Our carers assist individuals with physical disabilities to maintain mobility, maximise independence, and access the
                            support they need to live comfortably and safely.
                        </p>
                    </li>
                    <li>
                        <strong><i>Autism</i></strong>
                        <p>We provide autism-informed support that respects individual communication styles, routines, sensory preferences, and 
                            strengths, helping individuals achieve their personal goals.
                        </p>
                    </li>
                    <li>
                        <strong><i>Brain Injuries</i></strong>
                        <p>We support individuals recovering from or living with acquired brain injuries through structured care plans focused on 
                            rehabilitation, safety, and improved quality of life.
                        </p>
                    </li>
                    <li>
                        <strong><i>Complex Needs</i></strong>
                        <p>Our team works with individuals whose support requirements involve multiple conditions and challenges, delivering 
                            coordinated, personalised care designed around their unique circumstances.
                        </p>
                    </li>
                    <li>
                        <strong><i>Challenging Behaviour</i></strong>
                        <p>We use positive and proactive approaches to understand behaviours of concern, identify underlying needs, and 
                            promote safe, supportive environments that encourage positive outcomes.
                        </p>
                    </li>
                    <li>
                        <strong><i>Mental Health Conditions</i></strong>
                        <p>We provide compassionate support for individuals experiencing mental health challenges, promoting emotional
                            wellbeing, stability, confidence, and independence through person-centred care.
                        </p>
                    </li>
                    
                </ul>
            </ServiceCard>
            </div>
            <div className="collage-wrapper">
                <div className="collage-top">
                    <img src={collageTopImg} alt="Caregiver assisting elderly patient" />
                </div>
                <div className="collage-logo">
                    <img src={logoSmall} alt="Abdel Healthcare logo" />
                </div>
                <div className="collage-bottom">
                    <div className="collage-bottom-img">
                        <img src={collageBottomLeftImg} alt="Caregiver with child in wheelchair" />
                    </div>
                    <div className="collage-bottom-img">
                        <img src={collageBottomRightImg} alt="Caregiver and young person laughing" />
                    </div>
                </div>
            </div>
            <CtaBanner />
            <Footer/>
        </>
    );
}

export default Services;