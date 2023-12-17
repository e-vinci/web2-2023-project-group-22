import { clearPage } from '../../utils/render';
// import logoImageNoir from '../../img/logo.png';
// import image from '../../img/imageVille.jpg';
// import image1 from '../../img/usertest.png';
// import Navigate from '../Router/Navigate';

const Testpage = async () => {
    clearPage();

    const main = document.querySelector('main');
    main.addEventListener("DOMContentLoaded", () => {
        // Crée le conteneur du carousel
        const carouselContainer = document.createElement("div");
        carouselContainer.id = "carousel-container";
        main.appendChild(carouselContainer);
      
        // Initialise l'index du slide actuel
        let currentIndex = 0;
      
        // Ajoute des slides au carousel
        const slidesContent = ["Slide 1", "Slide 2", "Slide 3"];
        const slides = slidesContent.map((content) => {
          const slide = document.createElement("div");
          slide.classList.add("slide");
          slide.textContent = content;
          carouselContainer.appendChild(slide);
          return slide;
        });
      
        // Ajoute des boutons pour la navigation
        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.addEventListener("click", showPreviousSlide);
        main.appendChild(prevButton);
      
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.addEventListener("click", showNextSlide);
        main.appendChild(nextButton);
      
        // Fonction pour afficher le slide suivant
        function showNextSlide() {
          slides[currentIndex].classList.remove("visible");
          currentIndex = (currentIndex + 1) % slides.length;
          slides[currentIndex].classList.add("visible");
        }
      
        // Fonction pour afficher le slide précédent
        function showPreviousSlide() {
          slides[currentIndex].classList.remove("visible");
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          slides[currentIndex].classList.add("visible");
        }
      
        // Affiche le premier slide au chargement de la page
        slides[currentIndex].classList.add("visible");
      });
      

    
}






export default Testpage;