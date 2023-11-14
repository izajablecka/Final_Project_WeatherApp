import React, {useState} from "react";


function App() {

    // const URL_KEY = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=9216bb0bd27d02b044b6f1cd42af207e`

    return (
        <div className="app">
            <div className="overlay">
                <div className="container">
                    <div className="section section__inputs">
                        <input type="text" name="location" placeholder="Your location..."/>
                        <button>° C</button>
                        <button>° F</button>
                    </div>

                    <div className="section section__temperature">
                        <div className="icon">
                            <h3>London, Great Britain</h3>
                            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon showing a cloud with rain"
                            />
                            <h3>Rainy</h3>
                            <div className="temperature">
                                <h1>10 °C</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default App