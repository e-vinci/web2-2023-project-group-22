import { clearPage } from "../../../utils/render";
// import Navigate from "../../Router/Navigate";

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

        <div id="div-page-block-content">

            <div id="div-trip-page-block-content-image">
                <div id="div-trip-page-block-content-text">
                    <div>
                        <h1>Voyage à Bruxelles</h1>
                    </div>

                    <div id="div-trip-page-block-content-text-info">
                        <div id="div-trip-page-block-content-text-date">
                            <i class="bi bi-calendar"></i>
                            <p>1/11 - 30/11</p>
                        </div>
                            
                        <div id="div-trip-page-block-content-text-button">
                            <input type="submit" value="test">
                            <input type="submit" value="tziuerhfioh">
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            <div id="div-trip-page-block-content-info">
                <div id="div-trip-page-block-content-info-capital-cities">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div id="div-trip-page-block-content-info-hotel"></div>
            </div>

        </div>

        <div id="div-trip-page-block-map" style="">
            <iframe id="tripMap"
            width="700"
            height="700"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src=""
            </iframe>
        </div>
    </div>
    `;
}

export default ModifyTripPage;