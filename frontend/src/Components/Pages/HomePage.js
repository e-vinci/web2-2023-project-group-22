import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const HomePage = () => {
  clearPage();
  afficherBoutonsVoyage();
  const main = document.querySelector('main');
  main.style.width = '50%';
  main.style.marginTop = '25%';
  main.style.marginLeft = '25%';
  main.style.display = 'flex';
  main.style.justifyContent = 'space-around';
};

function afficherBoutonsVoyage(){
  const names = ['Créer un voyage', 'Afficher les voyages']
  const main = document.querySelector('main');
  names.forEach((name)=>{
    const button = document.createElement('button');
    button.innerText = name;
    button.addEventListener('click',()=>{
      Navigate('/voyages');
    })
    main.appendChild(button);
  })
}

export default HomePage;
