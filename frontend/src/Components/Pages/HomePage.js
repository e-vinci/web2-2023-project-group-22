import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const HomePage = () => {
  clearPage();
  displayTripButtons();
};

function displayTripButtons(){
  const main = document.querySelector('main');
  const createTripButton = document.createElement('button');
  const showAllTripsButton = document.createElement('button');
  createTripButton.innerText = "Créer un voyage";
  showAllTripsButton.innerText = "Afficher les voyages";
  createTripButton.addEventListener('click',()=>{
    Navigate('/trip');
  })
  showAllTripsButton.addEventListener('click',()=>{
    Navigate('/alltrips');
  })
  main.appendChild(createTripButton);
  main.appendChild(showAllTripsButton);

}

export default HomePage;
