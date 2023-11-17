import React, {useEffect, useState} from "react";
import SecondSection from "./components/SecondSection.jsx";
import {getWeatherData} from "./components/weatherService.jsx";
import Warsaw from "./assets/images/Warsaw.jpeg"


function App() {

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await getWeatherData('warsaw')
            console.log(data)
        };
        fetchWeatherData()
            // .then(r => )
    }, []);

    return (
        <div className="app">
            <div className="overlay">
                <div className="container">
                    <div className="section section__inputs">
                        <input type="text" name="location" placeholder="Insert city name..."/>
                        <button>° C</button>
                        <button>° F</button>
                    </div>
                    <div className="section section__temperature">
                        <div className="description">
                            <h3>Warsaw, Poland</h3>
                            <img src="https://openweathermap.org/img/wn/10d@2x.png"
                                 alt="weather icon showing a cloud with rain"
                            />
                            <h3>Rain</h3>
                            <div className="temperature">
                                <h1><b>10 °C</b></h1>
                            </div>
                        </div>
                    </div>
                    <SecondSection/>
                </div>
            </div>
        </div>
    )
}

export default App