
import { clearPage } from '../../utils/render';
import image from '../../img/usertest.png';


const ProfilPage = () => {
    clearPage();
    const profilPage = document.querySelector('main');
    const profilPageForm = `
    <div class="container">
        <div class="main">
            <div class="topbar">
                <a href="">logout</a>
                <a href="">Support</a>
                <a href="">Work</a>
                <a href="">Home</a>
            <div>
            <div class="row">
                <div class="col-md-4 mt-1">
                    <div class="card text-center sidebar">
                        <div class="card-body">
                            <img src='${image}' class="rou>

                        </div>
                    </div>
                </div>
            </div>           
    `


    profilPage.innerHTML = profilPageForm;
};


export default ProfilPage;