
import { clearPage } from '../../../utils/render';
import image from '../../../img/usertest.png';



const ProfilPage = () => {
    clearPage();
    const profilPage = document.querySelector('main');
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log(userData);
    const profilPageForm = `
    <div class="containerr">
        <div class="main">
            <div class="row">
                <div class="col-md-4 mt-1">
                    <div class="card text-center sidebar">
                        <div class="card-body">
                            <img src='${image}' class="rounded-circle" width="150">
                            <div class="mt-3">
                            <h3> Bienvenue ${userData.profile.name} </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class = "col-md-8 mt-1">
                    <div  class="card mb-3 content">
                        <h1 class="m-3 pt-3"> Profil</h1>
                        <div class ="card-body">
                            <div class="row">
                                <div class="col-md-3">
                                    <h5> Nom Complet <h5>
                                </div>
                                <div class="col-md-9 text-secondary">
                                    Tiago
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-md-3">
                                    <h5> Email <h5>
                                </div>
                                <div class="col-md-9 text-secondary">
                                    Tiago@gmail.com
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-md-3">
                                    <h5> Statut <h5>
                                </div>
                                <div class="col-md-9 text-secondary">
                                    Admin
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 content">
                        <h1 class"m-3> Voyages recents</h1>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3">
                                    <h5> Voyages recents</h5>
                                </div>
                                <div class="col-md-9 text-secondary">
                                    Voyages recents
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="card mb-3 content">
                        <h1 class"m-3> Feedbacks</h1>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3">
                                    <h5>Feedbacks</h5>
                                </div>
                                <div class="col-md-9 text-secondary">
                                Feedbacks
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div> 
     </div>           
    `
    profilPage.innerHTML = profilPageForm;
};


export default ProfilPage;