import { clearPage } from "../../../utils/render";
 // import Navigate from "../../Router/Navigate";

const NewTripPage = () => {
  const country = JSON.parse(localStorage.getItem('countryData'));
  localStorage.removeItem('countryData');
  clearPage();
  const main = document.querySelector('main');
  document.head.innerHTML += `
  <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

  `;

  const formDestination =`

  <div id="form"> 
    <div class="container" id="container">
      <div class="destination-container" id ="container-destination">
        <form>
          <h1>Chose a destination </h1>
          <span>Where to go ? </span>
            <input type="text" placeholder="ex. Paris, Japan, ..." id="destination" required/>  

           
            <input type="text" name="datefilter" value="" />
           
          <input type="submit" value="Start dreaming" id="createDest"/>
        </form>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" id="signinmodal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">You must be signed in order to use this</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" id="signIn">Sign in</button>
        </div>
      </div>
    </div>
  </div>
  `; 

 
  main.innerHTML = formDestination;


//   const datePickerRange  = `

//   <script>
// $(function() {
//   $('input[name="daterange"]').daterangepicker({
//     opens: 'left'
//   }, function(start, end, label) {
//     console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
//   });
// });
// </script>

//   `;
//   main.innerHTML = datePickerRange;


  if(country) {
    const destinationField = document.getElementById('destination');
    destinationField.value = country.name.common;
  }

  // const signInButton = document.getElementById('signIn');
  // signInButton.addEventListener('click', () => {
  //   Navigate('/auth')
  // });
  
  const submit = document.getElementById("createDest");
  submit.addEventListener('click', async (event) => {
    event.preventDefault();
    if(!localStorage.getItem('user')) console.log("add login modal");
    else{
      event.preventDefault();
      const destination = document.getElementById('destination').value;
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      await fetch('http://localhost:3000/trips/createtrip', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('user')).token,
      },
      method: 'POST',
      body: JSON.stringify({
        "countryCode": destination,
        "startDate": startDate,
        "endDate": endDate
      })
      })
      .then((response) => {
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
      })
      .then((result) => {
        localStorage.setItem('trip', JSON.stringify(result));
        Navigate("/modifytrip");
      });
    }
  });   
}

export default NewTripPage;