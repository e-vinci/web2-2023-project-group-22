import HomePage from '../Pages/HomePage';
import LoginRegisterPage from '../Pages/LoginRegisterPage';
import AllCountriesPage from '../Pages/Countries/AllCountriesPage';
import CountryPage from '../Pages/Countries/CountryPage';
import TripPage from '../Pages/TripPage';

const routes = {
  '/': HomePage,
  '/loginOrRegister' : LoginRegisterPage,
  '/countries' : AllCountriesPage,
  '/country' : CountryPage,
  '/trip' : TripPage,
};

export default routes;
