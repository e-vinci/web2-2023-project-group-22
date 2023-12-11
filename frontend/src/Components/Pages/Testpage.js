import { clearPage } from '../../utils/render';
// import Navigate from '../Router/Navigate';
// import Navigate from '../Router/Navigate';

const Testpage = () => {
    clearPage();
    const main = document.querySelector('main');
    main.innerHTML += `
    <div id="carousel-container">
        <div id="carousel">
            <div class="carousel-item">t'es trop beau ma vie</div>
            <div class="carousel-item">t'es trop beau ma vie</div>
            <div class="carousel-item">t'es trop beau ma vie</div>
            <!-- Add more items as needed -->
        </div>
        <div id="prev"><i class="bi bi-arrow-left-short"></i></div>
        <div id="next"><i class="bi bi-arrow-right-short"></i></div>
    </div>
    `;
    Carousel();   
}

function Carousel(){
    const carousel = document.getElementById('carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * 300}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }

  document.getElementById('next').addEventListener('click', () => {
    console.log('grgrgrggggrgrgrg');
    nextSlide();
  });
  document.getElementById('prev').addEventListener('click', prevSlide);
}





export default Testpage;