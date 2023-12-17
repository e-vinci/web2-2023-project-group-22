import { clearPage } from "../../../utils/render";
// import Navigate from "../../Router/Navigate";
// import image from '../../../img/imageVille.jpg'



// function displayPage(){
//     if(!localStorage.getItem('trip')) Navigate('/newtrip');
//     const trip = JSON.parse(localStorage.getItem('trip'));
//     localStorage.removeItem('trip');
//     const content = `
//         <p>Destination: ${trip.destination}</p>
//         <p>From: ${trip.startDate}<p>
//         <p>To: ${trip.endDate}</p>
//     `;
//     document.querySelector('main').innerHTML = content;
// }


const ModifyTripPage = () => {
    clearPage();
    const tripData = JSON.parse(localStorage.getItem('countryData'));
    // localStorage.removeItem('countryData');
    const main = document.querySelector('main');
    main.innerHTML = `
        <div id="div-trip-page-block">
            <div id="modify-trip-page-left-side">
                <div id="form-filter-modify-trip">
                    <input id="modify-trip-filter" type="text" placeholder="Filtrer par catégorie" />
                    <input id="modify-trip-filter-submit" type="submit" value="Filtrer" />
                </div>
                <div id="categories"></div>
            </div>
            <div id="modify-trip-page-right-side">
                <div id="info-trip">
                    <h1> Voyage à ${tripData.destination}</h1>
                    <h3> ${tripData.startDate} to ${tripData.endDate}</h3>
                    <input/>
                </div>
            </div>
        </div>
    `;
    fetch('http://localhost:3000/trips/places/all', {
          method: 'GET'
    })
    .then((response) => {
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
    })
    .then((places) =>{
        const categories = {};

        Object.entries(places).forEach((place) =>{
            if(!categories[place[1].types[0]]) categories[place[1].types[0]] = [place[1]];
            else categories[place[1].types[0]].push(place[1]);
        });

        Object.entries(categories).forEach((c) => {
            const category = document.createElement('div');
            category.id = `${c[0]}`;
            const carousel = document.createElement('div');
            carousel.innerHTML = `
            <div class="carousel-div">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-inner"></div>
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
            const catDiv = document.querySelector('#categories');
            catDiv.appendChild(carousel);
            const carouselInner = document.querySelector('.carousel-inner');
            for (let i = 0; i < Math.ceil(c.length/3); i+=1) {
                const cItem = `
                <div class="carousel-item cItem${i}">
                  <div class="cards-wrapper cWrap${i}">
                  </div>  
                </div>
                `;
                console.log();
                carouselInner.innerHTML += cItem;
            }
            let count = 0;
            let wrap = 0;
            c[1].forEach((t) => {
                if(t.types[0] === c[0]){
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
                    const placeName = document.createElement('h5');
                    placeName.className = "card-title";
                    placeName.innerText = `${t.name}`;
                    cardBody.appendChild(placeName);
                    const rating = document.createElement('p');
                    rating.innerText = t.rating;
                    cardBody.appendChild(rating);
                    const cardsWrapper = document.querySelector(`.cWrap${wrap}`);
                    cardsWrapper.appendChild(card);
                }
            })
            const items = document.querySelector(`.cItem0`);
            items.className += " active";
        })
    });
}

/* <div class="carousel-item active">
    <div class="card" style="width: 18rem;">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
<div class="carousel-item">
    <div class="card" style="width: 18rem;">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
<div class="carousel-item">
    <div class="card" style="width: 18rem;">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div> */



// <div class="carousel-item">
//                         <div class="card" style="width: 18rem;">
//                             <img src="${t.icon}">
//                             <div class="card-body">
//                                 <h5 class="card-title">${t.name}</h5>
//                                 <p class="card-text">${t.rating}</p>
//                                 <a href="#" class="btn btn-primary">Add to trip</a>
//                             </div>
//                         </div>
//                     </div>




export default ModifyTripPage;