import "./Card.scss";

const Card = (props) => {
    return (
        <div className="card-container">
            <header>
                <h2 className="title">{props.title}</h2>
                <h1 className="value">{props.value}<span className="postfix">{props.postfix}</span></h1>
            </header>
            <p className="description">{props.description}</p>
        </div>
    );
};

export default Card;
