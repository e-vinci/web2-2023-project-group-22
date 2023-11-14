import { clearPage } from "../../utils/render";

// const TOWNS = ['Paris', 'Bruxelles', 'Berlin', 'New York'];
const COUNTRIES = await fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
    })
    .then((countries) => countries)
const currencies = [];
COUNTRIES.forEach((country)=>{
    if(country.currencies!==null&&country.currencies!==undefined){
        Object.keys(country.currencies).forEach((currency)=>{
            if(!currencies.includes(currency)){
                currencies.push(currency);
            }
        })
    }
})

const AllTripsPage = () => {
    clearPage();
    const main = document.querySelector('main');
    main.style.display = 'block';
    displayFilters();
    displayTrips(COUNTRIES);
}

function displayFilters(){
    const main = document.querySelector('main');
    // const filters = `<form>
    //     <label>Towns</label>
    //     <input type="radio" name="choice" id="" value="TOWNS">
    //     <label>Countries</label>
    //     <input type="radio" name="choice" id="" value="COUNTRIES" >
    //     <input type="text" name="textInput" placeholder="Enter a country or a city's name">
    // </form>`;
    const filters = `
        <input type="text" name="textInput" placeholder="Enter a country's name">
        <select id="currenciesSelect"></select>
    `;
    main.innerHTML += filters;
    // const radioTown = document.querySelector('input[value="TOWNS"]');
    // radioTown.addEventListener('change', () => {
    //     if(document.querySelector('.grid-container') !== null) document.querySelector('.grid-container').remove();
    //     displayTrips(TOWNS);
    // })
    // const radioCountry = document.querySelector('input[value="COUNTRIES"]');
    // radioCountry.addEventListener('change', () => {
    //     if(document.querySelector('.grid-container') !== null) document.querySelector('.grid-container').remove();
    //     displayTrips(COUNTRIES);
    // })
    const textInput = document.querySelector('input[name="textInput"]');
    textInput.addEventListener('input', () => {
        refreshListText(textInput);
    })
    const select = document.querySelector('#currenciesSelect')
    currencies.forEach((currency)=>{
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        select.appendChild(option);
    })
    select.addEventListener('change', ()=>{
        refreshListCurrency(select.value);
    })
    main.appendChild(select);
}

function displayTrips(elements){
    const main = document.querySelector('main');
    const tripsContainer = document.createElement('div');
    tripsContainer.className = 'grid-container';
    main.appendChild(tripsContainer);
    elements.forEach((element) => {
        const tripContainer = document.createElement('div');
        tripContainer.className = 'grid-item';
        tripContainer.innerHTML = `
            <a href="${element.maps.googleMaps}" target="_blank"><h3>${element.name.common}</h3></href>
        `;
        tripsContainer.appendChild(tripContainer);
    })
}

function refreshListText(textInput){
    if(document.querySelectorAll('.grid-container') !== null){
        const containers = document.querySelectorAll('.grid-container');
        containers.forEach(container => container.remove())
    }
    if(textInput.value === ""){
        displayTrips(COUNTRIES);
    }else{
        const results = [];
        // if(!radioTown.checked && !radioCountry.checked){
        //     // TOWNS.forEach((town)=>{
        //     //     if(town.toLowerCase().includes(textInput.value)) results.push(town);
        //     // })
        //     COUNTRIES.forEach((country)=>{
        //         if(country.toLowerCase().includes(textInput.value)) results.push(country);
        //     })
        // }
        // else if(radioTown.checked){
        //     // TOWNS.forEach((town)=>{
        //     //     if(town.toLowerCase().includes(textInput.value)) results.push(town);
        //     // })
        // }
        // else if(radioCountry.checked){
        //     COUNTRIES.forEach((country)=>{
        //         if(country.name.common.toLowerCase().includes(textInput.value.toLowerCase())) results.push(country);
        //     })
        // }
        COUNTRIES.forEach((country)=>{
            if(country.name.common.toLowerCase().includes(textInput.value.toLowerCase())) results.push(country);
        })
        displayTrips(results);
    }
}

function refreshListCurrency(currency){
    if(document.querySelectorAll('.grid-container') !== null){
        const containers = document.querySelectorAll('.grid-container');
        containers.forEach(container => container.remove())
    }
    const results = [];
    COUNTRIES.forEach((country)=>{
        if(country.currencies!==null&&country.currencies!==undefined)
            if(Object.keys(country.currencies).includes(currency)) results.push(country);
    })
    displayTrips(results);
}

export default AllTripsPage;