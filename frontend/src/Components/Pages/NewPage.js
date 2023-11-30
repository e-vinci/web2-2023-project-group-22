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
  
}

export default NewPage;
