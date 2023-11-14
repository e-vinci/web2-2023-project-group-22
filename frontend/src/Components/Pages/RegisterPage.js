import { clearPage } from '../../utils/render';

const Register = () => {
    clearPage();
    const RegisterPage = document.querySelector('main');
    const RegisterForm = `
    <!-- Button trigger modal -->
    <div id="login-form">
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign Up</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Nom" />
            <input type="date" placeholder="Date de naissance" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <a href="#">Forgot your password?</a>
            <button>Sign Up</button>
          </form>
        </div>

        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
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