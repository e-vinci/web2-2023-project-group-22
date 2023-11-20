import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const HomePage = () => {
  clearPage();
  displayTripButtons();
};

function displayTripButtons(){
  const main = document.querySelector('main');
  const createTripButton = document.createElement('button');
  const showAllCountriesButton = document.createElement('button');
  createTripButton.innerText = "Créer un voyage";
  showAllCountriesButton.innerText = "Voir les pays";
  createTripButton.addEventListener('click',()=>{
    Navigate('/newtrip');
  })
  showAllCountriesButton.addEventListener('click',()=>{
    Navigate('/countries');
  })
  main.appendChild(createTripButton);
  main.appendChild(showAllCountriesButton);

}

export default HomePage;
