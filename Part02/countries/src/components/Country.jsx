import Weather from "./Weather"

const Country = ({ country, weather }) => {
  const countryName = country.name.common
  const capitalName = country.capital[0]
  const area = country.area
  const languages = Object.values(country.languages)
  const flag = country.flags

  return (
    <>
      <h1>{countryName}</h1>
      <div>
        <div>Capital: {capitalName}</div>
        <div>Area: {area}</div>
      </div>

      <p><b>Languages:</b></p>
      <ul>
        {languages.map(lang => 
          <li key={lang}>{lang}</li>
        )}
      </ul>

      <img src={flag.png} alt={flag.alt} width={150} />

      <Weather weather={weather.name === capitalName && weather} />
    </>
  )
}

export default Country