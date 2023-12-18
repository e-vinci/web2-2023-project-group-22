/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { clearPage } from "../../../utils/render"
import logoImageNoir from '../../../img/imageVille.jpg'
import chambre from '../../../img/hotel_chambre.jpg'
import tripadvisor from '../../../img/tripadvisor.png'
import booking from '../../../img/booking.png'
import airbnb from '../../../img/aribnb.png'
import Navigate from "../../Router/Navigate";



const TripPage = () => {
    clearPage();
    displayTripPage();
}

async function displayTripPage() {
    const tripData = JSON.parse(localStorage.getItem('tripData'));
    console.log(tripData);
    const main = document.querySelector("main");
    main.innerHTML = // ${country.name.common} ${trip.id}

    // <button style="none" type="submit">
    //    <i class="bi bi-share-fill"></i>
    //  </button>
    //  <button style="none" type="submit">
    //    <i class="bi bi-person-plus-fill"></i>
    //  </button>
    `
    <div id="div-trip-page-block">
        <div id="trip-page-left-side">
            <div id="div-trip-page-block-content-image">
                <div id="div-trip-page-block-content-text">
                    <img alt="" class="PlanPageHeader__image w-100 object-fit-cover" src="${logoImageNoir}">
                    <div class="PlanPageHeader__header" >
                        <h1>Trip to ${tripData.country_code}</h1>
                        <div class ="PlanPageHeader__display">
                            <div class ="PlanPageHeader__date">
                                <p> <i class="bi bi-calendar"></i>${tripData.start_date.split('T')[0]} to ${tripData.end_date.split('T')[0]}</p>
                            </div>
                            
                               
                            
                            <div class ="PlanPageHeader__button">
                                <button style="none" type="submit" id="modifyTripButton">
                                    <i>Modify trip</i> 
                                </button>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class = "PlanPagePlace">
                    <div id="trip-places"></div>
                </div>
                
                <div class = "PlanPagehotel">
                    <div class = "PlanPagehotel_display"  >
                        <h7>Besoin d'un hotel ? </h7>   
                    </div>
                    <div class =" PlanPagehotel_image" >
                        <div class =" PlanPagehotel_chambre" >
                            <img src="${chambre}" > 
                        </div>
                        <a href="https://www.tripadvisor.com/" target="_blank">
                        <img src="${tripadvisor}"  >
                        </a>
                        <a href="https://www.booking.com/" target="_blank">
                        <img src="${booking}" >
                        </a>
                        <a href="https://www.airbnb.com/" target="_blank">
                        <img src="${airbnb}" >
                        </a>        
                    </div>
                    </div>

                    <div class = "PlanPageAddComment">
                        <div>
                            <h3>Give your feeback</h3>
                            <div id="errorMessage" style="color:red"></div>
                            </div>
                            
                            <input type="text" id="commentairetrip" maxlength="140" placeholder="Enter your feedback here (Max 140 characters)" required/>
                            <div class="subtrip">
                            <select id="selecttrip" placeholder="1-5" >
                                <option value="" disabled selected >Select your rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <label for="myfile">Add a picture:</label>
                            <input type="file" id="myfile" name="myfile"><br><br>
                             <button class="subscribe-btn-modal" id="submitComment">Submit</button>
                            </div>                   
                        </div>
                    <div class = "PlanPageComment">
                        <div id="trip-coments"></div>
                            <div class ="PlanPageComment_image" >
                                <img src="${chambre}" > 
                                <div class = " PlanPageComment_name">
                                    <h5> Gustavo Gus  </h5>
                                    <p> Gustavo is Gusson but you can call me Gus</p>
                                    <p><i class="bi bi-star-fill"></i></p>
                                 </div>
                             </div>
                        </div>         
                     </div> 
                </div>
                
        <div id="trip-page-right-side">
        </div>
    </div>
    `;
    const mapDiv = document.createElement('div');
    mapDiv.id = "mapDiv";
    const rightSide = document.querySelector('#trip-page-right-side');
    rightSide.appendChild(mapDiv);

    const submitComment = document.querySelector('#submitComment');
    submitComment.addEventListener('click', () => {
        const comment = document.querySelector('#commentairetrip').value;
        const rating = document.querySelector('#selecttrip').value;
        const image = document.querySelector('#myFile');

        fetch(`${process.env.API_BASE_URL}/comments/trip/add`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('user')).token,
              },
            method: 'POST',
            body: JSON.stringify({
                tripId: tripData.id_trip,
                rating,
                comment,
                image,
            })
        })
    })

    const modifyTripButton = document.querySelector('#modifyTripButton');
    modifyTripButton.addEventListener('click', () => { 
        Navigate('/modifytrip');
    })

    const tripPlaces = document.querySelector('#trip-places');
    const places = await fetch(`${process.env.API_BASE_URL}/trips/trip/${tripData.id_trip}`, {
        method: 'GET'
    })
    .then((response) => {
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
    })
    .then((result) => {
        result.forEach((e) => {
            const card = document.createElement('div');
            card.innerHTML = `
                <div class = "PlanPageplace_display"  >
                    <h7>${e.order}. ${e.place.name}</h7>   
                </div>
                <div class =" PlanPagePlace_image" >
                    <div class =" PlanPagehotel_chambre" >
                        <img src="${e.place.icon}" style="width: 50px; height: 50px;"> 
                    </div>
                    <p>${e.place.formatted_address}</p>
                </div>
            `;
            tripPlaces.appendChild(card);
        })
        return result;
    });

    if(places.length === 0) {
        tripPlaces.innerHTML = `
            <div>
                <h5>No places yet... Add some ?</h5>
                <button id="addPlacesButton">Modify trip</button>
            </div>
        `;
        const addPlacesButton = document.querySelector('#addPlacesButton');
        addPlacesButton.addEventListener('click', () => {
            Navigate('/modifytrip');
        })
    }

    const mapBounds = {
        north: 0,
        south: 1000,
        west: 1000,
        east: 0
    }
    places.forEach((place) => {
        if(place.place.geometry.viewport.north > mapBounds.north) mapBounds.north = place.place.geometry.viewport.north;
        if(place.place.geometry.viewport.south < mapBounds.south) mapBounds.south = place.place.geometry.viewport.south;
        if(place.place.geometry.viewport.west < mapBounds.west) mapBounds.west = place.place.geometry.viewport.west;
        if(place.place.geometry.viewport.east > mapBounds.east) mapBounds.east = place.place.geometry.viewport.east;
    });
    // eslint-disable-next-line no-unused-vars
    let map;
    const initMap = async function () {
      // eslint-disable-next-line no-undef
      const { Map } = await google.maps.importLibrary("maps");

      map = new Map(document.getElementById("mapDiv"), {
        center: {lat: 50.5039, lng: 4.4699},
        zoom: 8,
        restriction: {
          latLngBounds: mapBounds,
          strictBounds: false,
        }

      });
      places.forEach((place) => {
        const marker = new google.maps.Marker({
            label: { text: place.order.toString(), color: "white", fontSize: "20px", fontWeight: "bold"},
            position: place.place.geometry.location,
            map,
            title: place.place.name
        });
      })

      // eslint-disable-next-line no-undef
    //   const bounds = new google.maps.LatLngBounds(
    //     data.results[0].geometry.viewport.southwest,
    //     data.results[0].geometry.viewport.northeast
    //   );
    //   map.fitBounds(bounds);
    }
    initMap();
}

export default TripPage;