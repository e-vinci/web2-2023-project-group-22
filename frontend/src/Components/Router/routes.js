import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import AllTripsPage from '../Pages/AllTripsPage';
import TripPage from '../Pages/TripPage';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/login' : LoginPage,
  '/register' : RegisterPage,
  '/alltrips' : AllTripsPage,
  '/trip' : TripPage,
};

export default routes;
