import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import Navbar from './Components/Navbar/Navbar';
import Router from './Components/Router/Router';
import Footer from './Components/Footer/Footer';

Navbar();
Router();
Footer();

// Create the script tag, set the appropriate attributes
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&libraries=places&callback=initMap`;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
// JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);