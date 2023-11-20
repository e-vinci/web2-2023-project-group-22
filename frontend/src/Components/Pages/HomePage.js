import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';
import videoPresentation from '../../assets/paqueta.mp4'

const HomePage = () => {
  clearPage();
  presentationBlockImageText();
  presentationVideoBlock();
  displayTripButtons();
  
};

function displayTripButtons(){
  const main = document.querySelector('main');
  const divButtonTrip = document.createElement('div');
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
  divButtonTrip.appendChild(createTripButton);
  divButtonTrip.appendChild(showAllTripsButton);
  main.appendChild(divButtonTrip);
  

}

function presentationVideoBlock(){
  const main = document.querySelector('main');
  const createDivPresentation = document.createElement('div');
  createDivPresentation.id = "presentationVideoDiv";
  const presentationVideo = `<video width="320" height="240" autoplay muted>
                                <source src="${videoPresentation}" type="video/mp4">
                            </video>`
  createDivPresentation.innerHTML = presentationVideo;
  main.appendChild(createDivPresentation);
}


function presentationBlockImageText(){
  const main = document.querySelector('main');
  const createDivPresentationBlock = document.createElement('div');
  const createDivPresentationImage = document.createElement('div');
  const createDivPresentationText = document.createElement('div');
  createDivPresentationBlock.id = "presentationBlock";
  createDivPresentationImage.id = "presentationImage";
  createDivPresentationText.id = "presentationText";

}





export default HomePage;
