function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.altText} width={54} height={54} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default Card;   