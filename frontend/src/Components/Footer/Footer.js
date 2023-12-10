import logoImageNoir from '../../img/logo.png'

const Footer = () => {
    const footer = document.querySelector('footer');
    const footerContent = 
    `
    <p>Explore the World with Where2Go</p>

    <div class="contact">
      <p>Contact Us: <a href="mailto:licajgerard@student.vinci.be">info@where2go.com</a></p>
    </div>
    <div class="newsletter">
      <p></p>
      <div class="overlay hidden"></div>
      <button id="buttonid" class="subscribe-btn">Donnez votre avis</button>
    </div>

    <p>Terms | <a href="#">Privacy Policy</a></p>

    <p>&copy; 2023 Where2Go. All rights reserved.</p>
    
    <div class="modal-justify">

      <div class="modal" id="subscribeModal">
      <div class="modal-content">
      <button id="close-btn">X</button>
      <div class="flex">
        <img src="${logoImageNoir}" width="100px" height="100px"/>
      </div>
      <div>
        <h3>Donnez votre avis</h3>
        <p>
        Si vous souhaitez recevoir des idées sur les voyages à faire, inscrivez-vous à notre newsletter!
        </p>
      </div>
  
      <input type="email" id="email" placeholder="Entrez votre email ici" />
      <button class="subscribe-btn-modal">Submit</button>
    </div>

  </div>
    `;

  footer.innerHTML += footerContent;

function showModal() {
    const button = document.getElementById('buttonid');
    button.addEventListener('click', () => {
    openModal();
    })
}

function openModal() {
    document.getElementById('subscribeModal').style.display = 'flex';
  }

function closeModal() {
    document.getElementById('subscribeModal').style.display = 'none';
  }

function closeBtn() {
    // eslint-disable-next-line no-shadow
    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', () => {
    closeModal();
    })
}

showModal();
closeBtn();
}

export default Footer;