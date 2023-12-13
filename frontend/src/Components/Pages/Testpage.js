import { clearPage } from '../../utils/render';
// import logoImageNoir from '../../img/logo.png';
// import image from '../../img/imageVille.jpg';
// import image1 from '../../img/usertest.png';
// import Navigate from '../Router/Navigate';

const Testpage = async () => {
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
    </div>
  </div>

  <button class="carousel-control carousel-prev">&#8249;</button>
  <button class="carousel-control carousel-next">&#8250;</button>
</div>
    `;
    const caroussel = document.querySelector('.carousel-item');
    await fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((countries) => {
      countries.forEach((country) => {
        const card = document.createElement('div');
        card.className = "card";
        const img = document.createElement('img');
        img.src = country.flags.png;
        card.appendChild(img);
        const content = document.createElement('card-content');
        content.className = "card-content";
        content.innerText = country.name.common;
        card.appendChild(content);
        caroussel.appendChild(card);
      });
      slide();
    });
}

function slide(){
  let currentIndex = 0;
  const totalItems = document.querySelectorAll('.carousel-item').length;
  console.log(totalItems);

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

  const prev = document.querySelector('.carousel-prev');
  prev.addEventListener('click', (e) => {
    e.preventDefault();
    prevSlide();
  });
  const next = document.querySelector('.carousel-next');
  next.addEventListener('click', (e) => {
    e.preventDefault();
    nextSlide();
  });


}




export default Testpage;