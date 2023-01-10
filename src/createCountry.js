const {countryInfo } = {

  'countryInfo': document.querySelector('.country-info'),
};

export default function createCountry(data) {
  const flag = document.createElement('img')
  flag.setAttribute('src', data[0].flags.svg)
  flag.classList.add('flag')
  countryInfo.append(flag)

  const countryName = document.createElement('h1')
  countryName.innerText = data[0].name.common
  countryName.classList.add('countryName')
  countryInfo.append(countryName)

  const countryCapital = document.createElement('h2')
  countryCapital.innerText = `Capital: ${data[0].capital}`
  countryCapital.classList.add('countryCapital')
  countryInfo.append(countryCapital)

  const countryPopulation = document.createElement('h2')
  countryPopulation.innerText = `Population: ${data[0].population}`
  countryPopulation.classList.add('countryPopulation')
  countryInfo.append(countryPopulation)


  const countryLanguages = document.createElement('h2')
  countryLanguages.innerText = `Languages: ${Object.values(data[0].languages).join()}`
  countryLanguages.classList.add('countryLanguages')
  countryInfo.append(countryLanguages)
}