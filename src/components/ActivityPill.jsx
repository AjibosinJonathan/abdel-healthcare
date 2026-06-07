function ActivityPill(props) {
    return(
        <div className="activity">
            <div className="activity-pill">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default ActivityPill;