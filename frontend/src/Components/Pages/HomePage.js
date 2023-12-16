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
  showFeedback();
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
          <h3>Travel with Where2go</h3>
          <p>
          Welcome to Where2Go – your go-to travel companion! Select your destination, and we'll curate a personalized itinerary featuring the best places to visit. 
          Effortlessly add them to your plan and share the adventure with friends. It transforms your trip planning into a seamless, 
          collaborative experience. Start exploring today because unforgettable journeys begin with Where2Go!</p>
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

function showFeedback(){
  fetch('readAllSiteComments')
    .then(response => response.json())
    .then(data => {
      const carouselInner = document.querySelector('.carousel-inner');
      data.forEach((feedback, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${ index === 0 ? ' active' : ''}`;
        const card = `
          <div class="card" style="width: 100rem;">
            <img src="${feedback.image}" class="card-img-top" alt="Feedback image">
            <div class="card-body">
              <h5 class="card-title">${feedback.title}</h5>
              <p class="card-text">${feedback.text}</p>
            </div>
          </div>
        `;
        carouselItem.innerHTML = card;
        carouselInner.appendChild(carouselItem);
      });
    });
}





export default HomePage;
