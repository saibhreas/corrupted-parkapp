// *!GLOBAL VARIABLES:

// array of objects that stores park names, and hides  until it is called

var parkList = [];




$(document).ready(function () {
    console.log("ready");

    var initialSearch = $("#search-park")
    var firstSelectionButton = document.querySelector("#park-number-one");
    var count = localStorage.getItem("count");

    //*!
    counter.textContent = count;




    //*! event listener for button searches

    firstSelectionButton.addEventListener("click", function () {
        if (count < 24) {
            count++;
            counter.textContent = count;
            localStorage.setItem("count", count);
        }
    });


// function that pulls park names using - state code as criteria for searching in nj







// for each park in array in nj then you append it to the drop box




// span in index that text is appended to 



});