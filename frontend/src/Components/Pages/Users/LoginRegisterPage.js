import { clearPage } from '../../../utils/render';
import Navigate from '../../Router/Navigate';

const LoginRegisterPage = () => {
    clearPage();
    const loginRegisterPage = document.querySelector('main');
    const loginRegisterForm = `
<div id="login-form">
  <div class="container" id="container">
    <div class="form-container sign-up-container">
      <form action="/">
        <h1>Create Account</h1>
        <div class="social-container">
          <a class="social"><i class="bi bi-google"></i></a>
          <a class="social googleButton"><i class="bi bi-facebook"></i></a>
        </div>
        <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
    <div class="form-container sign-in-container">
      <form action="/">
        <h1>Sign in</h1>
        <div class="social-container">
          <a class="social"><i class="bi bi-facebook"></i></a>
          <a class="social googleButton"><i class="bi bi-google"></i></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
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
    const googleButton = document.querySelectorAll('.googleButton');
    googleButton.forEach((button) => {
      button.addEventListener('click', oauthSignIn);
    })
    switchLoginRegister();
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

function oauthSignIn() {
  // if(localStorage.getItem('google_access_token') !== null) console.log("already existing token");
  // else{
  //   fetch('http://localhost:3000/auths/google/url')
  //   .then((response) => {
  //     if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  //     return response.json();
  //   })
  //   .then((url) => window.open(url, "googleWindow", `left=${(window.innerWidth/2)-450/2},top=100,width=450,height=600`));
  // }
  fetch('http://localhost:3000/auths/google/url')
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((url) => {
      Navigate('/pendingconnection');
      localStorage.clear();
      window.open(url, "googleWindow", `left=${(window.innerWidth/2)-450/2},top=${(window.innerHeight/2)-600/2},width=450,height=600`)
    });
}
  
export default LoginRegisterPage;