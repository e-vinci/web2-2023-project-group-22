import { clearPage } from "../../utils/render";

const PrivacyPolicyPage = () => {
    clearPage();
    const main = document.querySelector('main');
    main.innerText = 'privacy';
}

export default PrivacyPolicyPage;