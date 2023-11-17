const API_KEY = `9216bb0bd27d02b044b6f1cd42af207e`;

const getIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getWeatherData = async (city, units = 'metric') => {
    const URL_KEY = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL_KEY)
        .then((r) => r.json()).then(
            (data) => data);

    const {weather, main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind: {speed},
        sys: {country, sunset, sunrise},
        name,

    } = data;
    const {description, icon} = weather[0]

    return {
        description,
        iconURL: getIconUrl(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        sunrise,
        sunset,
        name
    }

}
export {getWeatherData};