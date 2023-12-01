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
    const country = JSON.parse(localStorage.getItem('countryData'));
    localStorage.removeItem('countryData')
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
    mapDiv.style.width = "600px";
    mapDiv.style.height = "350px";
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

async function displayMap(country){
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${country.name.common}&key=${process.env.MAPS_API_KEY}`;
  const data = await fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((result) => result);
  if(data.status !== "ok") {
    // eslint-disable-next-line no-unused-vars
    let map;
    async function initMap() {
      // eslint-disable-next-line no-undef
      const { Map } = await google.maps.importLibrary("maps");

      map = new Map(document.getElementById("mapDiv"), {
        center: { lat: country.latlng[0], lng: country.latlng[1]},
        zoom: 5
      });
    }
    initMap();
  }
  else{
    // eslint-disable-next-line no-unused-vars
    let map;
    async function initMap() {
      // eslint-disable-next-line no-undef
      const { Map } = await google.maps.importLibrary("maps");

      const bounds = {
        north: data.results.geometry.bounds.northeast.lat,
        south: data.results.geometry.bounds.southwest.lat,
        west: data.results.geometry.bounds.southwest.lng,
        east: data.results.geometry.bounds.northeast.lng,
      }

      map = new Map(document.getElementById("mapDiv"), {
        center: { lat: country.latlng[0], lng: country.latlng[1]},
        zoom: 5,
        restriction: {
          latLngBounds: bounds,
          strictBounds: false,
        }
      });
    }
    initMap();
  }
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
        localStorage.setItem('countryData', JSON.stringify(country));
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