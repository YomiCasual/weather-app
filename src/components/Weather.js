import React from 'react'

const Weather = ({cityWeather, state}) => {
  const { cityName, error, loading} = state

if (loading) {
  return (
     <div className="weather-data">
    <h3 className="error-class">Loading...</h3>
    </div>
  )
}

if (Object.values(cityWeather).length === 0 && !error  )  {
  return (
     <div className="weather-data">
    <h3 className="city-title">Welcome to The Weather App</h3>
    <p className="city-desc">Enter a city name to begin</p>
    </div>
  )
}


if (error) {
  return (
    <div className="weather-data">
    <h3 className="error-class">Please Enter a Valid City Name</h3>
    </div>
  )
}

 const { name, lat, lon, description , temp, pressure, humidity} = cityWeather
return (
    <div className="weather-data">
    <h3 className="city-title">{name}</h3>
    <div className="city-coord">
    <p>Latitude: {lat}</p>
    <p>Longitude: {lon}</p>
    </div>
    
    <h2 className="city-temp">{Math.round(temp)}<span>0</span>C</h2>
    <p className="city-desc">{description}</p>

    <div className="city-add-data">
    <p>Humidity: {humidity}</p>
    <p>Pressure: {pressure}atm</p>
    </div>
    </div>
)
 
}

export default Weather