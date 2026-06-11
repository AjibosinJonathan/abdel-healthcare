function ServiceBlock(props) {
    return (
        <div className={`service-block ${props.reverse ? 'service-block-reverse' : ''}`}> 
            <div className="service-card-image">
                <img src={props.img} alt={props.altText} />
            </div>
            <div className="service-block-content">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <button className="service-block-btn">Learn More</button>
            </div>
        </div>
    );
}

export default ServiceBlock;