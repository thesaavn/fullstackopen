const Countries = ({filteredCountries, setFilteredCountries}) => {
  return (
    <div>
      {filteredCountries.map(country => 
        <div key={country.name.common}>
          {country.name.common}
          <button onClick={() => setFilteredCountries(filteredCountries.filter(c => c.name.common === country.name.common))}>
            show
          </button>
        </div>
      )}
    </div>
  )
}

export default Countries