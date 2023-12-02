import { clearPage } from "../../../utils/render";
import Navigate from "../../Router/Navigate";



const NewTripPage = () => {
  const country = JSON.parse(localStorage.getItem('countryData'));
    localStorage.removeItem('countryData');
    clearPage();
    const formDestinationPage = document.querySelector('main');

    const formDestination =

    `
    <div id="form"> 
      <div class="container" id="container">
        <div class="destination-container" id ="container-destination">
          <form id="createDest">
            <h1>Chose a destination </h1>
            <span>Where to go ? </span>
              <input type="text" placeholder="ex. Paris, Japan, ..." id="destination" required/>
              <div class="calendar"></div>
              <h4>Start date </h4>
              <input type="date" id="startDate" required/>
              <h4>End date </h4>
              <input type="date" id="endDate" required/>
            <input type="submit" value="Start dreaming" />
          </form>
        </div>
      </div>
    </div>
    `;
  formDestinationPage.innerHTML = formDestination;

  if(country) {
    const destinationField = document.getElementById('destination');
    destinationField.value = country.name.common;
    const countryCodeHidden = document.createElement('input');
    countryCodeHidden.type = "hidden";
    countryCodeHidden.value = country.cca3;
  }
  
  const createDest = document.querySelector("#createDest");
  createDest.addEventListener("submit", (event) => {
    event.preventDefault();
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const trip = {
      destination,
      startDate,
      endDate,
    }
    localStorage.setItem('trip', JSON.stringify(trip));
    Navigate("/modifytrip");
  });
   
}

export default NewTripPage;