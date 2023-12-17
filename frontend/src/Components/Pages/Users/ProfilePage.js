
import { clearPage } from '../../../utils/render';
import image from '../../../img/usertest.png';
import imagegif from '../../../img/globe-13.gif';
import Navigate from '../../Router/Navigate';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';






const ProfilPage = () => {
    clearPage();
    const profilPage = document.querySelector('main');
    const userData = JSON.parse(localStorage.getItem('user'));
    if(!userData){
        window.location.href='/';
    }
    console.log(userData);
    const profilPageForm = `
    <div class="containerr">
        <div class="main">
            <div class="row">
                <div class="col-md-4 mt-1">
                    <div class="card text-center sidebar">
                        <div class="card-body">
                            <img src='${image}' class="image-profil" width="150">
                            <div class="mt-3">
                            <div class="message ">
                            <p class="welcome-Profil"> Welcome, </p> 
                            <p class="welcome-Nom-Profil"> ${userData.firstname}</p> </div>
                            

                            <img src='${imagegif}' width="450">

                            <br>
                          
                            </br>
                            <input type="submit" class="button-input" id="logout" value="Log Out" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class = "col-md-8 mt-1">
                    <div  class="card mb-3 content">
                        <h1 class="m-3 pt-3 titre_profil"> Profile</h1>
                        <div class ="card-body">
                            <div class="row">
                                <div class="col-md-3">
                                    <h5> Full name <h5>
                                </div>
                                <div class="col-md-9 text-secondary">
                                ${userData.firstname}  ${userData.lastname} 
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-md-3">
                                    <h5> Email <h5>
                                </div>
                                <div class="col-md-9 text-secondary">
                                ${userData.email}
                                </div>
                            </div>
                            
                            
                            ${userData.birthdate ? 
                                ` <hr> <div class="row">
                                    <div class="col-md-3">
                                        <h5> Statut <h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        ${userData.birthdate}
                                    </div>
                                </div>
                               <hr>` : ''}
                        </div>
                    </div>
                    <div class="card mb-3 content">
                        <h1 class="m-3 titreVoyageRecent"> Recent Trips</h1>
                        <div class="card-body">
                            <div class="row">
                                
                                <div id="carouselExampleIndicators" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
                                    </div>
                                    <div class="carousel-inner carouselDiv">
                                            <div class="carousel-item carou">
                                                <div class="cards-wrapper wrapercasse">
                                                    <div class="card" style="width: 18rem;">
                                                        <img src="${image}" class="card-img-top" alt="...">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Card title</h5>
                                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div class="carousel-item">
                                                <div class="cards-wrapper">
                                                        <div class="card" style="width: 18rem;">
                                                            <img src="${image}" class="card-img-top" alt="...">
                                                            <div class="card-body">
                                                                <h5 class="card-title">Card title</h5>
                                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                                            </div>
                                                        </div>
                                                    </div>  
                                            </div>
                                        <div class="carousel-item active">
                                            <div class="cards-wrapper">
                                                <div class="card" style="width: 18rem;">
                                                        <img src="${image}" class="card-img-top" alt="...">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Card title</h5>
                                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                                        </div>
                                                    </div>
                                                </div>  
                                        </div>
                                    </div>
                                
                                    
                                   
                                    <button class="carousel-control-prev custom-prev-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next custom-next-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>   
        </div> 


        
     </div>           
    `
    profilPage.innerHTML = profilPageForm;
    commentairSite();
    showCountry();
    
    logout();
    
};

function logout() {
    const logoutt = document.querySelector('input');
    logoutt.addEventListener('click',() => {
        localStorage.removeItem('user');
        Navbar();
        Footer();
        Navigate('/');

    })


}

function getTripDetails(tripId) {
    fetch(`${process.env.API_BASE_URL}/trips/${tripId}`)
        .then(responseFromServer => responseFromServer.json())
        .then(data => {
            const tripIds = data;
            console.log(tripIds)

            
        })
}

function showCountry() {
    const userData = JSON.parse(localStorage.getItem('user'));
    fetch(`${process.env.API_BASE_URL}/trips/user/${userData.email}`)
        .then(responseFromServer => responseFromServer.json())
        .then(data => {
            const tripIds = data;
            tripIds.map(trip => getTripDetails(trip.id_trip));
            
        })

}

function commentairSite() {
    const userData = JSON.parse(localStorage.getItem('user'));
    const DivComment = document.createElement('div');
    DivComment.style.width="89%"
    
    

    
    
    
 
    DivComment.innerHTML = `
            <div class="CommentProfileee">
                <div class="TitleFeedBack">
                    <h1 class="toz">FeedBack</h1>

                </div>

            </div>


        `;
    const message = document.createElement('p')
    message.className = "leCommentaire";

    fetch(`${process.env.API_BASE_URL}/comments/site`)
        .then(response => response.json())
        .then(data => {
           
            data.forEach(element => {
                if (element.firstname === userData.firstname && element.lastname === userData.lastname) {
                    console.log(element.comment);
                    message.innerText = element.comment;
                }
                const div = document.querySelector('.CommentProfileee');
                div.appendChild(message)
            });
        });

        const main = document.querySelector('main');

        // const deleteButton = document.createElement('button');
        // deleteButton.type = 'button';
        // deleteButton.value = 'Supprimer';
        // deleteButton.id = 'deleteButton';
        // const div = document.querySelector('.CommentProfileee');
        // div.appendChild(deleteButton);

        // deleteButton.addEventListener('click', () => {
        //     fetch(`${process.env.API_BASE_URL}/comments/site/remove`, {
                
        //    });
        //  });
        main.appendChild(DivComment);
}
export default ProfilPage;