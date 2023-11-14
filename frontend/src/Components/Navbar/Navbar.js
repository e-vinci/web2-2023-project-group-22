// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import logoImage from '../../img/logo.png'
// eslint-disable-next-line camelcase
import logoImageNoir from '../../img/logo-blanc.png'

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

 


const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = 
`   
  <div id="logo">
      <a href="#"><img src="${logoImage}" data-uri="/" style="width: 100px;"></a>
      <a href="#"><img src="${logoImageNoir}" data-uri="/" style="width: 100px;"></a>
  </div>
    <ul>
        <li class="hover-navbar"><a href="#" data-uri="/">Home page</a></li>
        <li class="hover-navbar"><a href="#" data-uri="/loginOrRegister">Sign In</a></li>
        <li class="hover-navbar"><a href="#" data-uri="/loginOrRegister">Sign Up</a></li>
      </ul>
`;
  navbarWrapper.innerHTML = navbar;
};

export default Navbar;
