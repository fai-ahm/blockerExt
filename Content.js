const blockingCondition = true;



//Task for nabeel. 
//1.seperate this code into separate files.
//2.get the current time and display it in the popup.
//3.store the current state of checked items and if all are checked then invert blocking Condition.
//also new items should be able to be added to the check list in the popup
// store the previous day date, after 12pm at night all states go back to unchecked. 
// and the blocking condition becomes true again




//helpful code for Nabeel
/*const now = new Date();
const currentDateTime = now.toLocaleString();
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;*/







//Faisal's Task
if (blockingCondition) {
    if (window.location.hostname === "www.youtube.com") {

        console.log("block these wesbites, until we click done");
        document.body.innerHTML = `<div style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 200px;
        " > <h1>Work First, bitch!</h1></div>`

    }
}



