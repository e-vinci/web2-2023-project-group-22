import { clearPage } from '../../utils/render';

const NewPage = async () => {
  clearPage();
  const main = document.querySelector('main');

  const buttons = {
    "clearlocal": clearlocal,
    "initMap": initMap,
    "drag&drop": dragdrop,
  }

  Object.entries(buttons).forEach((button) => {
    const input = document.createElement('input');
    input.type = "submit";
    input.value = `${button[0]}`;
    input.addEventListener('click', button[1]);
    main.appendChild(input);
  });

  const div = document.createElement('div');
  div.id = "test";
  div.className = "containertest";
  main.appendChild(div);

  const map = document.createElement('div');
  map.id = "map";
  map.style.width = "500px";
  map.style.height = "500px";
  main.appendChild(map);
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

// function dragdrop(){
//   const div = document.getElementById('test');
//   for (let i = 0; i < 4; i+=1) {
//     const item = document.createElement('div');
//     item.className = "testitem";
//     item.draggable = true;
//     item.style.width = "400px";
//     item.style.height = "100px";
//     item.style.border = "1px solid black";
//     item.innerText = i;

//     item.addEventListener('dragstart', () => {
//       item.classList.add('dragging');
//     })

//     item.addEventListener('dragend', () => {
//       item.classList.remove('dragging');
//     })

//     div.appendChild(item);
//   }

//   const container = document.querySelector('.containertest');
//   container.addEventListener('dragover', e => {
//     e.preventDefault()
//     const afterElement = getDragAfterElement(container, e.clientY)
//     const draggable = document.querySelector('.dragging')
//     if (afterElement == null) {
//       container.appendChild(draggable)
//     } else {
//       container.insertBefore(draggable, afterElement)
//     }
//   })
// }

// function getDragAfterElement(container, y) {
//   const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

//   return draggableElements.reduce((closest, child) => {
//     const box = child.getBoundingClientRect()
//     const offset = y - box.top - box.height / 2
//     if (offset < 0 && offset > closest.offset) {
//       return { offset, element: child }
//     } 
//       return closest
    
//   }, { offset: Number.NEGATIVE_INFINITY }).element
// }

function dragdrop(){
  const main = document.querySelector('main');
  main.innerHTML += `
  <div class="container">
    <p class="draggable" draggable="true">1</p>
    <p class="draggable" draggable="true">2</p>
    <p class="draggable" draggable="true">3</p>
    <p class="draggable" draggable="true">4</p>
  </div>
  `;
  const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})
}
function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child }
    } 
      return closest
    
  }, { offset: Number.NEGATIVE_INFINITY }).element
}
export default NewPage;
