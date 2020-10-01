var fName = document.getElementById("name");
var lName = document.getElementById("surname");
var city = document.getElementById("city");

var myButton = document.querySelector("button").addEventListener("click" , function(){
    var reset = confirm("Are you sure you want to reset all text?");
    if (reset == true) {
    fName.value = "";
    lName.value = "";
    city.value = "";
    }
})
