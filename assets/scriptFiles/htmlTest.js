var formEl = $('infoChoices');
function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

    // Select all checked options
  var checkedEl = $('input:checked');
  var selected = [];
console.log(checkedEl);
  // Loop through checked options to store in array
  $.each(checkedEl, function () {
    selected.push($(this).val());
  });
  console.log('Requests ', selected.join(', '));

  // Clear input fields

  $('input[type="checkbox"]').prop('checked', false);
}

function npsApiCall(){ 

$.ajax({
  url:"https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=NJ&api_key=wuCQVj3eIqguFjOi2HEN7r2l4IDFb4FD90hGt35N", 
  success: function(response){
    var parkName = response.data[0].fullName;
    var parkCode = response.data[0].id;
    console.log(response);
  }
})
.then(function(){
  console.log (response.data[2])
})
}
npsApiCall()
// Submit event on the form
formEl.on('submit', handleFormSubmit);
