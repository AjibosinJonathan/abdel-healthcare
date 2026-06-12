import { Link } from "react-router-dom";

function ServiceBlock(props) {
    return (
        <div className={`service-block ${props.reverse ? 'service-block-reverse' : ''}`}> 
            <div className="service-card-image">
                <img src={props.img} alt={props.altText} width={851} height={787} loading="lazy"/>
            </div>
            <div className="service-block-content">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <Link to={props.link} className="service-block-btn">Learn More</Link>
            </div>
        </div>
    );
}

export default ServiceBlock;