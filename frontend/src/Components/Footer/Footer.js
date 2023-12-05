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
      <button id="buttonid" class="subscribe-btn">Donnez votre avis</button>
    </div>

    <p>Terms | <a href="#">Privacy Policy</a></p>

    <p>&copy; 2023 Where2Go. All rights reserved.</p>

    <div class="modal" id="subscribeModal">
    <div class="modal-content">
      <span class="close-btn">X</span>
      <p>Subscribe to our Newsletter</p>
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

showModal();

}

export default Footer;