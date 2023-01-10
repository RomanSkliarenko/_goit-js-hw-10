const { countryList } = {
  'countryList': document.querySelector('.country-list'),
};

export default function createCountryList(data) {
  data.forEach((country)=>{
    const item = document.createElement('li')

    const flag = document.createElement('img')
    flag.setAttribute('src', country.flags.svg)
    flag.classList.add('flag')
    item.append(flag)

    const name = document.createElement('span')
    name.innerText = country.name.common
    item.append(name)

    countryList.append(item)
  })
}