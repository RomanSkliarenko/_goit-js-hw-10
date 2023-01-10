import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import createCountry from './createCountry';
import fetchCountries from './fetchCountries';
import createCountryList from './createCountryList';

const DEBOUNCE_DELAY = 300;
const { input, countryList, countryInfo } = {
  'input': document.querySelector('#search-box'),
  'countryList': document.querySelector('.country-list'),
  'countryInfo': document.querySelector('.country-info'),
};

input.addEventListener('input', debounce(inputSearchHandler, DEBOUNCE_DELAY));

function inputSearchHandler(e) {
  const nameToSearch = e.target.value;
  countryList.innerHTML = null;
  countryInfo.innerHTML = null;

  if (nameToSearch === '') {
    return;
  }

  fetchCountries(nameToSearch.trim())
    .then(response => {
      const { data } = response;
      if (data.length === 1) {
        createCountry(data);
        return;
      }
      if (data.length < 10) {
        createCountryList(data);
      } else {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      }
    })
    .catch(() => {
      Notiflix.Notify.failure(`Oops, there is no country with that name`);
    });
}





