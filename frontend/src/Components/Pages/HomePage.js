import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';
import videoPresentation from '../../assets/paqueta.mp4';
import logoImageNoir from '../../img/imageVille.jpg'
import logoSite from '../../img/logoHP.jpg'

const HomePage = () => {
  clearPage();
  presentationFirstBloc();
  HomePageSecondBlock();
  TreeDivHomePage();
};

function displayTripButtons(){
  // const main = document.querySelector('main');
  const divButtonTrip = document.createElement('div');
  const createTripButton = document.createElement('button');
  const showAllCountriesButton = document.createElement('button');
  createTripButton.innerText = "Créer un voyage";
  showAllCountriesButton.innerText = "Voir les pays";
  createTripButton.style.marginRight = '15px'; // Adjust the value as needed
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
  `<div id="presentationFirstBlockContainer">
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
  video.id = "videoHomePage";
  video.class = "video-js";
  video.src = videoPresentation;
  video.autoplay = false;
  video.controls = true;
  video.muted = false;
  video.dataset.setup = "{}";
  video.preload = "auto"
  video.style.borderRadius = '60px';
  video.height = 360;
  video.width = 640;
  video.poster = logoSite;
  video.style.margin = 'auto';
  secondBlockVideo.appendChild(video);
  secondBlock.appendChild(secondBlockVideo);
  main.appendChild(secondBlock);
}


function TreeDivHomePage(){
  const main = document.querySelector('main');
  const div = document.createElement('div');
  div.innerHTML =
  `<div id="ContainerDivHomePage">
      <div id="firstDivHomePage">
        <h3>The best trip planner</h3>
        <p>Use Where2Go as a route map showing directions, distances, and driving times between different attractions you might want to visit.</p>
      </div>
      <div id="secondDivHomePage">
        <h3>The best vacation planner</h3>
        <p>Use Where2Go to map your journey to figure out the best routes, and read guides from other trip planning websites.</p>
      </div>
      <div id="thirdDivHomePage">
        <h3>The best group itinerary planner</h3>
        <p>Use Where2Go to share your itinerary with tripmates, friends, and families and collaborate in real time.</p>
      </div>
    </div>
  `;

  main.appendChild(div);
 
}

export default HomePage;
