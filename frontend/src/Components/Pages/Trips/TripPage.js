import { clearPage } from "../../../utils/render"

const main = document.querySelector('main');

const TripPage = () => {
    clearPage();
    main.innerHTML = "<h1>DISPLAY EXISTING TRIP PAGE</h1>";
}

export default TripPage;