import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const HomePage = () => {
  clearPage();
  displayTripButtons();
  const main = document.querySelector('main');
  main.style.width = '50%';
  main.style.marginTop = '25%';
  main.style.marginLeft = '25%';
  main.style.display = 'flex';
  main.style.justifyContent = 'space-around';
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
