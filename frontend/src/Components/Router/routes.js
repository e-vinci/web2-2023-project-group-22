import HomePage from '../Pages/HomePage';
import LoginRegisterPage from '../Pages/Users/LoginRegisterPage';
import AllCountriesPage from '../Pages/Countries/AllCountriesPage';
import CountryPage from '../Pages/Countries/CountryPage';
import NewTripPage from '../Pages/Trips/NewTripPage';
import TripPage from '../Pages/Trips/TripPage';
import ProfilPage from '../Pages/Users/ProfilPage';
import NewPage from '../Pages/NewPage';

const routes = {
  '/': HomePage,
  '/loginOrRegister' : LoginRegisterPage,
  '/countries' : AllCountriesPage,
  '/country' : CountryPage,
  '/newtrip' : NewTripPage,
  '/trip' : TripPage,
  '/profil' : ProfilPage,
  '/newpage' : NewPage
};

export default routes;
