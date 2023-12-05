// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
// import logoImage from '../../img/logo.png'
// eslint-disable-next-line camelcase
import logoImageNoir from '../../img/logo-blanc.png'
import Navigate from '../Router/Navigate';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

 
const Navbar = () => {
  const userData = JSON.parse(localStorage.getItem('user')); 
  if(localStorage.getItem('user')){
    if(userData.role === 'admin'){
      NavbarAdmin();
    }else{
      NavbarConnected();
    }
  }else{
    NavbarNonConnected();
  }
  
   
}

function NavbarNonConnected () {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = 
`   
  <div id="logo">
      <a href="#"><img src="${logoImageNoir}" data-uri="/" style="width: 120px;"></a>
  </div>
    <ul>
        <li id="test1" class="hover-navbar"><a href="#" data-uri="/auth" class="nav-item">Sign In</a></li>
        <li id="test2" class="hover-navbar"><a href="#" data-uri="/auth" class="nav-item" id="signup">Sign Up</a></li>
    </ul>
`;
  navbarWrapper.innerHTML = navbar;
};

function NavbarConnected() {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = 
`   
  <div id="logo">
      <a href="#"><img src="${logoImageNoir}" data-uri="/" style="width: 120px;"></a>
  </div>
        <li class="hover-navbar"><a href="#" data-uri="/profile" class="nav-item">Profile</a></li>
        <li class="hover-navbar"><a class="nav-item" id="logout">Log out</a></li>
    </ul>
`;
  navbarWrapper.innerHTML = navbar;
  const logout = document.getElementById('logout');
  logout.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload()
    Navigate('/');
  })
}

function NavbarAdmin() {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = 
`   
  <div id="logo">
      <a href="#"><img src="${logoImageNoir}" data-uri="/" style="width: 120px;"></a>
  </div>
    <ul>
        <li class="hover-navbar"><a href="#" data-uri="/profile" class="nav-item">Profil</a></li>
        <li class="hover-navbar"><a href="#" data-uri="/admin/dashboard" class="nav-item">Dashboard</a></li>
        <li class="hover-navbar"><a class="nav-item" id="logout">Log out</a></li>
    </ul>
`;
  navbarWrapper.innerHTML = navbar;
  const logout = document.getElementById('logout');
  logout.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload()
    Navigate('/');
  })
}




export default Navbar;
