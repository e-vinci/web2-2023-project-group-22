// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import logoImage from '../../img/logo.png'

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
      <img src="${logoImage}" style="width: 100px;">
    </div>
    <div id="content-nav-bar">
      <ul>
        <li><a href="#" data-uri="/">Home page</a></li>
        <li><a href="#" data-uri="/login">Sign In</a></li>
        <li><a href="#" data-uri="/register">Sign Up</a></li>
      </ul>
    </div>
`;
  navbarWrapper.innerHTML = navbar;
};

export default Navbar;
