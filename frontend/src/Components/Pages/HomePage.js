import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';
import videoPresentation from '../../assets/paqueta.mp4';

const HomePage = () => {
  clearPage();
  // presentationBlockImageText();
  presentationVideoBlock();
  displayTripButtons();
  
};

function displayTripButtons(){
  const main = document.querySelector('main');
  const divButtonTrip = document.createElement('div');
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
  divButtonTrip.appendChild(createTripButton);
  divButtonTrip.appendChild(showAllCountriesButton);
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


// function presentationBlockImageText(){
//   const main = document.querySelector('main');
//   const createDivPresentationBlock = document.createElement('div');
//   createDivPresentationBlock.id = "presentationBlock";
//   createDivPresentationBlock.innerText = "hahahalefrrttropnul";
  
//   const createDivPresentationImage = document.createElement('div');
//   createDivPresentationImage.id = "presentationImage";
//   createDivPresentationImage.innerText = "hahahalefrrttropnul";

//   const createDivPresentationText = document.createElement('div');
//   createDivPresentationText.id = "presentationText";
//   createDivPresentationText.innerText = "hahahalefrrttropnul";

//   createDivPresentationBlock.appendChild(createDivPresentationImage);
//   createDivPresentationBlock.appendChild(createDivPresentationText);
//   main.appendChild(createDivPresentationBlock);
// }





export default HomePage;
