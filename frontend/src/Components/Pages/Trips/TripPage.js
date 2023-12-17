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
                        <h1>Trip to </h1>
                        <div class ="PlanPageHeader__display">
                            <div class ="PlanPageHeader__date">
                            <p> <i class="bi bi-calendar"></i> to </p>
                            </div>
                            <div class ="PlanPageHeader__button">
                            <button style="none" type="submit">
                                <i >Modify trip </i> 
                            </button>
                               
                            </div>
                        </div>
                    </div>




                   
                </div>
               
                <div class = "PlanPageBody">
                <div class = "PlanPageplace_display"  >
                    <h7>Atomium</h7>   
                </div>
                <div class =" PlanPagePlace_image" >
                    <div class =" PlanPagehotel_chambre" >
                        <img src="${logoImageNoir}" > 
                    </div>
                    <p>  L’Atomium est un monument de Bruxelles, en Belgique, construit à l'occasion de l'Exposition universelle de 1958 et représentant la maille conventionnelle du cristal 
                    de fer agrandie 165 milliards de fois. Il est situé à Laeken sur le plateau du Heysel où eut lieu cette exposition.</p>
                
                </div>
                </div>
            
                

                <div class = "PlanPageBody">
                <div class = "PlanPageplace_display"  >
                    <h7>Atomium</h7>   
                </div>
                <div class =" PlanPagePlace_image" >
                    <div class =" PlanPagehotel_chambre" >
                        <img src="${logoImageNoir}" > 
                    </div>
                    <p>  L’Atomium est un monument de Bruxelles, en Belgique, construit à l'occasion de l'Exposition universelle de 1958 et représentant la maille conventionnelle du cristal 
                    de fer agrandie 165 milliards de fois. Il est situé à Laeken sur le plateau du Heysel où eut lieu cette exposition.</p>
                
        
                </div>
                </div>
                <div class = "PlanPageBody">
                <div class = "PlanPageplace_display"  >
                    <h7>Atomium</h7>   
                </div>
                <div class =" PlanPagePlace_image" >
                    <div class =" PlanPagehotel_chambre" >
                        <img src="${logoImageNoir}" > 
                    </div>
                    <p>  L’Atomium est un monument de Bruxelles, en Belgique, construit à l'occasion de l'Exposition universelle de 1958 et représentant la maille conventionnelle du cristal 
                    de fer agrandie 165 milliards de fois. Il est situé à Laeken sur le plateau du Heysel où eut lieu cette exposition.</p>
                
        
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