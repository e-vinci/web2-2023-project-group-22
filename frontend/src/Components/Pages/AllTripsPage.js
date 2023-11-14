import { clearPage } from "../../utils/render";

const TOWNS = ['Paris', 'Bruxelles', 'Berlin', 'New York'];
const COUNTRIES = ['France', 'Belgium', 'Germany', 'USA'];

const AllTripsPage = () => {
    clearPage();
    const main = document.querySelector('main');
    main.innerHTML += "<h1>AFFICHER AVEC DONNEES API</h1>";
    displayFilters();
    main.style.display = 'block';
}

function displayFilters(){
    const main = document.querySelector('main');
    const filters = `<form>
        <label>Towns</label>
        <input type="radio" name="choice" id="" value="TOWNS">
        <label>Countries</label>
        <input type="radio" name="choice" id="" value="COUNTRIES" >
        <input type="text" name="textInput" placeholder="Enter a country or a city's name">
    </form>`;
    main.innerHTML += filters;
    const radioTown = document.querySelector('input[value="TOWNS"]');
    radioTown.addEventListener('change', () => {
        if(document.querySelector('.grid-container') !== null) document.querySelector('.grid-container').remove();
        displayTrips(TOWNS);
    })
    const radioCountry = document.querySelector('input[value="COUNTRIES"]');
    radioCountry.addEventListener('change', () => {
        if(document.querySelector('.grid-container') !== null) document.querySelector('.grid-container').remove();
        displayTrips(COUNTRIES);
    })
    const textInput = document.querySelector('input[name="textInput"]');
    textInput.addEventListener('input', () => {
        if(textInput.value === ""){
            document.querySelector('.grid-container').remove();
        }else{
            const results = [];
            if(!radioTown.checked && !radioCountry.checked){
                TOWNS.forEach((town)=>{
                    if(town.toLowerCase().includes(textInput.value)) results.push(town);
                })
                COUNTRIES.forEach((country)=>{
                    if(country.toLowerCase().includes(textInput.value)) results.push(country);
                })
            }
            else if(radioTown.checked){
                TOWNS.forEach((town)=>{
                    if(town.toLowerCase().includes(textInput.value)) results.push(town);
                })
            }
            else if(radioCountry.checked){
                COUNTRIES.forEach((country)=>{
                    if(country.toLowerCase().includes(textInput.value)) results.push(country);
                })
            }
            if(document.querySelector('.grid-container') !== null) document.querySelector('.grid-container').remove();
            displayTrips(results);
        }
    })
}

function displayTrips(elements){
    const main = document.querySelector('main');
    const tripsContainer = document.createElement('div');
    tripsContainer.className = 'grid-container';
    main.appendChild(tripsContainer);
    elements.forEach((element) => {
        const tripContainer = document.createElement('div');
        tripContainer.className = 'grid-item';
        tripContainer.innerText = element;
        tripsContainer.appendChild(tripContainer);
    })
}

export default AllTripsPage;