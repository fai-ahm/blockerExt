const now = new Date();

// get the current date and time as a string
const currentDateTime = now.toLocaleString();

console.log(window.location.hostname);


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

//block times 
if (window.location.hostname === "www.youtube.com") {

    console.log("block these wesbites, until we click done");


}

