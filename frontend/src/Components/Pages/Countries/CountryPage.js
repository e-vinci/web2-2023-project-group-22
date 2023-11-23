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
    const country = JSON.parse(localStorage.getItem("countryData"));
    localStorage.clear();
    if(country===null) {
        Navigate('/countries');
        return;
    }
    clearPage();
    displayCountryInfos(country);
    displayTrips(country);
    main.innerHTML +=`<iframe
    width="1300"
    height="750"
    style="border:0"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/view?key=APIKEY&center=${country.capitalInfo.latlng}&zoom=5">
    </iframe>`;
}

function displayCountryInfos(){
    
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