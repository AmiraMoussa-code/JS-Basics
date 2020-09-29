document.getElementById("validate").onclick = function(a,b,c){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var city = document.getElementById("city").value;

    alert("Hello, \nName : " + name + "\nSurname : " + surname + "\nCity : " + city);
}