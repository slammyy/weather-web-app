import "./Info.scss";

type InfoProps = {
    title: string,
    value: number,
    description: string
};

const Info = (props: InfoProps) => {
    return (
        <div className="info-container">
            <h2 className="title">{props.title}</h2>
            <h1 className="value">{props.value}°</h1>
            <h2 className="description">{props.description}</h2>
        </div>
    );
};

export default Info;
