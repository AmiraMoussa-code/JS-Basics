var myDiv = document.getElementById("myDiv");
var myInput = document.getElementById("name");

 myInput.addEventListener("change" ,function(){
    
     myDiv.innerHTML = myInput.value;
 });