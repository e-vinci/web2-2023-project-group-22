import { clearPage } from "../../../utils/render"
import logoImageNoir from '../../../img/imageVille.jpg'

const TripPage = () => {
    clearPage();
    displayTripPage();
}

function displayTripPage () {
    const main = document.querySelector("main");
    main.innerHTML = // ${country.name.common} ${trip.id}
    
     `
     <div id="div-trip-page-block">
        <div id="trip-page-left-side">
            <div id="div-trip-page-block-content-image">
                <div id="div-trip-page-block-content-text">
                 <img alt="" class="PlanPageHeader__image w-100 object-fit-cover" src="${logoImageNoir}">

                    <div class="PlanPageHeader__header" >
                        
                        <h1>Voyage à Brussels </h1>
                        <div class ="PlanPageHeader__display">
                        <div class ="PlanPageHeader__date">
                        <p> <i class="bi bi-calendar"></i> 1/11 - 30/11</p>
                        </div>
                        <div class ="PlanPageHeader__button">
                            <button style="none" type="submit">
                            <i class="bi bi-share-fill"></i>
                            </button>
                            <button style="none" type="submit">
                            <i class="bi bi-person-plus-fill"></i>
                            </button>
                            </div>
                        
                       
                        </div>
                        
                    </div>
                </div>
            <div id="cCarousel">
                  <div id="carousel-vp">
                      <div id="cCarousel-inner">
                  
                          
                  
                          
                  
                          
              
                      </div>
                  </div>
              </div>
          </div>    
     </div>

     <div id="trip-page-right-side">
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>
          <h1>Maps</h1>

     </div>
  </div>
  `
    // <div id="div-trip-page-block">

    //     <div id="div-page-block-content">

    //         <div id="div-trip-page-block-content-image">
    //             <div id="div-trip-page-block-content-text">
    //                 <h1>Voyage à </h1>
                    
    //                 <i class="bi bi-calendar"></i>
    //                 <p>1/11 - 30/11</p>
    //                 <button style="none" type="submit">
    //                     <i class="bi bi-send"></i>
    //                 </button>
    //                 <button style="none" type="submit">
    //                     <i class="bi bi-share"></i>
    //                 </button>
    //             </div>
    //         </div>

    //         <div id="div-trip-page-block-content-info">
    //             <div id="div-trip-page-block-content-info-filter">
    //                 <h3>Filtrer par budget</h3>
    //                 <input type="range" min="0" max="1000" />
    //             </div>
    //             <div id="div-trip-page-block-content-info-capital-cities">
    //                 <div></div>
    //                 <div></div>
    //                 <div></div>
    //             </div>
    //             <div id="div-trip-page-block-content-info-hotel"></div>
    //         </div>

    //     </div>

    //     <div id="div-trip-page-block-map" style="">
    //         <iframe id="tripMap"
    //         width="700"
    //         height="700"
    //         style="border:0"
    //         loading="lazy"
    //         allowfullscreen
    //         referrerpolicy="no-referrer-when-downgrade"
    //         src=""
    //         </iframe>
    //     </div>
    // </div>
    // `;
}

export default TripPage;