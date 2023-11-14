import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import AllCountriesPage from '../Pages/Countries/AllCountriesPage';
import TripPage from '../Pages/TripPage';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/login' : LoginPage,
  '/register' : RegisterPage,
  '/countries' : AllCountriesPage,
  '/trip' : TripPage,
};

export default routes;
