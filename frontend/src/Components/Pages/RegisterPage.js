import { clearPage } from '../../utils/render';

const Register = () => {
    clearPage();
    const RegisterPage = document.querySelector('main');
    const RegisterForm = `
    <!-- Button trigger modal -->
    <div id="login-form">
      <div class="container" id="container">

        <div class="form-container sign-up-container">
          <form action=".form-container sign-in-container">
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fa fa-google" aria-hidden="true"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>

        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button class="ghost" id="signIn">Sign In</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    `

  RegisterPage.innerHTML = RegisterForm;
  };

  
export default Register;