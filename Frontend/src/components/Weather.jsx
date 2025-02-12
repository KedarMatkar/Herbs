import React from 'react'
import { useState } from 'react'

const api = {
    key: "11fb745fb813594ce4b73b97ac613e87",
    base: "https://api.openweathermap.org/data/2.5/",
}

const Weather = () => {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    function handleSearchChange(event) {
        setSearch(event.target.value);
    };

    function searchPressed() {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then((result) => {
            setWeather(result);
        });
    }

  return (
    <div className='weather-container'>
        <h1 className='weater-heading'>Weather</h1>
        <div>
            <input type="text" placeholder='Serach' onChange={handleSearchChange} />
            <button className='btn-search' onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.main!== "undefined" ? (
            <div>
                <p className='city-name'>{weather.name}</p>
                <p className='temperature'>{weather.main.temp}°C</p>
                <p className="contdition">{weather.weather[0].main}</p>
                <p className="contdition">({weather.weather[0].description})</p>
            </div>
        )
        :
        ""
    }
    </div>
  )
}

export default Weather;
