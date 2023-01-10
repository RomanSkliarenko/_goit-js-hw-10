import axios from 'axios';

function fetchCountries(name) {
  return axios.get(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,flags`)
}

export default fetchCountries