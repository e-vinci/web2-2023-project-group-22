import { clearPage } from '../../../utils/render';
import Navigate from '../../Router/Navigate';

const DashboardPage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user || user.role !== 'admin'){
        Navigate('/');
    }
    clearPage();
}

export default DashboardPage;