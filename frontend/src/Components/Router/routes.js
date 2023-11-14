import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginRegisterPage from '../Pages/LoginRegisterPage';
import AllCountriesPage from '../Pages/Countries/AllCountriesPage';
import TripPage from '../Pages/TripPage';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/loginOrRegister' : LoginRegisterPage,
  '/countries' : AllCountriesPage,
  '/trip' : TripPage,
};

export default routes;
