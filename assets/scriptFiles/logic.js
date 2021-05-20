
// *! CONFIRMED VARIABLES
// todo: global variables

var hours = $("#hours").on("click",);
console.log(hours);
var amenities = $("#amenities").on("click",);
console.log(amenities);
var alerts = $("#alerts").on("click",);
console.log(alerts);
var ContainerEl = document.querySelector('#container');
var MAPQ_API_KEY = "yQcB9Koy5KFxIcWM6GPCjCJ132aiYGhh";
var parkList = [];
var API_KEY = "wuCQVj3eIqguFjOi2HEN7r2l4IDFb4FD90hGt35N"
console.log(parkList)

// hours amenities alerts



// TODO declare & troubleshoot
// var dynamicButton = document.createElement('div');

// dynamicButton.appendChild(statusEl);
// parkList.appendChild(data.fullName);

// var statusEl = document.createElement('span');
// statusEl.classList = 'flex-row align-center';
// TODO finish between




function npsApiCall() {
    $.ajax({
        url: `https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=NJ&api_key=${API_KEY}`,
        success: function (response) {
            var data = response.data[0]
            var latitude = data.latitude;
            var longitude = data.longitude;
            var fullName = data.fullName;
            // data.array.forEach(element => {
            //    fullName.
            // });
            parkList.push(fullName);
            console.log(fullName, latitude, longitude);
            mapQuestApiCall(latitude, longitude);
        }
    })
};




npsApiCall();

//*! LAT & LONGITUDE
function mapQuestApiCall(x, y) {
    console.log(x, y)
    var mapUrl = "https://www.mapquestapi.com/staticmap/v5/map?key=" + MAPQ_API_KEY + "&center=" + x + "," + y + "&zoom=10&type=hyb&size=600,400@2x";
    console.log(mapUrl)
};

