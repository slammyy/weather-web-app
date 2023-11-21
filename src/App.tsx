import "./App.scss";
import { useState } from "react";
import { useGeolocated } from "react-geolocated";
import Card from "./components/Card/Card";
import Map from "./components/Map/Map";
import Info from "./components/Info/Info";
import info from "./assets/info.svg";
import capitalize from "./utils/capitalize";

const App = () => {
    const [title, setTitle] = useState("Moscow");
    const [description, setDescription] = useState("Few clouds");
    const [temp, setTemp] = useState(0);
    const [feelsLike, setFeelsLike] = useState(0);
    const [feelsLikeDescription, setFeelsLikeDescription] = useState("");
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0);
    const [windDeg, setWindDeg] = useState("The wind degree is 0°");
    const [pressure, setPressure] = useState(0);

    const { coords } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
        });

    const fetchWeather = async () => {
        let res: Response;

        if (coords) {
            res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&units=metric&appid=107abccf98057eb3e3aaabf6e48599af`);
        } else {
            res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=107abccf98057eb3e3aaabf6e48599af`);
        }

        const data = await res.json();
        setTitle(data.name);
        setDescription(data.weather[0].main);
        setTemp(parseInt(data.main.temp));
        setFeelsLike(parseInt(data.main.feels_like));
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setWindDeg(`The wind degree is ${data.wind.deg}°`);
        setPressure(data.main.pressure);
        setFeelsLikeDescription(capitalize(data.weather[0].description));
    };

    fetchWeather();

    return <div className="page-container">
        <Info title={title} value={temp} description={description} />
        <main className="cards">
            <Card title="Feels like" value={feelsLike} description={feelsLikeDescription} />
            <Card title="Humidity" value={humidity} postfix="%" description="The dew point is 0° right now" />
            <Card title="Wind" value={wind} postfix="m/s" description={windDeg} />
            <Card title="Pressure" value={pressure} postfix="" description="mm Hg" />
            <Map />
        </main>
        <img className='info' src={info} width="40px" onClick={() => alert("Info button")} />
    </div>
};


export default App;
