import { clearPage } from '../../utils/render';

const NewPage = async () => {
  clearPage();
  console.log(localStorage.getItem('google_user_info'));
  const buttons = {
    "register": register,
    "login": login,
    "getusers": getusers,
    "clearlocal": clearlocal,
    "map": createGoogleMap,
  }
  const main = document.querySelector('main');
  const div = document.createElement('div');
  div.id = "test";
  main.appendChild(div);

  Object.entries(buttons).forEach((button) => {
    const input = document.createElement('input');
    input.type = "submit";
    input.value = `${button[0]}`;
    input.addEventListener('click', button[1]);
    main.appendChild(input);
  });

  // Create the script tag, set the appropriate attributes
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&callback=initMap`;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
const map = document.createElement('div');
map.id = "map";
map.style.width = "500px";
map.style.height = "500px";
main.appendChild(map)
};

async function register(){
  const div = document.querySelector('#test');
  div.innerText = '';
  const request = await fetch('http://localhost:3000/auths/register', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      "firstname": "Julien",
      "lastname": "Remmery",
      "email": "julien.remmery@student.vinci.be",
      "password": "test"
  })
  })
  .then((response) => {
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((result) => result);
  Object.entries(request).forEach((field) => {
    div.innerText += `${field[0]} : ${field[1]}\n`;
  });
}

async function login(){
  const div = document.querySelector('#test');
  div.innerText = '';
  const request = await fetch('http://localhost:3000/auths/login', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      "email": "julien.remmery@student.vinci.be",
      "password": "test"
  })
  })
  .then((response) => {
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((result) => result);
  localStorage.setItem('user', JSON.stringify(request));
  Object.entries(request).forEach((field) => {
    div.innerText += `${field[0]} : ${field[1]}\n`;
  });
}

async function getusers(){
  const user = JSON.parse(localStorage.getItem('user'));
  const {token} = user;
  const div = document.querySelector('#test');
  div.innerText = '';
  const request = await fetch('http://localhost:3000/users', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': token,
    },
  })
  .then((response) => {
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((result) => result);
  Object.entries(request).forEach((field) => {
    div.innerText += `${field[0]} : ${field[1]}\n`;
  });
}

function clearlocal(){
  localStorage.clear()
}

function createGoogleMap(){
  // eslint-disable-next-line no-unused-vars
  let map;

  async function initMap() {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    const { Map } = await google.maps.importLibrary("maps");
    // eslint-disable-next-line no-undef
    // const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 5
    });
    
    // eslint-disable-next-line no-unused-vars
    // const marker = new AdvancedMarkerView({
    //   map,
    //   position,
    //   title: 'Uluru'
    // });
  }

  initMap();
}


export default NewPage;
