import HomePage from '../Pages/HomePage';
import LoginRegisterPage from '../Pages/Users/LoginRegisterPage';
import AllCountriesPage from '../Pages/Countries/AllCountriesPage';
import CountryPage from '../Pages/Countries/CountryPage';
import NewTripPage from '../Pages/Trips/NewTripPage';
import TripPage from '../Pages/Trips/TripPage';
import ProfilePage from '../Pages/Users/ProfilePage';
import NewPage from '../Pages/NewPage';
import GoogleoauthPage from '../Pages/Users/GoogleoauthPage';
import ModifyTripPage from '../Pages/Trips/ModifyTripPage';

const routes = {
  '/': HomePage,
  '/loginOrRegister' : LoginRegisterPage,
  '/countries' : AllCountriesPage,
  '/country' : CountryPage,
  '/newtrip' : NewTripPage,
  '/modifytrip' : ModifyTripPage,
  '/trip' : TripPage,
  '/profile' : ProfilePage,
  '/newpage' : NewPage,
  '/oauth2callback' : GoogleoauthPage,
};

export default routes;
