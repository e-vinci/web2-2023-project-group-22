import { clearPage } from "../../../utils/render";
// import Navigate from "../../Router/Navigate";
// import logoImageNoir from '../../../img/imageVille.jpg'

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
       <div id="modify-trip-page-left-side">
            <div class="categories" id="resto">
                <h1>Restaurant  à ...</h1>
                <div id="cCarousel">
                
                    <div id="carousel-vp">
                        <div id="cCarousel-inner">
                    
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon">
                                <div class="infos">
                                    <h3>La ruche</h3>
                                    <h6>4,7/5</h6>
                                    <button type="button">Ajouter au voyage</button>
                                </div>
                            </article>
                    
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon">
                                <div class="infos">
                                    <h3>La ruche</h3>
                                    <h6>4,7/5</h6>
                                    <button type="button">Ajouter au voyage</button>
                                </div>
                            </article>
                    
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon">
                                <div class="infos">
                                    <h3>La ruche</h3>
                                    <h6>4,7/5</h6>
                                    <button type="button">Ajouter au voyage</button>
                                </div>
                            </article>
                
                        </div>
                    </div>
                </div>
                <button type="button" class="seeMoreButton">Voir plus</button>
            </div>

            <div class="categories" id="resto">
                <h1>Restaurant  à ...</h1>
                <div id="cCarousel">
                
                    <div id="carousel-vp">
                        <div id="cCarousel-inner">
                    
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon">
                                <div class="infos">
                                    <h3>La ruche</h3>
                                    <h6>4,7/5</h6>
                                    <button type="button">Ajouter au voyage</button>
                                </div>
                            </article>
                    
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon">
                                <div class="infos">
                                    <h3>La ruche</h3>
                                    <h6>4,7/5</h6>
                                    <button type="button">Ajouter au voyage</button>
                                </div>
                            </article>
                    
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon">
                                <div class="infos">
                                    <h3>La ruche</h3>
                                    <h6>4,7/5</h6>
                                    <button type="button">Ajouter au voyage</button>
                                </div>
                            </article>
                
                        </div>
                    </div>
                </div>
                <button type="button" class="seeMoreButton">Voir plus</button>
            </div>

            <div class="categories" id="resto">
                <h1>Restaurant  à ...</h1>
                <div id="cCarousel">
                
                    <div id="carousel-vp">
                        <div id="cCarousel-inner">
                    
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon">
                                <div class="infos">
                                    <h3>La ruche</h3>
                                    <h6>4,7/5</h6>
                                    <button type="button">Ajouter au voyage</button>
                                </div>
                            </article>
                    
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon">
                                <div class="infos">
                                    <h3>La ruche</h3>
                                    <h6>4,7/5</h6>
                                    <button type="button">Ajouter au voyage</button>
                                </div>
                            </article>
                    
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon">
                                <div class="infos">
                                    <h3>La ruche</h3>
                                    <h6>4,7/5</h6>
                                    <button type="button">Ajouter au voyage</button>
                                </div>
                            </article>
                
                        </div>
                    </div>
                </div>
                <button type="button" class="seeMoreButton">Voir plus</button>
            </div>
            
       </div>

       <div id="modify-trip-page-right-side">
            <h1>vvvvvvvvvvvvvvvvvvvvvvvvvv</h1>
       </div>
    </div>
    `;
}



export default ModifyTripPage;