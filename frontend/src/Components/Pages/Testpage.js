import { clearPage } from '../../utils/render';
// import logoImageNoir from '../../img/logo.png';
// import image from '../../img/imageVille.jpg';
// import image1 from '../../img/usertest.png';
// import Navigate from '../Router/Navigate';

const Testpage = async () => {
    clearPage();

    const modifiTripPageLeftSide = document.getElementById('modify-trip-page-left-side');
    fetch('http://localhost:3000/trips/places/all', {
          method: 'GET'
    })
    .then((response) => {
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
    })
    .then((places) =>{
        const category = {};
        Object.entries(places).forEach((place) =>{
            if(!category[place[1].types[0]]) category[place[1].types[0]] = [place[1]];
            else category[place[1].types[0]].push(place[1]);
        });
        Object.entries(category).forEach((c) => {
            console.log(c);
            const categoryDiv = document.createElement("div");
            categoryDiv.id = `${c[0]}`;
            const categoryDivTitle = document.createElement('h1');
            categoryDivTitle.innerText = `${c[0]}`;
            categoryDiv.appendChild(categoryDivTitle);
            c[1].forEach((t) => {
                if(t.types[0] === c[0]){
                    const place = document.createElement("div");
                    place.className = "card";
                    place.innerText = `${t.name  } ${  t.rating } ${ t.icon}`;
                    categoryDiv.appendChild(place);
                }
            })
            modifiTripPageLeftSide.appendChild(categoryDiv);
        })
        
    });
}






export default Testpage;