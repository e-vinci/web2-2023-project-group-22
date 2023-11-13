import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import AllTripsPage from '../Pages/AllTripsPage';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/login' : LoginPage,
  '/register' : RegisterPage,
  '/voyages' : AllTripsPage,
};

export default routes;
