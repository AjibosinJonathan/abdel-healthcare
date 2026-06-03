function ServiceCard(props) {
    return (
        <div className={`service-card ${props.reverse ? 'service-card-reverse' : ''}`}> 
            <div className="service-card-image">
                <img src={props.img} alt={props.altText} />
            </div>
            <div className="service-card-content">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button className="service-card-btn">Learn More</button>
            </div>
        </div>
    );
}

export default ServiceCard;