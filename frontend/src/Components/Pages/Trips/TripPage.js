import { clearPage } from "../../../utils/render"
import logoImageNoir from '../../../img/imageVille.jpg'
import chambre from '../../../img/hotel_chambre.jpg'
import tripadvisor from '../../../img/tripadvisor.png'
import booking from '../../../img/booking.png'
import airbnb from '../../../img/aribnb.png'



const TripPage = () => {
    clearPage();
    displayTripPage();
}

function displayTripPage() {
    const main = document.querySelector("main");
    // const tripData = JSON.parse(localStorage.getItem('countryData'));
    //  localStorage.removeItem('countryData');
    main.innerHTML = // ${country.name.common} ${trip.id}

        `
     <div id="div-trip-page-block">
        <div id="trip-page-left-side">
            <div id="div-trip-page-block-content-image">
                <div id="div-trip-page-block-content-text">
                    <img alt="" class="PlanPageHeader__image w-100 object-fit-cover" src="${logoImageNoir}">
                    <div class="PlanPageHeader__header" >

                        <h1>Trip to </h1>
                        <div class ="PlanPageHeader__display">
                            <div class ="PlanPageHeader__date">
                            <p> <i class="bi bi-calendar"></i> to </p>
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




                <div class = "PlanPageBody">
                    <h4> Most popular places </h4>
                    <div id="carouselExampleIndicators" class="carousel slide">

                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
                     </div>

                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <div class="cards-wrapper">
                                <div class="card" style="width: 100rem;">
                                    <img src="${logoImageNoir}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Maison Dandoy </h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                <div class="card" style="width: 100rem;">
                                    <img src="${logoImageNoir}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Atomium</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                <div class="card" style="width: 100rem;">
                                    <img src="${logoImageNoir}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Grande Place</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="carousel-item">
                            <div class="cards-wrapper">
                                <div class="card" style="width: 100rem;">
                                    <img src="${logoImageNoir}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Maneken pis</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            <div class="card" style="width: 100rem;">
                                <img src="${logoImageNoir}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Garde de Midi </h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                    </div>
                    <div class="card" style="width: 100rem;">
                        <img src="${logoImageNoir}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Garde de Central </h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>  
                    </div>
                    <div class="carousel-item active">
                        <div class="cards-wrapper">
                        <div class="card" style="width: 100rem;">
                                <img src="${logoImageNoir}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Laboreur</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card" style="width: 100rem;">
                                <img src="${logoImageNoir}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">La Ruche </h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card" style="width: 100rem;">
                                <img src="${logoImageNoir}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Ribs & Steak </h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>  
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"  ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

               </div>    
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