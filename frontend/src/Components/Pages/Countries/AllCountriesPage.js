import { clearPage } from '../../../utils/render';
import Navigate from '../../Router/Navigate';

const main = document.querySelector('main');
main.style.display = 'block';

const AllCountriesPage = () => {
  clearPage();
  const CURRENCIES = [];
  fetch('https://restcountries.com/v3.1/all')
  .then((response) => {
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((countries) => {
    countries.forEach((country) => {
      if (country.currencies !== null && country.currencies !== undefined) {
        Object.keys(country.currencies).forEach((currency) => {
          if (!CURRENCIES.includes(currency)) {
            CURRENCIES.push(currency);
          }
        });
      }
    });
    displayFilters(CURRENCIES);
    displayCountries(countries);
  });
};

// Displays filter options
function displayFilters(currencies, countries) {
  const textFilter = document.createElement('input');
  textFilter.type = 'text';
  textFilter.name = 'textInput';
  textFilter.placeholder = 'Enter your dream destination';
  main.appendChild(textFilter);
  const currencyFilter = document.createElement('select');
  currencyFilter.id = 'currenciesSelect';
  main.appendChild(currencyFilter);
  const textInput = document.querySelector('input[name="textInput"]');
  textInput.addEventListener('input', () => {
    refreshListText(textInput, countries);
  });
  const select = document.querySelector('#currenciesSelect');
  currencies.forEach((currency) => {
    const option = document.createElement('option');
    option.value = currency;
    option.textContent = currency;
    select.appendChild(option);
  });
  select.addEventListener('change', () => {
    refreshListCurrency(select.value, countries);
  });
  main.appendChild(select);
}
// Displays all the coutries
function displayCountries(elements) {
  const countriesList = document.createElement('div');
  countriesList.className = 'grid-container';
  main.appendChild(countriesList);
  elements.forEach((element) => {
    const country = document.createElement('div');
    country.className = 'grid-item';
    country.innerHTML = `
            <h3>${element.name.common}</h3>
            <img src="${element.flags.png}" style="width: 150px; height: 100px;">
        `;
    countriesList.appendChild(country);
    country.addEventListener('click', ()=>{
      localStorage.setItem("countryData", JSON.stringify(element));
      Navigate('/country');
    })
    country.addEventListener('mouseover', () => {
      country.style.cursor = "pointer";
  })
  });
}
// Refreshes countries list based on input text
function refreshListText(textInput, countries) {
  if (document.querySelectorAll('.grid-container') !== null) {
    const containers = document.querySelectorAll('.grid-container');
    containers.forEach((container) => container.remove());
  }
  if (textInput.value === '') {
    displayCountries(countries);
  } else {
    const results = [];
    countries.forEach((country) => {
      if (country.name.common.toLowerCase().includes(textInput.value.toLowerCase()))
        results.push(country);
    });
    displayCountries(results);
  }
}
// Refreshes countries list based on selected currency filter
function refreshListCurrency(currency, countries) {
  if (document.querySelectorAll('.grid-container') !== null) {
    const containers = document.querySelectorAll('.grid-container');
    containers.forEach((container) => container.remove());
  }
  const results = [];
  countries.forEach((country) => {
    if (country.currencies !== null && country.currencies !== undefined)
      if (Object.keys(country.currencies).includes(currency)) results.push(country);
  });
  displayCountries(results);
}

export default AllCountriesPage;