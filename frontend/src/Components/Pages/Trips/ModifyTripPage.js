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
    localStorage.removeItem('countryData');
    const main = document.querySelector('main');
    main.innerHTML = `
    <div id="div-trip-page-block">
        <div id="modify-trip-page-left-side">
            <div id="form-filter-modify-trip">
                <input id="modify-trip-filter" type="text" placeholder="Filtrer par catégorie" />
                <input id="modify-trip-filter-submit" type="submit" value="Filtrer" />
            </div>
            <div id="categories">
            </div>
            
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
        const category = {};
        Object.entries(places).forEach((place) =>{
            if(!category[place[1].types[0]]) category[place[1].types[0]] = [place[1]];
            else category[place[1].types[0]].push(place[1]);
        });
        Object.entries(category).forEach((c) => {
            const leftPage = document.querySelector('#categories');
            console.log(leftPage);
            const categoryDiv = document.createElement("div");
            categoryDiv.id = `${c[0]}`;
            categoryDiv.innerHTML += `
            
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="card" style="width: 18rem;">
                                    <img src="..." class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
                            </div>
                            <div class="carousel-item">
                                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
            `;
            leftPage.appendChild(categoryDiv);
            c[1].forEach((t) => {
                if(t.types[0] === c[0]){
                    // const place = null;
                    // place.innerHTML += `

                    
                    // `;

                    // categoryDiv.appendChild(place);
                }
            })
            
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