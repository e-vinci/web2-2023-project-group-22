import { clearPage } from "../../../utils/render";
import Navigate from "../../Router/Navigate";

const ModifyTripPage = () => {
    if(!localStorage.getItem('trip')) Navigate('/newtrip');
    clearPage();
    const trip = JSON.parse(localStorage.getItem('trip'));
    localStorage.removeItem('trip');
    const content = `
        <p>Destination: ${trip.destination}</p>
        <p>From: ${trip.startDate}<p>
        <p>To: ${trip.endDate}</p>
    `;
    document.querySelector('main').innerHTML = content;
}

export default ModifyTripPage;