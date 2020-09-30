document.getElementById("validate").onclick = function(a,b){
    var fNumber = document.getElementById("first_number").value;
    var sNumber = document.getElementById("second_number").value;

    var mod = fNumber % sNumber;
    alert(mod);
}