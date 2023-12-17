import { clearPage } from "../../../utils/render";
import Navigate from "../../Router/Navigate";
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


const ModifyTripPage = async () => {
    clearPage();
    const tripData = JSON.parse(localStorage.getItem('tripData'));
    console.log(tripData);
    // localStorage.removeItem('tripData');
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
                    <h1> Trip to ${tripData.destination}</h1>
                    <h3> ${tripData.startDate} to ${tripData.endDate}</h3>
                </div>
                <div id="trip-places"></div>
            </div>
        </div>
    `;
    const infotripDiv = document.querySelector('#info-trip');
    const saveButton = document.createElement('button');
    saveButton.id = "save-trip-button";
    saveButton.textContent = "Save";
    saveButton.addEventListener('click', () => {
        Navigate('/trip');
    })
    infotripDiv.appendChild(saveButton);
    const tripPlacesDiv = document.querySelector('#trip-places');
    const tripPlaces = await fetch(`${process.env.API_BASE_URL}/trips/trip/${tripData.tripId}`, {
        method: 'GET',
    })
    .then((response) => {
        if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`)
        return response.json();
    })
    .then((result) => {
        result.forEach((r) => {
            console.log(r.order);
            const card = document.createElement('div');
            card.className = "card";
            card.id = r.place_id;
            card.style.width = "300px";
            const img = document.createElement('img');
            card.appendChild(img);
            const cardBody = document.createElement('div');
            cardBody.className = "card-body";
            card.appendChild(cardBody);
            const placeName = document.createElement('h5');
            placeName.className = "card-title";
            placeName.innerText = `${r.place.name}`;
            cardBody.appendChild(placeName);
            const rating = document.createElement('p');
            rating.innerText = `${r.place.rating  } (${r.place.user_ratings_total})`;
            cardBody.appendChild(rating);
            const removePlaceButton = document.createElement('button');
            removePlaceButton.textContent = "Remove from trip";
            removePlaceButton.addEventListener('click', () => {
                fetch(`${process.env.API_BASE_URL}/trips/removeplace`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': JSON.parse(localStorage.getItem('user')).token,
                    },
                    body: JSON.stringify({
                        "placeId": r.place.place_id,
                        "tripId": tripData.tripId,
                    })
                })
                .then((response) => {
                    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
                    return response.json();
                  })
                .then((res) => {
                    if(res.rowCount === 1) tripPlacesDiv.removeChild(card);
                });
            })
            card.appendChild(removePlaceButton);
            tripPlacesDiv.appendChild(card);
        })
        return result;
    });

    fetch('http://localhost:3000/trips/places/all', {
          method: 'GET'
    })
    .then((response) => {
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
    })
    .then((places) =>{
        const categories = filterPlaces(places, tripPlaces);

        Object.entries(categories).forEach((c) => {
            const category = document.createElement('div');
            category.id = `${c[0]}`;
            category.innerHTML = `
                <h3>${c[0].replace(/_/g, ' ')}</h3>
            `;
            const carousel = document.createElement('div');
            carousel.innerHTML = `
            <div class="carousel-div">
                <div id="carouselExampleIndicators${c[0]}" class="carousel slide">
                    <div class="carousel-inner INNER${c[0]}"></div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${c[0]}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${c[0]}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            `;
            const catDiv = document.querySelector('#categories');
            category.appendChild(carousel)
            catDiv.appendChild(category);
            const carouselInner = document.querySelector(`.INNER${c[0]}`);
            for (let i = 0; i < Math.ceil(c[1].length/3); i+=1) {
                const cItem = `
                <div class="carousel-item ITEMS${c[0]}${i}">
                  <div class="cards-wrapper WRAP${c[0]}${i}">
                  </div>  
                </div>
                `;
                carouselInner.innerHTML += cItem;
            }
            let count = 0;
            let wrap = 0;
            c[1].forEach((t) => {
                if(t.types[0] === c[0]) {
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
                    rating.innerText = `${t.rating  } (${t.user_ratings_total})`;
                    cardBody.appendChild(rating);
                    const addPlaceButton = document.createElement('button');
                    addPlaceButton.textContent = "Add to trip";
                    addPlaceButton.addEventListener('click', () => {
                        fetch(`${process.env.API_BASE_URL}/trips/addplace`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': JSON.parse(localStorage.getItem('user')).token,
                            },
                            body: JSON.stringify({
                                "placeId": t.place_id,
                                "tripId": tripData.tripId,
                            })
                        })
                        .then((response) => {
                            if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
                            return response.json();
                          })
                        .then((res) => {
                            if(res.rowCount === 1) {
                                tripPlacesDiv.appendChild(card);
                                card.removeChild(addPlaceButton);
                                const removePlaceButton = document.createElement('button');
                                removePlaceButton.textContent = "Remove from trip";
                                removePlaceButton.addEventListener('click', () => {
                                    fetch(`${process.env.API_BASE_URL}/trips/removeplace`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',
                                            'Authorization': JSON.parse(localStorage.getItem('user')).token,
                                        },
                                        body: JSON.stringify({
                                            "placeId": t.place_id,
                                            "tripId": tripData.tripId,
                                        })
                                    })
                                    .then((response) => {
                                        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
                                        return response.json();
                                    })
                                    .then((result) => {
                                        if(result.rowCount === 1) tripPlacesDiv.removeChild(card);
                                    });
                                })
                                card.appendChild(removePlaceButton);
                            }
                        });
                    })
                    card.appendChild(addPlaceButton);
                    const cardsWrapper = document.querySelector(`.WRAP${c[0]}${wrap}`);
                    cardsWrapper.appendChild(card);
                }
            })
            const items = document.querySelector(`.ITEMS${c[0]}0`);
            items.className += " active";
        })
    });
}

function filterPlaces(places, tripPlaces) {
    const categories = {};
    places.forEach((p) => {
        tripPlaces.forEach((tp) => {
            if(p.place_id === tp.place_id) {
                const index = places.indexOf(p);
                console.log(places.splice(index, 1));
            }
        })
    })
    Object.entries(places).forEach((place) => {
        if(!tripPlaces.includes(place)) {
            if (!categories[place[1].types[0]]) categories[place[1].types[0]] = [place[1]];
            else categories[place[1].types[0]].push(place[1]);
        }
    });
    return categories;
}

export default ModifyTripPage;
