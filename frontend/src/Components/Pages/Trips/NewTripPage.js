import { clearPage } from "../../../utils/render";
import Navigate from "../../Router/Navigate";

const NewTripPage = () => {
  const country = JSON.parse(localStorage.getItem('countryData'));
  localStorage.removeItem('countryData');
  clearPage();
  const main = document.querySelector('main');

  const formDestination =`
    <div class="container-form" id="container">
      <div class="destination-container" id ="container-destination">
        <form>
          <h1>Chose a destination </h1>
          <span>Where to go ? </span>
          <h6 style="color: red;">For economic reasons we only allow trips to Brussels by now</h6>
            <input type="text" placeholder="ex. Paris, Japan, ..." id="destination" value="Belgium" required readonly/>
            <div class="calendar"></div>
            <h4>Start date </h4>
            <input type="date" id="startDate" required/>
            <h4>End date </h4>
            <input type="date" id="endDate" required/>
          <input type="submit" value="Start dreaming" id="createDest" />
        </form>
    </div>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" id="signinmodal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">You must be signed in order to use this</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" id="signIn">Sign in</button>
        </div>
      </div>
    </div>
  </div>
  `;
  main.innerHTML = formDestination;

  if(country) {
    const destinationField = document.getElementById('destination');
    // destinationField.value = country.name.common;
    destinationField.value = "Belgium";
  }

  const signInButton = document.getElementById('signIn');
  signInButton.addEventListener('click', () => {
    Navigate('/auth')
  });
  
  const submit = document.getElementById('createDest');
  submit.addEventListener('click', async (event) => {
    event.preventDefault();
    if(!localStorage.getItem('user')) showLoginModal();
    else{
      event.preventDefault();
      const destination = document.getElementById('destination').value;
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      await fetch('http://localhost:3000/trips/createtrip', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('user')).token,
      },
      method: 'POST',
      body: JSON.stringify({
        "countryCode": destination,
        "startDate": startDate,
        "endDate": endDate
      })
      })
      .then((response) => {
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem('countryData', JSON.stringify(result));
      });
      Navigate("/modifytrip");
    }
  });   
}

function showLoginModal(){
  const modal = document.getElementById('signinmodal');
  console.log(modal);
  // modal.show();
}

export default NewTripPage;