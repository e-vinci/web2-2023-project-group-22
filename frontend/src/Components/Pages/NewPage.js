import { clearPage } from '../../utils/render';

const NewPage = async () => {
  clearPage();
  const main = document.querySelector('main');
  console.log(localStorage.getItem('user'));
  if(localStorage.getItem('user')) {
    console.log(JSON.parse(localStorage.getItem('user')).email);
    main.innerText += "Logged";
  }
  else main.innerText += "Not logged";
  const buttons = {
    "getusers": getusers,
    "clearlocal": clearlocal,
    "map": createGoogleMap,
  }
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



const map = document.createElement('div');
map.id = "map";
map.style.width = "500px";
map.style.height = "500px";
main.appendChild(map)
};

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
    
    map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 5
    });
  }

  initMap();
}


export default NewPage;
