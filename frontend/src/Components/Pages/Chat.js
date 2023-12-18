import { clearPage } from "../../utils/render";

const main = document.querySelector('main');

const ChatPage = () => {
    clearPage();
    main.innerHTML = "<h1>CREATE TRIP PAGE</h1>";
}

export default ChatPage;