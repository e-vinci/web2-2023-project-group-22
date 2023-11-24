import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';
import videoPresentation from '../../assets/paqueta.mp4';
import logoImageNoir from '../../img/imageVille.jpg'

const HomePage = () => {
  clearPage();
  presentationFirstBloc();
  HomePageSecondBlock();
};

function displayTripButtons(){
  // const main = document.querySelector('main');
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
  return divButtonTrip;
}

function presentationFirstBloc(){
  const main = document.querySelector('main');
  const createDivFirstBlock = 
  `
      <div id="presentationFirstBlock">
        <div id="presentationText">
          <h3>Voyagez avec Where2go</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div id="tripButtons"></div>
        </div>
        <div id="presentationImage">
          <img src="${logoImageNoir}"alt="">
        </div>
      </div>
  `;
  main.innerHTML = createDivFirstBlock;
  const tripButtons = document.querySelector('#tripButtons');
  tripButtons.appendChild(displayTripButtons());
}

function HomePageSecondBlock(){
  const main = document.querySelector('main');
  const secondBlock = document.createElement('div');
  secondBlock.id = "secondBlock";

  const secondBlockVideo = document.createElement('div');
  secondBlockVideo.id = "secondBlockVideo";
  const video = document.createElement('video');
  video.src = videoPresentation;
  video.autoplay = false;
  video.controls = true;
  video.muted = false;
  video.height = 400;
  video.width = 650; 

  const secondBlockText = document.createElement('div');

  const secondBlockText1 = document.createElement('div');
  const secondBlockText1H3 = document.createElement('h3');
  secondBlockText1H3.textContent = "BLABLABLA";
  const secondBlockText1P = document.createElement('p');
  secondBlockText1P.textContent = "icnrivnrifnvivnivn";

  const secondBlockText2 = document.createElement('div');
  const secondBlockText2H3 = document.createElement('h3');
  secondBlockText2H3.textContent = "BLABLABLA";
  const secondBlockText2P = document.createElement('p');
  secondBlockText2P.textContent = "icnrivnrifnvivnivn";

  secondBlockText1.appendChild(secondBlockText1H3);
  secondBlockText1.appendChild(secondBlockText1P);
  secondBlockText2.appendChild(secondBlockText2H3);
  secondBlockText2.appendChild(secondBlockText2P);
  secondBlockText.appendChild(secondBlockText1);
  secondBlockText.appendChild(secondBlockText2);
  secondBlockVideo.appendChild(video);
  secondBlock.appendChild(secondBlockVideo);
  secondBlock.appendChild(secondBlockText);
  main.appendChild(secondBlock);
}

export default HomePage;
