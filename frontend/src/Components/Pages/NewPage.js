import { clearPage } from '../../utils/render';

const NewPage = async () => {
  clearPage();
  const main = document.querySelector('main');
  const request = await fetch('http://localhost:3000/trips/test')
  .then((response) => {
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((result) => result);
  main.innerText += request[0].country_name;
};


export default NewPage;
