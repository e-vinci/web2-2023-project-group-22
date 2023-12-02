import { clearPage } from '../../utils/render';

const NewPage = async () => {
  clearPage();
  const main = document.querySelector('main');

  const buttons = {
    "clearlocal": clearlocal,
    "initMap": initMap,
  }
  const div = document.createElement('div');
  div.id = "test";
  main.appendChild(div);

  Object.entries(buttons).forEach((button) => {
    const input = document.createElement('input');
    input.type = "submit";
    input.value = `${button[0]}`;
    input.addEventListener('click', button[1]);
    main.appendChild(input);
  });

  const map = document.createElement('div');
  map.id = "map";
  map.style.width = "500px";
  map.style.height = "500px";
  main.appendChild(map)
}
function clearlocal(){
  localStorage.clear()
}

function initMap(){
  let map;
  let service;

  function initialize() {

    // eslint-disable-next-line no-undef
    map = new google.maps.Map(document.getElementById('map'), {
        // eslint-disable-next-line no-undef
        center: new google.maps.LatLng(50.84, 4.357),
        zoom: 15
      });

    const request = {
      // eslint-disable-next-line no-undef
      location: new google.maps.LatLng(50.84, 4.357),
      radius: '600',
      query: 'cinema'
    };

    // eslint-disable-next-line no-undef
    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  }

  function callback(results, status) {
    // eslint-disable-next-line no-undef
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i+=1) {
        console.log(results[i]);
        // eslint-disable-next-line no-undef, no-unused-vars
        const marker = new google.maps.Marker({
          map,
          position: results[i].geometry.location,
          title: results[i].name,
        });
      }
    }
  }

  initialize();
}

export default NewPage;
