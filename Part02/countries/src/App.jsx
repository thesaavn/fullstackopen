import { useState, useEffect } from "react"
import Form from "./components/Form"
import countryServices from './services/countries'
import Display from "./components/Display"

const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState({})
  const [filteredCountries, setFilteredCountries] = useState([])
  const [loadingCountries, setLoadingCountries] = useState(true)

  useEffect(() => {
    countryServices
      .getAll()
      .then(returnedData => {
        setCountries(returnedData)
        setLoadingCountries(false)
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [])

  useEffect(() => {
    if(filteredCountries.length === 1){
      const capitalName = filteredCountries[0].capital[0]

      if(!weather || weather.name !== capitalName) {
        countryServices
          .getWeather(capitalName)
          .then(returnedData => {
            setWeather(returnedData)
          })
          .catch(error => {
            console.log(error.message)
          })
        }
      }
  }, [filteredCountries])

  const hanldeSubmit = (event) => {
    event.preventDefault()
    value && setFilteredCountries(
      countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))
    )
  }

  const handleValueChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <>
      <Form hanldeSubmit={hanldeSubmit} handleValueChange={handleValueChange} value={value} />

      {loadingCountries && <p>Loading data.. please wait!</p>}
      
      <Display filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries} weather={weather}/>
    </>
  )
}

export default App