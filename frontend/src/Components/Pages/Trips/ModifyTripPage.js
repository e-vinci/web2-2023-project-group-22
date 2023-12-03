import { clearPage } from "../../../utils/render";
// import Navigate from "../../Router/Navigate";
import logoImageNoir from '../../../img/logo-blanc.png'

const ModifyTripPage = () => {
    clearPage();
    displayTripPage();
    // displayPage();
}

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

function displayTripPage () {
    const main = document.querySelector("main");
    main.innerHTML = `
    <div id="div-trip-page-block">
       <div id="trip-page-left-side">
           <div>
                <div class="category" id="resto">
                    <div class="place-image-name">
                        <h5>Place Louise</h5>
                        <img src="${logoImageNoir}" style="width: 120px;">
                    </div>
                    <div class="place-text">
                        <p>nigga</p>
                    </div>
                    <div class="place-note-and-add">
                        <p>4,7/5</p>
                        <input type="submit" value="ajouter au voyage">
                    </div>
                </div>
                <div class="category" id="resto">
                    <div class="place-image-name">
                        <h5>Place Louise</h5>
                        <img src="${logoImageNoir}" style="width: 120px;">
                    </div>
                    <div class="place-text">
                        <p>nigga</p>
                    </div>
                    <div class="place-note-and-add">
                        <p>4,7/5</p>
                        <input type="submit" value="ajouter au voyage">
                    </div>
                </div>
                <div class="category" id="resto">
                    <div class="place-image-name">
                        <h5>Place Louise</h5>
                        <img src="${logoImageNoir}" style="width: 120px;">
                    </div>
                    <div class="place-text">
                        <p>nigga</p>
                    </div>
                    <div class="place-note-and-add">
                        <p>4,7/5</p>
                        <input type="submit" value="ajouter au voyage">
                    </div>
                </div>
                <div class="category" id="resto">
                    <div class="place-image-name">
                        <h5>Place Louise</h5>
                        <img src="${logoImageNoir}" style="width: 120px;">
                    </div>
                    <div class="place-text">
                        <p>nigga</p>
                    </div>
                    <div class="place-note-and-add">
                        <p>4,7/5</p>
                        <input type="submit" value="ajouter au voyage">
                    </div>
                </div>
                <div class="category" id="resto">
                    <div class="place-image-name">
                        <h5>Place Louise</h5>
                        <img src="${logoImageNoir}" style="width: 120px;">
                    </div>
                    <div class="place-text">
                        <p>nigga</p>
                    </div>
                    <div class="place-note-and-add">
                        <p>4,7/5</p>
                        <input type="submit" value="ajouter au voyage">
                    </div>
                </div>
           </div>
           
       </div>

       <div id="trip-page-right-side">
            <h1>vvvvvvvvvvvvvvvvvvvvvvvvvv</h1>
       </div>
    </div>
    `;
}

export default ModifyTripPage;