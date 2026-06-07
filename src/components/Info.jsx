import ActivityPill from "./ActivityPill";

function Info() {
    return(
        <section className="container">
            <div className="info">
                <h2>Domiciliary Care <span className="info-span">Addresses</span> Many Needs</h2>
                <p>It’s natural to want to remain in the comfort of your own home as you grow older. However, it’s important to step back and consider 
                    the bigger picture — assessing whether staying at home long-term is the right choice for you. Our domiciliary care services are here
                    to support you, offering professional and compassionate assistance to help you maintain your independence and quality of life
                    at home.  Our caregivers help
                </p>
                <ul>
                    <li>Monitor your loved one’s condition after procedures, medication changes, and testing.</li>
                    <li>Ensure a comforting, secure, and safe environment.</li>
                    <li>Prevent pressure sores.</li>
                    <li>Provide fall prevention through one-on-one safety and supervision.</li>
                    <li>Extend the continuity of care from the hospital to the home.</li>
                    <li>Assist with daily living activities.</li>
                </ul>
            </div>
            <div className="heading">
               <h2>Activities of Daily Living</h2>
            </div>
            <ActivityPill text={"Bathing"}/>
            <ActivityPill text={"Feeding"}/>
            <ActivityPill text={"Companionship"}/>
            <ActivityPill text={"Incontinence Care"}/>
            <ActivityPill text={"Accompany to Doctor's Appointments"}/>
            <ActivityPill text={"Walking and Transferring"}/>
            
        </section>
    );
}

export default Info;