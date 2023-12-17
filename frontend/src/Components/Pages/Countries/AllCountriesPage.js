import { clearPage } from '../../../utils/render';
import Navigate from '../../Router/Navigate';

const AllCountriesPage = () => {
  clearPage();
  const added = [];
  const CURRENCIES = [];
  fetch('https://restcountries.com/v3.1/all')
  .then((response) => {
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((countries) => {
    countries.forEach((country) => {
      if (country.currencies !== null && country.currencies !== undefined) {
        Object.entries(country.currencies).forEach((currency) => {
          if(!added.includes(currency[0])){
            CURRENCIES.push(currency);
            added.push(currency[0]);
          }
        });
      }
    });
    displayFilters(CURRENCIES,countries);
    displayCountries(countries);
  });
};

// Displays filter options
function displayFilters(CURRENCIES, countries) {
  const main = document.querySelector('main');
  const textFilter = document.createElement('input');
  textFilter.id = 'textFilter';
  textFilter.type = 'text';
  textFilter.name = 'textInput';
  textFilter.placeholder = `Enter your dream destination`;
  main.appendChild(textFilter);
  const currencyFilter = document.createElement('select');
  currencyFilter.id = 'currenciesSelect';
  main.appendChild(currencyFilter);
  textFilter.addEventListener('input', () => {
    refreshListText(textFilter, countries);
  });
  const select = document.querySelector('#currenciesSelect');
  const defaultOption = document.createElement('option');
  defaultOption.value = 'default';
  defaultOption.textContent = 'Select a currency to filter';
  select.appendChild(defaultOption);
  CURRENCIES.forEach((currency) => {
    const option = document.createElement('option');
    option.value = `${currency[0]}`;
    option.textContent = `${currency[0]} : ${currency[1].name}`;
    select.appendChild(option);
  });
  select.addEventListener('change', () => {
    if(select.value === 'default') displayCountries(countries);
    else refreshListCurrency(select.value, countries);
  });
  main.appendChild(select);
}
// Displays all the coutries
function displayCountries(elements) {
  const main = document.querySelector('main');
  if (document.querySelectorAll('.grid-container') !== null) {
    const containers = document.querySelectorAll('.grid-container');
    containers.forEach((container) => container.remove());
  }
  const countriesList = document.createElement('div');
  countriesList.className = 'grid-container';
  main.appendChild(countriesList);
  elements.forEach((element) => {
    const country = document.createElement('div');
    country.className = 'grid-item hidden';
    country.innerHTML = `
            <h3>${element.name.common}</h3>
            <img src="${element.flags.png}" style="width: 150px; height: 100px; border: 1px solid black">
        `;
    countriesList.appendChild(country);
    country.addEventListener('click', ()=>{
      localStorage.setItem('countryData', JSON.stringify(element));
      Navigate('/country');
    })
    country.addEventListener('mouseover', () => {
      country.style.cursor = "pointer";
  })
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) entry.target.classList.add('show');
      else entry.target.classList.remove('show');
    })
  })
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((element) => observer.observe(element));
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