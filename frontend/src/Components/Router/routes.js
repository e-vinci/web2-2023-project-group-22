import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginRegisterPage from '../Pages/LoginRegisterPage';
import AllTripsPage from '../Pages/AllTripsPage';
import TripPage from '../Pages/TripPage';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/loginOrRegister' : LoginRegisterPage,
  '/alltrips' : AllTripsPage,
  '/trip' : TripPage,
};

export default routes;
