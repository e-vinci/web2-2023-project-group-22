import { clearPage } from "../../../utils/render";
import Navigate from "../../Router/Navigate";



const NewTripPage = () => {
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
            <input type="text" placeholder="ex. Paris, Japan " />
            <div class="calendar"></div>
            <h4>Start date </h4>
            <input type="date"/>
            <h4>End date </h4>
            <input type="date" />
          <input type="submit" value="Start dreaming" />
        </form>
      </div>
        </div>
      </div>
    </div>
  </div>
  `;
  formDestinationPage.innerHTML = formDestination;
  
  const createDest = document.querySelector("#createDest");
  createDest.addEventListener("submit", (event) => {
    event.preventDefault();
    Navigate("/trip");
  });
   
}

export default NewTripPage;