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
  
      <p>Terms | <a href="/privacypolicy">Privacy Policy</a></p>
  
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
          <div id="errorMessage" style="color:red"></div>
        </div>
        
        <input type="text" id="commentaire" maxlength="140" placeholder="Enter your feedback here (Max 140 characters)" required/>
        <select id="rating" placeholder="1-5">
        <option value="" disabled selected>Select your rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>

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
submitButton.addEventListener('click', async (event) => {
  event.preventDefault();

  const idUser = JSON.parse(localStorage.getItem('user')).id_user;
  const commentaire =  document.querySelector('#commentaire').value;
  const ratings =  document.querySelector('#rating').value; 

  // Select the HTML element where you want to display the error message
  const errorMessage = document.querySelector('#errorMessage');

  if (commentaire === '') {
    alert('Please fill in the form');
    return;
  }
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/comments/site/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('user')).token
      },
      body: JSON.stringify({
        userId: idUser,
        comment: commentaire,
        rating: ratings
      })
    });
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  } catch (error) {
    if (error.message === 'fetch error : 401 : Unauthorized') {
      errorMessage.textContent = 'You can give only one feedback, thank you';
      return;
    }
    errorMessage.textContent ='Unknown error, try again later';
  }
  
  closeModal();
});
}

validateAndSubmit();
showModal();
closeBtn();

}

export default Footer;