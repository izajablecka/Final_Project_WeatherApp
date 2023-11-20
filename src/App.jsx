import {useEffect, useState} from "react";
import SecondSection from "./components/SecondSection.jsx";
import {getWeatherData} from "./components/weatherService.jsx";
import axios from "axios";


function App() {
    const [city, setCity] = useState('Warsaw')
    const [weather, setWeather] = useState('');
    const [units, setUnits] = useState('metric');
    const [backgroundImage, setBackgroundImage] = useState(null);

   const API_IMAGE_KEY = `H9Mbz7BQBwnumuIIJNazfioB3_rbtdnnOPS7NF8HHms`


    useEffect(() => {
        const fetchData = async () => {
            try {
                const weatherData = await getWeatherData(city, units);
                setWeather(weatherData);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchData();
    }, [units, city]);


    useEffect(() => {
        const fetchImage = async () => {
            try {
                const imageData = await axios.get(`https://api.unsplash.com/photos/random?query=${city}&client_id=${API_IMAGE_KEY}`);
                setBackgroundImage(imageData.data.urls.regular);
            } catch (error) {
                console.error("Error fetching background image:", error);
            }
        };
        fetchImage();
    }, [city]);

    const handleUnits = (unit) => {
        setUnits(unit);
    };

    const handleInput = (e) => {
        if (e.key === 'Enter') {
            setCity(e.currentTarget.value);
            e.currentTarget.blur();
        }
    }

    return (<div className="app" style={{backgroundImage: `url(${backgroundImage})`}}>

            <div className="overlay">
                {weather && (<div className="container">
                        <div className="section section__inputs">
                            <input onKeyDown={handleInput} type="text" name="location"
                                   placeholder="Insert city name..."/>
                            <button onClick={() => handleUnits('metric')}>°C</button>
                            <button onClick={() => handleUnits('imperial')}>°F</button>

                        </div>
                        <div className="section section__temperature">
                            <div className="description">
                                <h3>{`${weather.name}, ${weather.country}`}</h3>
                                <img src={weather.iconURL}
                                     alt="weather icon"
                                />
                                <h3>{weather.description}</h3>
                                <div className="temperature">
                                    <h1><b>{`${weather.temp.toFixed()} °${units === 'metric' ? 'C' : 'F'}`}</b></h1>
                                </div>
                            </div>
                        </div>
                        <SecondSection weather={weather} units={units}/>
                    </div>)}

            </div>
        </div>)
}

export default App