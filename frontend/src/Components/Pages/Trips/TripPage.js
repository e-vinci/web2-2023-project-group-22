import { clearPage } from "../../../utils/render"

const TripPage = () => {
    clearPage();
    displayTripPage();
}

function displayTripPage () {
    const main = document.querySelector("main");
    main.innerHTML = `
    <div id="div-trip-page-block" style=" width :100%;">

        <div id="div-page-block-content" style="background-color : grey; width :50%;">

            <div id="div-trip-page-block-content-image">
                <div id="div-trip-page-block-content-image-text">
                    <h1>Voyage à Bruxelles</h1>
                    <i class="bi bi-calendar"></i>
                    <p>1/11 - 30/11</p>
                    <button style="none" type="submit">
                        <i class="bi bi-send"></i>
                    </button>
                    <button style="none" type="submit">
                        <i class="bi bi-share"></i>
                    </button>
                </div>
            </div>

            <div id="div-trip-page-block-content-info" style="width : 50%; background-color : blue;">
                <div id="div-trip-page-block-content-info-filter">
                    <input type="range" min="0" max="1000" />
                </div>
                <div id="div-trip-page-block-content-info-capital-cities"></div>
                <div id="div-trip-page-block-content-info-hotel"></div>
            </div>

        </div>

        <div id="div-trip-page-block-map" style="">
            <iframe
            width="1300"
            height="750"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="">
            </iframe>
        </div>
    </div>
    `;
}

export default TripPage;