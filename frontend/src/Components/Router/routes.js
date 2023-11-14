import HomePage from '../Pages/HomePage';
import LoginRegisterPage from '../Pages/LoginRegisterPage';
import AllCountriesPage from '../Pages/Countries/AllCountriesPage';
import CountryPage from '../Pages/Countries/CountryPage';
import NewTripPage from '../Pages/Trips/NewTripPage';
import TripPage from '../Pages/Trips/TripPage';

const routes = {
  '/': HomePage,
  '/loginOrRegister' : LoginRegisterPage,
  '/countries' : AllCountriesPage,
  '/country' : CountryPage,
  '/newtrip' : NewTripPage,
  '/trip' : TripPage,
};

export default routes;
