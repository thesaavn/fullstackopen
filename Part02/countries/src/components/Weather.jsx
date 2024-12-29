const Weather = ({weather}) => {
  if(weather.name) {
    return (
      <>
      <h2>Weather in {weather.name}</h2>
        <div>
          <p>Temprature {weather.main.temp} Celcius</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" width={100}/>
          <p>Wind {weather.wind.speed} m/s</p>
        </div>
      </>
    )
  }
}

export default Weather