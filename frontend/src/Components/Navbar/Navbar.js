// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

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
  <nav>
  <div id="navbar">
    <div id="logo">
      <img src="./img/logo.png" style="width: 100px;">
    </div>
    <div id="content-nav-bar">
      <ul>
        <li><a href="#" data-uri="/"></a>Home page</li>
      </ul>
    </div>
  </div>
  </nav>

  `;
  navbarWrapper.innerHTML = navbar;
};

export default Navbar;
