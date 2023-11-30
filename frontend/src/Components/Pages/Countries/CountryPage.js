import { clearPage } from "../../../utils/render";
import Navigate from "../../Router/Navigate";

const main = document.querySelector('main');
const TRIPS = [
    {
        id: 1
    },
    {
        id: 2
    }
];

const CountryPage = () => {
    const country = JSON.parse(sessionStorage.getItem('countryData'));
    if(country===null) {
        Navigate('/countries');
        return;
    }
    clearPage();
    displayCountryInfos(country);
    displayTrips(country);
}

function displayCountryInfos(country){
    const countryInfoDiv = document.createElement('div');
    countryInfoDiv.style.padding = "10px"
    countryInfoDiv.id = "countryInfoDiv";
    countryInfoDiv.style.display = "flex";
    const infoDiv = document.createElement('div');
    infoDiv.id = "infoDiv";
    countryInfoDiv.appendChild(infoDiv);
    const mapDiv = document.createElement('div');
    mapDiv.id = "mapDiv";
    countryInfoDiv.appendChild(mapDiv);
    main.appendChild(countryInfoDiv);
    displayInfos(country);
    displayMap(country);
}

function displayInfos(country){
    const infoDiv = document.querySelector('#infoDiv');
    const flag = document.createElement('img');
    flag.src = country.flags.png;
    flag.style.border = "1px solid black"
    infoDiv.appendChild(flag)
    let text = "";
    Object.entries(country.languages).forEach((lang) => {
        text+=`${lang[1]} `
    })
    infoDiv.innerHTML += `
        <h3>${country.name.official}</h3>
        <h4>${country.capital}</h4>
        <h6>Spoken languages :</h6>
        <p>${text}</p>
        <h6>Used currencies : </h6>
        ${Object.keys(country.currencies)}
    `;
}

function displayMap(country){
    const mapDiv = document.querySelector('#mapDiv');
    mapDiv.innerHTML +=`
    <iframe
        width="500"
        height="350"
        style="border:0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/view?key=${process.env.MAPS_API_KEY}&center=${country.capitalInfo.latlng}&zoom=${5}">
    </iframe>`;
}

function displayTrips(country){
    const tripsContainer = document.createElement('div');
    const name = document.createElement('h3');
    name.innerText = `Trips to ${country.name.common}:\n`;
    tripsContainer.appendChild(name);
    main.appendChild(tripsContainer);
    const tripsList = document.createElement('div');
    tripsList.className = 'grid-container';
    main.appendChild(tripsList);
    const newTrip = document.createElement('div');
    newTrip.className = 'grid-item';
    newTrip.innerText = `Create your own trip to ${country.name.common}`;
    tripsList.appendChild(newTrip);
    newTrip.addEventListener('click', () => {
      Navigate('/newtrip');
    })
    newTrip.addEventListener('mouseover', () => {
        newTrip.style.cursor = "pointer";
    })
    TRIPS.forEach((trip) => {
        const tripItem = document.createElement('div');
        tripItem.className = 'grid-item';
        tripItem.innerText = `Trip to ${country.name.common} ${trip.id}`;
        tripsList.appendChild(tripItem);
        tripItem.addEventListener('click', () => {
            Navigate('/trip');
        })
        tripItem.addEventListener('mouseover', () => {
            tripItem.style.cursor = "pointer";
        })
    })
}

export default CountryPage;