import { clearPage } from "../../../utils/render";



const NewTripPage = () => {
    clearPage();
    const formDestinationPage = document.querySelector('main');

    const formDestination =

    `
    <div id="form"> 
    <div class="container" id="container">
      <div class="destination-container" id ="container-destination">
        <form action="/">
          <h1>Chose a destination </h1>
          <span>Where to go ? </span>
            <input type="text" placeholder="ex. Paris, Japan " />
            <div class="calendar"></div>
            <h4>Start date </h4>
            <input type="date"/>
            <h4>End date </h4>
            <input type="date" />
          <button>Start dreaming </button>
        </form>
      </div>
        </div>
      </div>
    </div>
  </div>
  `;
  formDestinationPage.innerHTML = formDestination; 
   
}

export default NewTripPage;