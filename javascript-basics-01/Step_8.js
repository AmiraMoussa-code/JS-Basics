document.getElementById("validate").onclick = function(a){
    var age = document.getElementById("age").value;

    if( age > 18 ){
        alert("You are over 18")
    }else if (age == 18){
        alert("You are 18!")
    }else {
        alert("You are under 18")
    }
}