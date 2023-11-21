import "./Map.scss";

const Map = () => {
    return (
        <iframe
            className="map-container"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577332.56728715!2d36.726193439747526!3d55.58103345563556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow!5e0!3m2!1sen!2sru!4v1700141752678!5m2!1sen!2sru"
            loading="lazy"
            height="100%"
            width="100%"
        ></iframe>
    );
};

export default Map;
