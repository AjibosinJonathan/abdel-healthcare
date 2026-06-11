function ServiceCard(props) {
    return(
        <section id={props.title}>
            <div className="service-card" style={{backgroundColor: props.bgColor}}>
                <h2 className="service-card-title" style={{color: props.titleColor}}>
                    {props.title}
                </h2>
                <p className="service-card-description">
                    {props.description}
                </p>
                <div className={`service-card-body ${props.reverse ? "service-card-body--reverse" : ""}`}>
                    <ul className="service-card-list">
                        {props.listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="service-card-image">
                        <img src={props.image} alt={props.imageAlt} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceCard;