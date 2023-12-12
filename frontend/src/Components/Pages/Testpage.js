import { clearPage } from '../../utils/render';
// import logoImageNoir from '../../img/logo.png';
// import image from '../../img/imageVille.jpg';
// import image1 from '../../img/usertest.png';
// import Navigate from '../Router/Navigate';

const Testpage = () => {
    clearPage();
    const head = document.querySelector('head');
    head.innerHTML += `
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
    `;
    const main = document.querySelector('main');
    main.innerHTML += `
    <div id="customCarousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      <div class="card">
        <img src="https://via.placeholder.com/250x200" alt="Card Image">
        <div class="card-content">
          <h3>Title 1</h3>
          <p>Description 1</p>
          <button>Add to Trip</button>
        </div>
      </div>

      <div class="card">
        <img src="https://via.placeholder.com/250x200" alt="Card Image">
        <div class="card-content">
          <h3>Title 2</h3>
          <p>Description 2</p>
          <button>Add to Trip</button>
        </div>
      </div>

      <div class="card">
        <img src="https://via.placeholder.com/250x200" alt="Card Image">
        <div class="card-content">
          <h3>Title 3</h3>
          <p>Description 3</p>
          <button>Add to Trip</button>
        </div>
      </div>

      <div class="card">
        <img src="https://via.placeholder.com/250x200" alt="Card Image">
        <div class="card-content">
          <h3>Title 4</h3>
          <p>Description 4</p>
          <button>Add to Trip</button>
        </div>
      </div>

      <div class="card">
        <img src="https://via.placeholder.com/250x200" alt="Card Image">
        <div class="card-content">
          <h3>Title 5</h3>
          <p>Description 5</p>
          <button>Add to Trip</button>
        </div>
      </div>
    </div>
  </div>

  <button class="carousel-control carousel-prev" onclick="prevSlide()">&#8249;</button>
  <button class="carousel-control carousel-next" onclick="nextSlide()">&#8250;</button>
</div>
    `;
    slide();
}

function slide(){
  let currentIndex = 0;
  const totalItems = document.querySelectorAll('.carousel-item').length;

  function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;

    currentIndex = (index + totalItems) % totalItems;

    const transformValue = `${-currentIndex * itemWidth  }px`;
    carouselInner.style.transform = `translateX(${  transformValue  })`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  
  document.querySelector('.carousel-prev').addEventListener('click', () => prevSlide());
  document.querySelector('.carousel-next').addEventListener('click', () => nextSlide());


}




export default Testpage;