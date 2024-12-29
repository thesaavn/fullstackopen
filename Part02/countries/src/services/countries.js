import axios from 'axios'

const apiUrl = import.meta.env.VITE_OPENWEATHERMAP_API_URL
const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY

const getAll = () => {
  const request = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
  return request.then(response => response.data)
}

const getWeather = (cityName) => {
  const request = axios.get(`${apiUrl}?q=${cityName}&units=metric&appid=${apiKey}`)
  return request.then(response => response.data)
}

export default { getAll, getWeather }