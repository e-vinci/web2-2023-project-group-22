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
                    <div class="card mb-3 content" id="recentTrips">
                        <h1 class="m-3 titreVoyageRecent"> Recent Trips</h1>
                    </div>

            </div>   
        </div> 


        
     </div>           
    `
    profilPage.innerHTML = profilPageForm;
    commentairSite();
    
    logout();
    showTrips(userData);
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

async function showTrips(userData) {
    const trips = document.querySelector('#recentTrips');
    fetch(`${process.env.API_BASE_URL}/trips/user/${userData.email}`)
        .then(response => response.json())
        .then(data => {
        data.forEach((element) => {
            fetch(`${process.env.API_BASE_URL}/trips/${element.id_trip}`, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                fetch(`https://restcountries.com/v3.1/alpha/${result.country_code}`,{
                    method: 'GET',
                })
                .then(response => response.json())
                .then(res => {
                    const trip = document.createElement('div');
                    const country = document.createElement('h5');
                    country.innerText = `${res[0].name.common  } ${result.start_date.split('T')[0]} to ${result.end_date.split('T')[0]}`;
                    trip.appendChild(country);
                    trips.appendChild(trip);
                    trip.addEventListener('click', () => {
                        localStorage.setItem('tripData', JSON.stringify(result));
                        Navigate('/trip');
                    })
                });
            })
        })
    })
    const items = document.querySelector(`.cItem0`);
    if(items) items.className += " active"
  }

export default ProfilPage;