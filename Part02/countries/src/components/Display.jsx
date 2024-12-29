import Country from './Country'
import Countries from './Countries'

const Display = ({ filteredCountries, setFilteredCountries, weather }) => {
  if (filteredCountries.length === 0) return null
  else if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }
  else if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} weather={weather} />
  }
  else if (filteredCountries.length <= 10) {
    return <Countries filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries}/>
  }
}

export default Display