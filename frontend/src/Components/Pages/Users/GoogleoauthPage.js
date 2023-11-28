import { clearPage } from "../../../utils/render";

const GoogleoauthPage = () => {
    clearPage();
    const params = new URLSearchParams(window.location.hash);
    if(!params.get('error')){
        if(params.get('access_token'))
            localStorage.setItem('google_access_token', params.get('access_token'));
        window.close('googleWindow');
    }
}

export default GoogleoauthPage;