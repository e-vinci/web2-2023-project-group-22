import logoImageNoir from '../../img/logo.png'

const Footer = () => {
    const footer = document.querySelector('footer');
    let footerContent = '';
      footerContent = 
      `
      <p>Explore the World with Where2Go</p>
  
      <div class="contact">
        <p>Contact Us: <a href="mailto:licajgerard@student.vinci.be">info@where2go.com</a></p>
      </div>
      <div class="newsletter">
        <p></p>
        <div class="overlay hidden"></div>
        <button id="buttonid" class="subscribe-btn">Give your feedback</button>
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
          <h3>Give your feeback</h3>
          <p>
          If you want to give a feedback about our website, please fill in the form below.
          </p>
        </div>
        
        <input type="text" id="commentaire" placeholder="Enter your feedback here" required/>
  
        <button class="subscribe-btn-modal">Submit</button>
      </div>
    </div>
      ` 
    
  footer.innerHTML = footerContent;


  function fonctionConextion(){
    if(localStorage.getItem('user')){
      return true;
    }
    return false;
  }

function showModal() {
    const button = document.getElementById('buttonid');
    if(fonctionConextion()){     
    button.addEventListener('click', () => {
    openModal();
    })
  }
}

function openModal() {
  if(fonctionConextion()){
    document.getElementById('subscribeModal').style.display = 'flex';
  }
  
}

function closeModal() {
    document.getElementById('subscribeModal').style.display = 'none';
  }

function closeBtn() {
    // eslint-disable-next-line no-shadow
    const closeBtn = document.getElementById('close-btn');
    if(fonctionConextion()){
      closeBtn.addEventListener('click', () => {
        closeModal();
        })
    }
}

function validateAndSubmit() {
  const submitButton = document.querySelector('.subscribe-btn-modal');
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();

      const commentaire =  document.querySelector('#commentaire').value; 

    if(commentaire === '') {
      alert('Please fill out the comment field before submitting.');
      return;
  }

      closeModal();
  });
}  

validateAndSubmit();
showModal();
closeBtn();
}

export default Footer;