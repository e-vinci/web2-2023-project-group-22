import { clearPage } from '../../../utils/render';

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
  // Google's OAuth 2.0 endpoint for requesting an access token
  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  const form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);
  form.setAttribute('target', '_blank');

  // Parameters to pass to OAuth 2.0 endpoint.
  const params = {'client_id': process.env.GOOGLE_CLIENT_ID,
                'redirect_uri': 'http://localhost:8080/oauth2callback',
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};

  Object.entries(params).forEach((param) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', param[0]);
    input.setAttribute('value', param[1]);
    form.appendChild(input);
  })

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}
  
export default LoginRegisterPage;