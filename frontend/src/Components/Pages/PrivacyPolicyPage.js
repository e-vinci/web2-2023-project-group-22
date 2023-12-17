import { clearPage } from "../../utils/render";

const PrivacyPolicyPage = () => {
    clearPage();
    const main = document.querySelector('main');
    const div = document.createElement('div');
    div.style.marginBottom = '50px';
    div.id = 'privacy-policy';

    const h1 = document.createElement('h1');
    h1.textContent = '- Privacy Policy -';
    div.appendChild(h1);

    const h2Intro = document.createElement('h2');
    h2Intro.textContent = 'Introduction';
    div.appendChild(h2Intro);

    const pIntro = document.createElement('p');
    pIntro.textContent = '• Your privacy is important to us. This privacy policy explains what personal data we collect from you, through our interactions with you and through our products, and how we use that data.';
    div.appendChild(pIntro);

    const h2Info = document.createElement('h2');
    h2Info.textContent = 'What Information We Collect';
    div.appendChild(h2Info);

    const pInfo = document.createElement('p');
    pInfo.textContent = '• We collect data to operate effectively and provide you the best experiences with our products. You provide some of this data directly, such as when you create a personal account. We get some of it by recording how you interact with our products by, for example, using technologies like cookies.';
    div.appendChild(pInfo);

    const h2Why = document.createElement('h2');
    h2Why.textContent = 'Why We Collect Information';
    div.appendChild(h2Why);

    const pWhy = document.createElement('p');
    pWhy.textContent = '• The data we collect helps us provide you with the products we offer. We use this data to improve and personalize your experiences, deliver the products and support, and update you about these services and products, and provide recommendations.';
    div.appendChild(pWhy);

    const h2Use = document.createElement('h2');
    h2Use.textContent = 'How We Use Your Information';
    div.appendChild(h2Use);

    const pUse = document.createElement('p');
    pUse.textContent = '• We use the data we collect to provide you the products we offer, which includes using data to improve and personalize your experiences.';
    div.appendChild(pUse);

    const h2Store = document.createElement('h2');
    h2Store.textContent = 'How We Store and Protect Your Information';
    div.appendChild(h2Store);

    const pStore = document.createElement('p');
    pStore.textContent = "• We're committed to protecting the security of your personal data. We use a variety of security technologies and procedures to help protect your personal data from unauthorized access, use, or disclosure.";
    div.appendChild(pStore);

    const h2ThirdParty = document.createElement('h2');
    h2ThirdParty.textContent = 'Third-Party Disclosure';
    div.appendChild(h2ThirdParty);

    const pThirdParty = document.createElement('p');
    pThirdParty.textContent = '• We do not share your personal data with third parties for their direct marketing purposes without your consent.';
    div.appendChild(pThirdParty);

    const h2Rights = document.createElement('h2');
    h2Rights.textContent = 'User Rights';
    div.appendChild(h2Rights);

    const pRights = document.createElement('p');
    pRights.textContent = '• You can review, edit, or delete your personal data online. You can also make choices about our collection and use of your data.';
    div.appendChild(pRights);

    const h2OptOut = document.createElement('h2');
    h2OptOut.textContent = 'How to Opt Out';
    div.appendChild(h2OptOut);

    const pOptOut = document.createElement('p');
    pOptOut.textContent = '• You have a variety of tools to control the data collected by cookies, web beacons, and similar technologies.';
    div.appendChild(pOptOut);

    const h2Contact = document.createElement('h2');
    h2Contact.textContent = 'Contact Us';
    div.appendChild(h2Contact);

    const pContact = document.createElement('p');
    pContact.textContent = '• If you have a privacy concern, complaint, or question, please contact us at info@where2go.com.';
    div.appendChild(pContact);

    main.appendChild(div);
}

export default PrivacyPolicyPage;