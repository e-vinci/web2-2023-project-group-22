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
  showComments();
};

// affichage des bouttons pour voyager 

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
// texte d'introduction 
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

// affichage de la vidéo 
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


function showComments() {
  const caroussel = document.createElement('div');
  caroussel.innerHTML = `
  <div id="comment-div">
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-inner">
        
      </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
  </div>
  `;
  const main = document.querySelector('main');
  main.appendChild(caroussel);

  fetch(`${process.env.API_BASE_URL}/comments/site`)
    .then(response => response.json())
    .then(data => {
      const carousselInner = document.querySelector('.carousel-inner');
      for (let i = 0; i < Math.ceil(data.length/3); i+=1) {
        const cItem = `
        <div class="carousel-item cItem${i}">
          <div class="cards-wrapper cWrap${i}">
          </div>  
        </div>
        `;
        carousselInner.innerHTML += cItem;
      }
      let count = 0;
      let wrap = 0;
      data.forEach((element) => {
        if(count===3) {wrap+=1; count = 0}
        count += 1;
        const card = document.createElement('div');
        card.className = "card";
        card.style.width = "300px";
        const img = document.createElement('img');
        card.appendChild(img);
        const cardBody = document.createElement('div');
        cardBody.className = "card-body";
        card.appendChild(cardBody);
        const userName = document.createElement('h5');
        userName.className = "card-title";
        userName.innerText = `${element.firstname} ${element.lastname}`;
        cardBody.appendChild(userName);
        const rating = document.createElement('p');
        rating.innerText = element.rating;
        cardBody.appendChild(rating);
        const commentText = document.createElement('p');
        commentText.className = "card-text";
        commentText.innerText = element.comment;
        cardBody.appendChild(commentText);

        const cardsWrapper = document.querySelector(`.cWrap${wrap}`);
        cardsWrapper.appendChild(card);
      })
      const items = document.querySelector(`.cItem0`);
      items.className += " active"
    });
}

// Create modal
const modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = '50%';
modal.style.left = '50%';
modal.style.transform = 'translate(-50%, -50%)';
modal.style.backgroundColor = '#fff';
modal.style.padding = '20px';
modal.style.zIndex = '1000';
modal.style.display = 'none';
modal.style.borderRadius = '10px';
modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
modal.style.maxWidth = '400px';
modal.style.textAlign = 'center';
modal.style.fontFamily = 'Arial, sans-serif';
modal.style.fontSize = '18px';
modal.style.color = '#333';
modal.style.lineHeight = '1.6';


// Add message
const message = document.createElement('p');
message.textContent = 'This website uses cookies. Do you accept? If you do not accept, some features may not work properly. Please read our Privacy Policy for more information. Thank you.'; 
message.style.marginBottom = '20px';
modal.appendChild(message);

// Create title
const title = document.createElement('h2');
title.textContent = 'Cookie Consent';
title.style.marginBottom = '20px';
modal.insertBefore(title, message);

// Add button
const button = document.createElement('button');
button.textContent = 'Accept';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.border = 'none';
button.style.padding = '10px 20px';
button.style.textAlign = 'center';
button.style.textDecoration = 'none';
button.style.display = 'inline-block';
button.style.fontSize = '16px';
button.style.margin = '4px 2px';
button.style.cursor = 'pointer';
button.style.borderRadius = '12px';
modal.appendChild(button);

// Create backdrop
const backdrop = document.createElement('div');
backdrop.style.position = 'fixed';
backdrop.style.top = '0';
backdrop.style.left = '0';
backdrop.style.width = '100%';
backdrop.style.height = '100%';
backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
backdrop.style.zIndex = '999';
backdrop.style.display = 'none';

// Add modal and backdrop to body
document.body.appendChild(backdrop);
document.body.appendChild(modal);

// Show modal and backdrop if cookie not set
window.onload = function onload() {
  const cookie = document.cookie.split('; ').find(row => row.startsWith('acceptsCookies='));
  if (!cookie || cookie.split('=')[1] !== 'true') {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  }
};

// Hide modal and backdrop and set cookie when button clicked
button.onclick = function onclick() {
  document.cookie = 'acceptsCookies=true; path=/';
  modal.style.display = 'none';
  backdrop.style.display = 'none';
};

// Create notification
const notification = document.createElement('div');
notification.style.position = 'fixed';
notification.style.bottom = '20px';
notification.style.right = '20px';
notification.style.backgroundColor = '#4CAF50'; // Green background
notification.style.color = 'white'; // White text
notification.style.padding = '15px';
notification.style.borderRadius = '5px';
notification.style.display = 'none'; // Initially hidden
notification.textContent = 'You have accepted the cookies.';

// Add notification to body
document.body.appendChild(notification);

// Hide modal and backdrop, show notification, and set cookie when button clicked
button.onclick = function onclick() {
  document.cookie = 'acceptsCookies=true; path=/';
  modal.style.display = 'none';
  backdrop.style.display = 'none';
  notification.style.display = 'block'; // Show notification

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
};

export default HomePage;