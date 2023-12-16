import { clearPage } from '../../../utils/render';
import Navigate from '../../Router/Navigate';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
// import getGoogleAuthLink from '../../../models/auths';

const AuthPage = () => {
    clearPage();
    const loginRegisterPage = document.querySelector('main');
    const loginRegisterForm = `
<div id="login-form">
  <div class="container" id="container">
    <div class="form-container sign-up-container">
      <form>
        <h1>Create Account</h1>
        <div class="social-container">
          <a class="social"><i class="bi bi-facebook"></i></a>
          <a class="social googleButton"><i class="bi bi-google"></i></a>
        </div>
        <span>or use your email for registration</span>
          <input type="text" placeholder="Last name" id="signUpLastname"/>
          <input type="text" placeholder="First name" id="signUpFirstname"/>
          <input type="email" placeholder="Email adress" id="signUpEmail"/>
          <input type="password" placeholder="Password" id="signUpPassword"/>
          <input type="password" placeholder="Password confirmation" id="signUpconfirmPassword"/>
          <button id="signUpButton">Sign up</button>
      </form>
    </div>
    <div class="form-container sign-in-container">
      <form>
        <h1>Sign in</h1>
        <div class="social-container">
          <a class="social"><i class="bi bi-facebook"></i></a>
          <a class="social googleButton"><i class="bi bi-google"></i></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email adress" id="signInEmail"/>
        <input type="password" placeholder="Password" id="signInPassword"/>
        <button id="signInButton">Sign in</button>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button class="ghost" id="signIn">Sign In</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button class="ghost" id="signUp">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
    loginRegisterPage.innerHTML = loginRegisterForm;

    // const googleButton = document.querySelectorAll('.googleButton');
    // googleButton.forEach((button) => {
    //   button.addEventListener('click', oauthSignIn);
    // })

    switchLoginRegister();

    const container = document.getElementById('container');
    if(sessionStorage.getItem('clickedNavItem') === "signup") container.classList.add("right-panel-active");
    sessionStorage.removeItem('clickedNavItem');

    const signInButton = document.getElementById('signInButton');
    signInButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const email = document.getElementById('signInEmail').value;
      const password = document.getElementById('signInPassword').value;
      await login({email, password});
      if(localStorage.getItem('user')) {
        Navbar();
        Footer();
        Navigate('/');
      }
    })
    const signUpButton = document.getElementById('signUpButton');
    signUpButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const email = document.getElementById('signUpEmail').value;
      const password = document.getElementById('signUpPassword').value;
      const confirmPassword = document.getElementById('signUpconfirmPassword').value;
      const firstname = document.getElementById('signUpFirstname').value;
      const lastname = document.getElementById('signUpLastname').value;
      await register({email, password, confirmPassword, firstname, lastname});
      if(localStorage.getItem('user')){
        Navbar();
        Footer();
        Navigate('/');
      }
    })
  };
function switchLoginRegister(){
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });
}

// function oauthSignIn() {
//   if(localStorage.getItem('google_access_token') !== null){
//     if(localStorage.getItem('google_user_info') !== null){
//       Navigate('/');
//     }
//     else{
//       getGoogleUserInfo();
//     }
//   }
//   else{
//     window.open(getGoogleAuthLink(), "googleWindow", `left=${(window.innerWidth/2)-450/2},top=${(window.innerHeight/2)-600/2},width=450,height=600`);
//     const interval = setInterval(() => {
//       if(localStorage.getItem('google_access_token')) {
//         clearInterval(interval);
//         getGoogleUserInfo();
//       }
//     }, 500);
//   }
// }

// function getGoogleUserInfo(){
//   fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
//     headers: {Authorization: `Bearer ${localStorage.getItem('google_access_token')}`}
//   })
//   .then(resp => resp.json())
//   .then(json => localStorage.setItem('google_user_info', JSON.stringify(json)));
// }

async function login(user){
  await fetch('http://localhost:3000/auths/login', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      "email": user.email,
      "password": user.password
  })
  })
  .then((response) => {
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((result) => {
    localStorage.setItem('user', JSON.stringify(result));
  });
}

async function register(user){
  await fetch('http://localhost:3000/auths/register', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      "firstname": user.firstname,
      "lastname": user.lastname,
      "email": user.email,
      "password": user.password,
      "confirmPassword": user.confirmPassword
  })
  })
  .then((response) => {
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((result) => {
    localStorage.setItem('user', JSON.stringify(result));
  });
}
  
export default AuthPage;