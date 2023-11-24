import { clearPage } from "../../../utils/render";

const main = document.querySelector('main');

const NewTripPage = () => {
    clearPage();

    const formDestination =
    `
    <div id="destination-form"> 
    <div class="container" id="container">
      <div class="form-container destination-container">
        <form action="/">
          <h1>Chose a destination </h1>
          <span>Where to go ? </span>
            <input type="text" placeholder="ex. Paris, Japan " />
            <div class="calendar"></div>
            <input type="date" />
          <button>Start dreaming </button>
        </form>
      </div>
      <di class="form-container destination-container">
        
      </di
        </div>
      </div>
    </div>
  </div>
  `;
    main.innerHTML = formDestination; 
   
}

export default NewTripPage;